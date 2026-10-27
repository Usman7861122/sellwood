import { images } from './images';
import { site } from './site';
import { localServicePaths } from './serviceCatalog';
import { providerPages } from './providerPages';
const localProviderPaths = new Set(['/providers/', ...providerPages.map((p) => `/providers/${p.slug}/`)]);

// Menu copied from the live site (sellwoodmd.com). Inner pages still point to the old site.
const alias: Record<string, string> = { '/services/newborn-care/pediatrics/': '/services/pediatrics/' };
const o = (p: string) => (p.startsWith('http') ? p : alias[p] ?? (localServicePaths.has(p) || localProviderPaths.has(p) || p === '/services/' ? p : site.old + p));

export interface MenuLink { label: string; href: string; meta?: string; external?: boolean }
export interface MenuGroup { title?: string; href?: string; cols?: 1 | 2; links: MenuLink[] }
export interface MenuPanel {
  intro: { title: string; text: string; cta?: MenuLink };
  groups: MenuGroup[];
  image?: { src: string; alt: string };
  quick?: MenuLink[];
}
export interface MenuItem { id: string; label: string; href?: string; panel?: MenuPanel }

const L = (label: string, href: string, meta?: string): MenuLink => ({ label, href: o(href), meta });
// Pages already built in this project use local links.
const I = (label: string, href: string, meta?: string): MenuLink => ({ label, href, meta });

const quick: MenuLink[] = [
  L('Same Day Visit', '/services/same-day-visit/'),
  L('Pediatric Appointments', '/pediatric-appointments/'),
  L('Adult Medicine Appointments', '/adult-medicine/'),
  L('Book Flu/Covid Vaccine', '/book-flu-shoot/'),
];

export const menu: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'about',
    label: 'About Us',
    panel: {
      intro: {
        title: 'About Sellwood',
        text: 'A well-loved family and pediatric practice with four locations in the Portland Metro area.',
        cta: I('About the clinic', '/about-sellwood-medical-clinic/'),
      },
      groups: [{
        links: [
          I('About Sellwood Medical Clinic', '/about-sellwood-medical-clinic/'),
          L('Insurance Providers', '/insurance-providers/'),
          L('Testimonials', '/testimonials/'),
          L('Careers', '/careers/'),
          L('Blog', '/blog/'),
        ],
      }],
      image: { src: images.about, alt: 'A smiling family hugs their children' },
    },
  },
  {
    id: 'services',
    label: 'Services',
    href: o('/services/'),
    panel: {
      intro: {
        title: 'Complete care, under one roof',
        text: 'From newborn visits to adult medicine, our team cares for every age.',
        cta: L('View all services', '/services/'),
      },
      groups: [
        {
          title: 'Newborn Care',
          href: o('/services/newborn-care/'),
          cols: 2,
          links: [
            I('Expecting Parents – Meet & Greet', '/services/newborn-care/expecting-parents-newborn-meet-greet/'),
            L('Newborn First Visit', '/services/newborn-care/newborn-first-visit/'),
            L('Newborn Vaccines', '/services/newborn-care/newborn-vaccines/'),
            L('Newborn Circumcision Care', '/services/newborn-care/newborn-circumcision-care/'),
            L('Lactation Support', '/services/newborn-care/lactation-support/'),
            L('Frenotomy', '/services/newborn-care/frenotomy/'),
            L('Newborn Support Resources', '/services/newborn-care/newborn-support-resources/'),
            L('Pediatrics', '/services/newborn-care/pediatrics/'),
          ],
        },
        {
          title: 'More care',
          links: [
            L('Family Medicine Clinic', '/services/family-medicine-clinic/'),
            L('Gynecology', '/services/gynecology/'),
            L('Same Day Visits', '/services/same-day-visits/'),
            L('View More Services', '/services/'),
          ],
        },
      ],
      image: { src: images.services.newborn, alt: 'A baby looks out from a crib' },
      quick,
    },
  },
  {
    id: 'providers',
    label: 'Providers',
    href: o('/providers/'),
    panel: {
      intro: {
        title: 'Meet our providers',
        text: 'Experienced doctors and clinicians who build long-term relationships with your family.',
        cta: L('View all providers', '/providers/'),
      },
      groups: [{
        links: [
          I('Tara Schwab, MD, FAAP', '/providers/tara-schwab-md-faap/'),
          L('Katie Oldread, MD, FAAPP', '/providers/katie-oldread-md-faapp/'),
          L('Naghmeh Moshtael, MD, FAAP', '/providers/naghmeh-moshtael-md-faap/'),
          L('View More Providers', '/providers/'),
        ],
      }],
      image: { src: images.building, alt: 'Sellwood Medical Clinic building' },
    },
  },
  {
    id: 'patients',
    label: 'Patients',
    panel: {
      intro: {
        title: 'For our patients',
        text: 'Everything you need before, during and after your visit.',
        cta: { label: 'Patient Portal', href: site.portalUrl, external: true },
      },
      groups: [
        {
          title: 'Your care',
          links: [
            L('New Patients', '/services/new-patients/'),
            L('Telemedicine', '/services/telemedicine/'),
            { label: 'Patient Portal', href: site.portalUrl, external: true },
            L('Prescription Policy', '/prescription-policy/'),
            L('Billing', '/billing/'),
          ],
        },
        {
          title: 'Medical Forms',
          href: o('/medical-forms/'),
          links: [
            L('Medical Forms', '/medical-forms/'),
            L('Notice of Privacy Practices', '/medical-forms/notice-of-privacy-practices/'),
            L('Authorization to Release Information Form', '/wp-content/uploads/2025/08/439372-1.pdf'),
          ],
        },
      ],
      image: { src: images.services.internal, alt: 'A patient shakes hands with her doctor' },
      quick,
    },
  },
  {
    id: 'locations',
    label: 'Locations',
    href: o('/locations/'),
    panel: {
      intro: {
        title: 'Four offices, always close',
        text: 'Portland and Beaverton. Same-day visits are available.',
        cta: L('All locations', '/locations/'),
      },
      groups: [{
        links: [
          I('Pediatrics – Sellwood', '/locations/pediatrics-sellwood/', '8332 SE 13th Ave, Portland'),
          L('Adult Medicine – Sellwood', '/locations/sellwood-medical-clinic/', '8333 SE 13th Ave, Portland'),
          L('Gynecology – Sellwood', '/locations/sellwood-medical-clinic/'),
          L('Pediatrics – North Portland', '/locations/sellwood-medical-clinic-north-pediatrics/', '6234 N Greeley Ave, Portland'),
          L('Pediatrics & Adult Medicine – Westside/Beaverton', '/locations/sellwood-medical-clinic-westside-beaverton/', '9925 SW Nimbus Ave, Beaverton'),
        ],
      }],
      image: { src: images.skyline, alt: 'Portland skyline across the river' },
    },
  },
];
