import { images } from './images';
import type { DayHours } from '../islands/OpenHours';

const t = (h: number, m = 0) => h * 60 + m;

export interface LocationProvider { name: string; creds: string; role: string; img?: string; href?: string; bookingUrl: string }
export interface LocationPage {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  phoneHref: string;
  fax?: string;
  hours: DayHours[];
  hero: string;
  links: { label: string; href: string }[];
  services: string[];
  extraServices: string[];
  providers: LocationProvider[];
}

const OLD = 'https://sellwoodmd.com';
const book = (loc: string, p: string) => `https://consumer.scheduling.athena.io/?locationId=${loc}&practitionerId=${p}`;

// Content comes from the live site. Add one entry per location page.
export const locationPages: LocationPage[] = [
  {
    slug: 'pediatrics-sellwood',
    name: 'Pediatrics, Sellwood',
    short: 'Sellwood',
    title: 'Pediatrics in Sellwood, Portland, OR | Sellwood Medical Clinic',
    description: 'Sellwood Medical Clinic Pediatrics in Sellwood, Portland, OR. See office hours, providers, services, phone, fax and directions.',
    address: '8332 SE 13th Avenue',
    city: 'Portland, OR 97202',
    phone: '503-595-9300',
    phoneHref: 'tel:+15035959300',
    fax: '503-595-9301',
    hours: [
      { day: 'Monday', open: t(8, 30), close: t(17, 30) },
      { day: 'Tuesday', open: t(7, 30), close: t(19) },
      { day: 'Wednesday', open: t(7, 30), close: t(19) },
      { day: 'Thursday', open: t(8), close: t(17, 30) },
      { day: 'Friday', open: t(8), close: t(17) },
      { day: 'Saturday', open: t(9), close: t(15) },
      { day: 'Sunday', open: 0, close: 0 },
    ],
    hero: images.building,
    links: [
      { label: 'Find us on Google Maps', href: 'https://goo.gl/maps/bnzqk9svrCC2' },
      { label: 'Read reviews on Yelp', href: 'https://www.yelp.com/biz/sellwood-medical-clinic-portland' },
    ],
    services: ['Pediatrics', 'Same-Day Visits', 'Newborn Care', 'Newborn Meet & Greet'],
    extraServices: ['Well Child Exams & Immunizations', 'Child Development / Physical Exam', 'Ear Problems in Children', 'Flu / Sick Visits', 'Strep Throat', 'Common Cold Visits', 'Immunizations / Vaccines', 'Flu Shots', 'Telemedicine', 'New Patients'],
    providers: [
      { name: 'Katie Oldread', creds: 'MD, FAAPP', role: 'Pediatrics', img: 'oldread', href: `${OLD}/providers/katie-oldread-md-faapp/`, bookingUrl: `${OLD}/pediatric-appointments/` },
      { name: 'Naghmeh Moshtael', creds: 'MD, FAAP', role: 'Pediatrician', bookingUrl: book('3083-22', '3083-14') },
      { name: 'Brittany Petering', creds: 'MD, FAAP', role: 'Pediatrics', bookingUrl: book('3083-21', '3083-19') },
      { name: 'Kaitlyn Simmons', creds: 'MD, MPH, FAAP', role: 'Pediatrics', img: 'simmons', bookingUrl: book('3083-22', '3083-52') },
      { name: 'Heather Davidson', creds: 'PA', role: 'Physician Assistant', bookingUrl: book('3083-21', '3083-61') },
      { name: 'Kim Vigil', creds: 'MD, FAAP', role: 'Pediatrician', bookingUrl: book('3083-22', '3083-56') },
      { name: 'Vaniza Naveed', creds: 'MD, FAAP', role: 'Pediatrician', bookingUrl: book('3083-22', '3083-60') },
      { name: 'Susan Vockert-Burke', creds: 'FNP-BC', role: 'Certified Family Nurse Practitioner', bookingUrl: book('3083-21', '3083-62') },
      { name: 'Courtney Cotner', creds: 'NP', role: 'Nurse Practitioner', bookingUrl: book('3083-22', '3083-51') },
      { name: 'Deanna Read', creds: 'CPNP-PC', role: 'Pediatric Nurse Practitioner', bookingUrl: book('3083-22', '3083-42') },
    ],
  },
];
