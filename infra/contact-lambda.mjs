// Sellwood contact form -> Amazon SES. Node.js 22 Lambda (Function URL).
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const ses = new SESv2Client({});
const FROM = process.env.FROM_EMAIL || 'noreply@ironhealthsolutions.com';
const TO = (process.env.TO_EMAILS || 'hrmanager@sellwoodmd.com').split(',').map((s) => s.trim());
const ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://sellwoodmd.com,https://www.sellwoodmd.com').split(',');

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const handler = async (event) => {
  const origin = event.headers?.origin || '';
  const cors = {
    'Access-Control-Allow-Origin': ORIGINS.includes(origin) ? origin : ORIGINS[0],
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Content-Type': 'application/json',
  };
  const reply = (code, body) => ({ statusCode: code, headers: cors, body: JSON.stringify(body) });

  const method = event.requestContext?.http?.method;
  if (method === 'OPTIONS') return reply(204, {});
  if (method !== 'POST') return reply(405, { ok: false });

  let data;
  try { data = JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body); }
  catch { return reply(400, { ok: false }); }

  // Honeypot: bots fill the hidden field. Pretend success, send nothing.
  if (data.company_website) return reply(200, { ok: true });

  const name = clean(data.name, 100);
  const email = clean(data.email, 150);
  const phone = clean(data.phone, 40);
  const message = String(data.message ?? '').trim().slice(0, 4000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply(400, { ok: false, error: 'invalid' });

  const text = `New website message\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\nMessage:\n${message}\n`;
  const html = `<h3>New website message</h3><p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Phone:</b> ${esc(phone || '-')}</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`;

  try {
    await ses.send(new SendEmailCommand({
      FromEmailAddress: `Sellwood Website <${FROM}>`,
      Destination: { ToAddresses: TO },
      ReplyToAddresses: [email],
      Content: { Simple: {
        Subject: { Data: `Website contact: ${name}` },
        Body: { Text: { Data: text }, Html: { Data: html } },
      } },
    }));
    return reply(200, { ok: true });
  } catch (err) {
    console.error('SES error', err);
    return reply(500, { ok: false });
  }
};
