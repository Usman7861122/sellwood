import p1 from './service-bodies/part1.json';
import p2 from './service-bodies/part2.json';
import p3 from './service-bodies/part3.json';
import { officeLocations, type ServiceLocation } from './site';

// [type, text]: h1 | h | p | li | q (FAQ question)
export type Block = [string, string];
const bodies = { ...p1, ...p2, ...p3 } as unknown as Record<string, Block[]>;

const UP = 'https://sellwoodmd.com/wp-content/uploads/';
const img = (f: string) => UP + f;

export type Kind = 'ped' | 'adult' | 'all' | 'gyn';
export interface Service {
  path: string;          // URL path under /services/
  body: string;          // key in the bodies files
  name: string;          // page heading
  seo: string;           // used in the browser title
  group: string;
  kind: Kind;
  img: string;
  tag: string;           // short line under the heading
  desc: string;          // meta description
  locs: string[];        // office slugs where this service is offered
  book: 'pediatric' | 'adult' | 'same-day' | 'portal';
}

const PED = ['sellwood', 'north-portland', 'beaverton'];
const ADULT = ['sellwood-adult-medicine', 'beaverton'];
const ALL = ['sellwood', 'north-portland', 'beaverton', 'sellwood-adult-medicine'];
const GYN = ['sellwood-gynecology'];

export const services: Service[] = [
  // Newborn care
  { path: 'newborn-care', body: 'newborn-care', name: 'Newborn Care', seo: 'Newborn Care', group: 'Newborn care', kind: 'ped', img: img('2025/07/Newborn-Care.jpg'), tag: 'Gentle, expert care for your baby and support for new parents.', desc: 'Compassionate newborn care at Sellwood Medical Clinic. Well-baby visits, growth monitoring, feeding support, immunizations, and guidance for new parents.', locs: PED, book: 'pediatric' },
  { path: 'newborn-care/newborn-first-visit', body: 'newborn-care/newborn-first-visit', name: 'Newborn First Visit', seo: 'Newborn First Visit', group: 'Newborn care', kind: 'ped', img: img('2025/08/NEWBORN-FIRST-VISIT.webp'), tag: 'Your baby’s first checkup with a full exam and feeding guidance.', desc: 'Schedule your baby’s first visit at Sellwood Medical Clinic. A full exam, growth check, feeding guidance, and support for new parents.', locs: PED, book: 'pediatric' },
  { path: 'newborn-care/newborn-vaccines', body: 'newborn-care/newborn-vaccines', name: 'Newborn Vaccines', seo: 'Newborn Vaccines', group: 'Newborn care', kind: 'ped', img: img('2025/08/2148880501.jpg'), tag: 'Safe, evidence-based immunizations from your baby’s first visits.', desc: 'Protect your baby with newborn vaccines at Sellwood Medical Clinic. Safe, evidence-based immunizations and parent education.', locs: PED, book: 'pediatric' },
  { path: 'newborn-care/newborn-circumcision-care', body: 'newborn-care/newborn-circumcision-care', name: 'Newborn Circumcision Care', seo: 'Newborn Circumcision Care', group: 'Newborn care', kind: 'ped', img: img('2025/08/NEWBORN-CIRCUMCISION-CARE.webp'), tag: 'A safe, gentle procedure with clear aftercare guidance.', desc: 'Compassionate newborn circumcision care at Sellwood Medical Clinic. A safe, gentle procedure with parent education and aftercare support.', locs: PED, book: 'pediatric' },
  { path: 'newborn-care/lactation-support', body: 'newborn-care/lactation-support', name: 'Lactation Support', seo: 'Lactation Support', group: 'Newborn care', kind: 'ped', img: '/images/services/lactation-support.jpg', tag: 'One-on-one help with breastfeeding from certified consultants.', desc: 'Expert lactation support at Sellwood Medical Clinic. Breastfeeding guidance and newborn feeding support from certified lactation consultants.', locs: PED, book: 'pediatric' },
  { path: 'newborn-care/frenotomy', body: 'newborn-care/frenotomy', name: 'Frenotomy', seo: 'Frenotomy', group: 'Newborn care', kind: 'ped', img: '/images/services/frenotomy.jpg', tag: 'Help for tongue tie that gets in the way of breastfeeding.', desc: 'Frenotomy at Sellwood Medical Clinic for infants with tongue-tie. Support feeding success with a caring evaluation.', locs: PED, book: 'pediatric' },
  { path: 'newborn-care/newborn-support-resources', body: 'newborn-care/newborn-support-resources', name: 'Newborn Support Resources', seo: 'Newborn Support Resources', group: 'Newborn care', kind: 'ped', img: img('2025/07/Newborn-Care.jpg'), tag: 'Books we recommend for feeding, sleep and development.', desc: 'Trusted newborn support resources from Sellwood Medical Clinic. Recommended reading for feeding, sleep, development and new parents.', locs: PED, book: 'pediatric' },
  // Pediatrics
  { path: 'pediatrics', body: 'pediatrics', name: 'Pediatrics', seo: 'Pediatrics', group: 'Pediatrics', kind: 'ped', img: img('2025/07/2148732572-1.jpg'), tag: 'Care for infants, children and teens, from checkups to sick visits.', desc: 'Trusted pediatric care at Sellwood Medical Clinic. Newborn care, well-child visits, immunizations, physicals and same-day sick visits for children and teens.', locs: PED, book: 'pediatric' },
  { path: 'well-child-exams-immunizations', body: 'well-child-exams-immunizations', name: 'Well Child Exams & Immunizations', seo: 'Well-Child Exams & Immunizations', group: 'Pediatrics', kind: 'ped', img: img('2025/07/Well-Child-Exams-Immunizations.jpg'), tag: 'Preventive checkups and vaccines that keep your child healthy.', desc: 'Schedule well-child exams and immunizations at Sellwood Medical Clinic. Preventive checkups, growth tracking and school-required vaccines.', locs: PED, book: 'pediatric' },
  { path: 'child-development-physical-exam', body: 'child-development-physical-exam', name: 'Child Development/Physical Exam', seo: 'Child Development & Physical Exams', group: 'Pediatrics', kind: 'ped', img: img('2025/07/Child-Development.jpg'), tag: 'Growth checks and developmental screenings at every age.', desc: 'Child development assessments and physical exams at Sellwood Medical Clinic. Growth monitoring, school physicals and developmental screenings.', locs: PED, book: 'pediatric' },
  { path: 'ear-problems-in-children', body: 'ear-problems-in-children', name: 'Ear Problems In Children', seo: 'Ear Problems in Children', group: 'Pediatrics', kind: 'ped', img: img('2025/07/Ear-Problems-In-Children-1-1-e1763978988525.jpg'), tag: 'Fast, gentle care for ear infections and ear pain.', desc: 'Expert care for ear problems in children at Sellwood Medical Clinic. Ear infections, ear pain, swimmer’s ear and hearing concerns.', locs: PED, book: 'pediatric' },
  { path: 'tylenol-and-motrin-dosing', body: 'tylenol-and-motrin-dosing', name: 'Tylenol And Motrin Dosing', seo: 'Tylenol & Motrin Dosing Guide for Kids', group: 'Pediatrics', kind: 'ped', img: '/images/services/medicine-dosing.jpg', tag: 'Dosing guidance for infants and children, by weight.', desc: 'Tylenol and Motrin dosing guidance for infants and children from Sellwood Medical Clinic, with weight-based guidance for parents.', locs: PED, book: 'pediatric' },
  // Visits & prevention (all ages)
  { path: 'same-day-visits', body: 'same-day-visits', name: 'Same-Day Visits', seo: 'Same-Day Visits', group: 'Visits & prevention', kind: 'all', img: img('2025/07/same-day-visit.jpg'), tag: 'Prompt care when you cannot wait for a regular appointment.', desc: 'Same-day visits at Sellwood Medical Clinic for earaches, fever, flu symptoms, rashes, minor injuries and more. Well visits and vaccines too.', locs: ALL, book: 'same-day' },
  { path: 'same-day-visit', body: 'same-day-visit', name: 'Same Day Visit', seo: 'Same-Day Doctor Visits', group: 'Visits & prevention', kind: 'all', img: img('2025/07/same-day-visit.jpg'), tag: 'Same-day and next-day pediatric and adult visits.', desc: 'Fast same-day medical visits at Sellwood Medical Clinic. Urgent sick visits, pediatric care and primary care with compassionate providers.', locs: ALL, book: 'same-day' },
  { path: 'flu-sick-visits', body: 'flu-sick-visits', name: 'Flu/Sick Visits', seo: 'Flu Sick Visits', group: 'Visits & prevention', kind: 'all', img: img('2025/07/Sick-Visits.jpg'), tag: 'Quick care for flu symptoms, fever and body aches.', desc: 'Fast care for flu symptoms at Sellwood Medical Clinic. Same-day sick visits for fever, body aches and cough for children, teens and adults.', locs: ALL, book: 'same-day' },
  { path: 'strep-throat', body: 'strep-throat', name: 'Strep Throat', seo: 'Strep Throat Treatment', group: 'Visits & prevention', kind: 'all', img: '/images/services/strep-throat.jpg', tag: 'Testing and treatment for a painful sore throat.', desc: 'Fast strep throat testing and treatment at Sellwood Medical Clinic. Same-day care for sore throat and fever.', locs: ALL, book: 'same-day' },
  { path: 'common-cold-visits', body: 'common-cold-visits', name: 'Common Cold Visits', seo: 'Common Cold Visits', group: 'Visits & prevention', kind: 'all', img: img('2025/07/Common-Cold-Visits.jpg'), tag: 'Relief for cold symptoms and treatment when you need it.', desc: 'Caring treatment for common cold symptoms at Sellwood Medical Clinic. Same-day visits for kids, teens and adults.', locs: ALL, book: 'same-day' },
  { path: 'immunizations-vaccines', body: 'immunizations-vaccines', name: 'Immunizations/Vaccines', seo: 'Immunizations & Vaccines', group: 'Visits & prevention', kind: 'all', img: img('2025/07/Immunizations.jpg'), tag: 'Vaccines that protect you and your family.', desc: 'Immunizations and vaccines at Sellwood Medical Clinic. Childhood vaccines, adult immunizations, school-required shots and seasonal vaccines.', locs: ALL, book: 'portal' },
  { path: 'flu-shots', body: 'flu-shots', name: 'Flu Shots', seo: 'Flu Shots', group: 'Visits & prevention', kind: 'all', img: img('2025/07/Flu-Shots.jpg'), tag: 'A simple yearly shot that protects you and your family.', desc: 'Get your flu shot at Sellwood Medical Clinic. Fast, convenient flu vaccinations for children, teens and adults.', locs: ALL, book: 'portal' },
  { path: 'telemedicine', body: 'telemedicine', name: 'Telemedicine', seo: 'Telemedicine', group: 'Visits & prevention', kind: 'all', img: '/images/services/telemedicine.jpg', tag: 'See your doctor from home by phone, computer or tablet.', desc: 'Virtual care at Sellwood Medical Clinic for common illnesses, follow-ups and select pediatric and adult primary care needs.', locs: ALL, book: 'portal' },
  { path: 'new-patients', body: 'new-patients', name: 'New Patients', seo: 'New Patients', group: 'Visits & prevention', kind: 'all', img: img('2025/07/New-Patients.jpg'), tag: 'Everything you need to get started with us.', desc: 'Welcome new patients to Sellwood Medical Clinic. What to expect at your first visit and how to prepare.', locs: ALL, book: 'portal' },
  // Adult care
  { path: 'family-medicine-clinic', body: 'family-medicine-clinic', name: 'Family Medicine Clinic', seo: 'Family Medicine Clinic', group: 'Adult & family care', kind: 'all', img: img('2025/07/Family-Medicine-Clinic.jpg'), tag: 'One trusted team for adults and children.', desc: 'A trusted family medicine clinic. Comprehensive primary care for children, teens and adults with same-day appointments available.', locs: ALL, book: 'adult' },
  { path: 'internal-medicine', body: 'internal-medicine', name: 'Internal Medicine', seo: 'Internal Medicine', group: 'Adult & family care', kind: 'adult', img: img('2025/07/Internal-Medicine.jpg'), tag: 'Preventive care and chronic condition management for adults.', desc: 'Comprehensive internal medicine at Sellwood Medical Clinic. Preventive care, chronic disease management and annual physicals.', locs: ADULT, book: 'adult' },
  { path: 'primary-care', body: 'primary-care', name: 'Primary Care', seo: 'Primary Care', group: 'Adult & family care', kind: 'adult', img: img('2025/07/Primary-Care.jpg'), tag: 'The starting point for a happy, healthy life.', desc: 'Comprehensive primary care at Sellwood Medical Clinic. Preventive care, chronic condition management and annual physicals.', locs: ADULT, book: 'adult' },
  { path: 'annual-preventative-physical', body: 'annual-preventative-physical', name: 'Annual Preventative Physical', seo: 'Annual Preventive Physicals', group: 'Adult & family care', kind: 'adult', img: img('2025/07/Annual-Preventative-Physical.jpg'), tag: 'A yearly exam focused on early detection and wellness.', desc: 'Annual preventive physicals at Sellwood Medical Clinic. Comprehensive exams focused on early detection and long-term health.', locs: ADULT, book: 'adult' },
  { path: 'well-women-men-care-exam', body: 'well-women-men-care-exam', name: 'Well Women/Men Care Exam', seo: 'Well Women & Men Exams', group: 'Adult & family care', kind: 'adult', img: img('2025/07/Well-Women.jpg'), tag: 'Preventive exams for the health needs of women and men.', desc: 'Well women and men care exams at Sellwood Medical Clinic. Preventive exams, health screenings and personalized primary care.', locs: ADULT, book: 'adult' },
  // Women's health
  { path: 'gynecology', body: 'gynecology', name: 'Gynecology', seo: 'Gynecology', group: 'Women’s health', kind: 'gyn', img: '/images/services/gynecology.jpg', tag: 'Compassionate women’s health care with Dr. Jenna Murray.', desc: 'Compassionate gynecology at Sellwood Medical Clinic with Dr. Jenna Murray. Preventive exams, birth control, menopause care and more.', locs: GYN, book: 'portal' },
  { path: 'adolescent-gynecology', body: 'adolescent-gynecology', name: 'Adolescent Gynecology', seo: 'Adolescent Gynecology', group: 'Women’s health', kind: 'gyn', img: '/images/services/adolescent-gynecology.jpg', tag: 'Confident, age-appropriate care for teens.', desc: 'Compassionate adolescent gynecology at Sellwood Medical Clinic. Confidential care for teens, including menstrual health and contraception.', locs: ['sellwood-gynecology', 'beaverton'], book: 'portal' },
];

export const bodyOf = (s: Service): Block[] => bodies[s.body] ?? [];
export const serviceHref = (s: Service, loc?: ServiceLocation) => `/services/${s.path}/${loc ? loc.slug + '/' : ''}`;
export const locationsOf = (s: Service): ServiceLocation[] => s.locs.map((l) => officeLocations.find((o) => o.slug === l)!).filter(Boolean);
export const localServicePaths = new Set(services.map((s) => `/services/${s.path}/`));
export const groups = [...new Set(services.map((s) => s.group))];
// Every (service, location?) page this catalog creates.
export const servicePaths = () =>
  services.flatMap((s) => [{ path: s.path, s, loc: undefined as ServiceLocation | undefined }, ...locationsOf(s).map((loc) => ({ path: `${s.path}/${loc.slug}`, s, loc }))]);
