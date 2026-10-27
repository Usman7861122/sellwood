const OLD = 'https://sellwoodmd.com';

export const site = {
  name: 'Sellwood Medical Clinic',
  url: 'https://sellwoodmd.com',
  tagline: 'Family & pediatric care in Portland',
  description:
    'Trusted family medicine, pediatrics, newborn care and gynecology in Portland and Beaverton, Oregon. Four locations, same-day visits, most insurance accepted.',
  phone: '503-595-9300',
  phoneHref: 'tel:+15035959300',
  portalUrl: 'https://3083.portal.athenahealth.com/',
  // One booking link for every "Book" button
  bookingUrl: `${OLD}/services/same-day-visit/`,
  contactApi: '', // TODO: form endpoint
  social: {
    facebook: 'https://www.facebook.com/p/Sellwood-Medical-Clinic-100063637537414/',
    instagram: 'https://www.instagram.com/sellwood.medical.clinic/',
  },
  old: OLD,
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Providers', href: '#providers' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export const homeSections = [
  'hero', 'highlights', 'about', 'achievements', 'services', 'faq', 'tour',
  'why', 'providers', 'insurance', 'testimonials', 'blog', 'locations', 'contact',
];

export const heroLines = [
  { kicker: 'Sellwood Medical Clinic', before: 'Care for every', accent: 'family.' },
  { kicker: 'Newborns to grandparents', before: 'One trusted team,', accent: 'every age.' },
  { kicker: 'Same-day visits', before: 'Close to home,', accent: 'right on time.' },
  { kicker: 'Portland & Beaverton', before: 'Twenty-three years of', accent: 'kind care.' },
];

export const highlights = [
  { value: 4, suffix: '', label: 'Portland-area locations accepting new patients' },
  { value: 23, suffix: '+', label: 'Years serving local families, newborns to grandparents' },
  { value: 0, text: 'Most', label: 'Major insurance plans accepted' },
  { value: 0, text: 'Same-day', label: 'Appointments available' },
];

export const services = [
  { title: 'Pediatrics', text: 'Compassionate pediatric care for infants, children, and teens in the Portland area.', href: '/services/pediatrics/', img: 'pediatrics' },
  { title: 'Same-Day Visits', text: 'Same-day visits for urgent pediatric and adult healthcare needs.', href: '/services/same-day-visits/', img: 'sameDay' },
  { title: 'Newborn Care', text: 'Comprehensive care for newborns and their families.', href: '/services/newborn-care/', img: 'newborn' },
  { title: 'Newborn Meet & Greet', text: 'Free virtual appointments to help parents meet their pediatric team.', href: '/services/newborn-care/expecting-parents-newborn-meet-greet/', img: 'meetGreet' },
  { title: 'Internal Medicine', text: 'Adult care: prevention, diagnostics, and chronic condition management.', href: '/services/internal-medicine/', img: 'internal' },
  { title: 'Gynecology', text: 'Exams, contraception, and hormonal health support.', href: '/services/gynecology/', img: 'gynecology' },
] as const;

export const faqs = [
  { q: 'What is primary care?', a: 'Comprehensive healthcare for patients of all ages: pediatrics, family medicine, internal medicine, gynecology, newborn care, preventive care, immunizations, and same-day visits. Whether you need a wellness exam, care for an illness or minor injury, or help with an ongoing condition, our team will guide you.' },
  { q: 'Does Sellwood Medical Clinic offer same-day appointments?', a: 'Yes. Same-day visits are available for children and adults with fever, cold or flu symptoms, earaches, rashes, minor injuries, abdominal pain, strains, sprains, and other non-life-threatening conditions. For a serious or life-threatening emergency, please go to emergency care.' },
  { q: 'Does the clinic provide care for children and newborns?', a: 'Yes. We care for infants, children, and teens, with newborn visits, developmental assessments, immunizations, and wellness exams. Expecting parents can also book a free virtual Newborn Meet & Greet.' },
  { q: 'Can I receive preventive and routine healthcare at the clinic?', a: 'Absolutely. We offer routine physicals, well-child exams, immunizations, and wellness care to find concerns early, plus primary and internal medicine for adults.' },
  { q: 'How do I become a new patient at Sellwood Medical Clinic?', a: 'Review our providers and contact the office about availability. Complete the new-patient paperwork and checklist, send relevant medical records in advance, and arrive about 15 minutes early for your first visit.' },
];

export const safety = [
  { title: 'Masking policy', text: 'Masks are optional for routine and well-child visits. If you have a cough, fever, sore throat or congestion, please wear one. Masks are free at the front desk.' },
  { title: 'Clinic sanitation', text: 'Exam rooms, lobby spaces and high-touch surfaces are disinfected between visits, and our team follows strict hand hygiene.' },
  { title: 'Healthy staffing', text: 'Our clinicians and staff follow daily health guidelines and stay home when they are unwell.' },
];

export const providers = [
  { name: 'Rachel Rittenhouse', creds: 'DNP, ARNP', role: 'Nurse Practitioner', img: 'rittenhouse', href: `${OLD}/providers/` },
  { name: 'Merinda Sterner', creds: 'PA-C', role: 'Physician Assistant', img: 'sterner', href: `${OLD}/providers/` },
  { name: 'Katie Oldread', creds: 'MD, FAAP', role: 'Pediatrician', img: 'oldread', href: `${OLD}/providers/katie-oldread-md-faapp/` },
  { name: 'Monique Pritchard', creds: 'MD, FAAP', role: 'Pediatrician', img: 'pritchard', href: `${OLD}/providers/` },
  { name: 'Kaitlyn Simmons', creds: 'MD, MPH, FAAP', role: 'Pediatrician', img: 'simmons', href: `${OLD}/providers/` },
] as const;

export const testimonials = [
  { quote: 'The staff is great, friendly, upbeat, good sense of humor, and most importantly they are compassionate and kind to the kids.', name: 'Billy R.' },
  { quote: 'Every doctor we’ve seen here has been attentive, professional, and has provided excellent care.', name: 'Stephani G.' },
];

export const posts = [
  { title: 'At What Age Should My Teenager Transition to Adolescent Gynecology Services?', href: `${OLD}/at-what-age-should-my-teenager-transition-to-adolescent-gynecology-services/`, img: 'teen' },
  { title: 'Preparing to Bring Your Newborn Home: 4 Essential Steps', href: `${OLD}/preparing-to-bring-your-newborn-home-4-essential-steps/`, img: 'newborn' },
  { title: 'Back-to-School Prep: How to Set Your Child Up for Success', href: `${OLD}/back-to-school-prep-how-to-set-your-child-up-for-success/`, img: 'school' },
] as const;

export const locations = [
  { name: 'Pediatrics, Sellwood', address: '8332 SE 13th Avenue', city: 'Portland, OR 97202' },
  { name: 'Adult Medicine, Sellwood', address: '8333 SE 13th Avenue', city: 'Portland, OR 97202' },
  { name: 'Pediatrics, North Portland', address: '6234 N Greeley Avenue', city: 'Portland, OR 97217' },
  { name: 'Pediatrics & Adult Medicine, Westside', address: '9925 SW Nimbus Ave Suite 100', city: 'Beaverton, OR 97008' },
];

// Every office, used by service pages and their per-location versions.
export interface ServiceLocation { slug: string; label: string; where: string; full: string; address: string; city: string; place: string; care: string; nearby: string }
export const officeLocations: ServiceLocation[] = [
  { slug: 'sellwood', label: 'Sellwood', where: 'Sellwood, Portland, OR', full: 'Pediatrics, Sellwood', address: '8332 SE 13th Avenue', city: 'Portland, OR 97202', place: 'Portland', care: 'Pediatrics', nearby: 'Patients are welcome from across Sellwood, Westmoreland, Brooklyn, Eastmoreland, Milwaukie, Oak Grove and the greater Portland area.' },
  { slug: 'north-portland', label: 'North Portland', where: 'North Portland, OR', full: 'Pediatrics, North Portland', address: '6234 N Greeley Avenue', city: 'Portland, OR 97217', place: 'Portland', care: 'Pediatrics', nearby: 'Patients are welcome from across North Portland, St. Johns, Kenton, Overlook, Piedmont, Portsmouth and the greater Portland area.' },
  { slug: 'beaverton', label: 'Beaverton', where: 'Beaverton, OR', full: 'Pediatrics & Adult Medicine, Westside', address: '9925 SW Nimbus Ave Suite 100', city: 'Beaverton, OR 97008', place: 'Beaverton', care: 'Pediatrics & Adult Medicine', nearby: 'Patients are welcome from across Beaverton, Aloha, Tigard, Hillsboro, Tualatin and the greater Washington County area.' },
  { slug: 'sellwood-adult-medicine', label: 'Sellwood Adult Medicine', where: 'Sellwood (Adult Medicine), Portland, OR', full: 'Adult Medicine, Sellwood', address: '8333 SE 13th Avenue', city: 'Portland, OR 97202', place: 'Portland', care: 'Adult Medicine', nearby: 'Patients are welcome from across Sellwood, Westmoreland, Brooklyn, Eastmoreland, Milwaukie, Oak Grove and the greater Portland area.' },
  { slug: 'sellwood-gynecology', label: 'Sellwood Gynecology', where: 'Sellwood, Portland, OR', full: 'Gynecology, Sellwood', address: '8333 SE 13th Avenue', city: 'Portland, OR 97202', place: 'Portland', care: 'Gynecology', nearby: 'Patients are welcome from across Sellwood, Westmoreland, Brooklyn, Eastmoreland, Milwaukie, Oak Grove and the greater Portland area.' },
];
const byslug = (...s: string[]) => officeLocations.filter((l) => s.includes(l.slug));
export const pediatricLocations: ServiceLocation[] = byslug('sellwood', 'north-portland', 'beaverton');
