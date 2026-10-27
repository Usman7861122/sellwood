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
  {
    slug: 'sellwood-medical-clinic',
    name: 'Adult Medicine & Gynecology, Sellwood',
    short: 'Sellwood Adult Medicine',
    title: 'Family & Primary Care in Sellwood, Portland, OR | Sellwood Medical Clinic',
    description: 'Sellwood Medical Clinic adult medicine and gynecology in Sellwood, Portland, OR. See office hours, providers, services, phone, fax and directions.',
    address: '8333 SE 13th Avenue',
    city: 'Portland, OR 97202',
    phone: '503-595-9300',
    phoneHref: 'tel:+15035959300',
    fax: '503-595-9301',
    hours: [
      { day: 'Monday', open: t(8), close: t(17) },
      { day: 'Tuesday', open: t(8), close: t(17) },
      { day: 'Wednesday', open: t(8), close: t(17) },
      { day: 'Thursday', open: t(8), close: t(17) },
      { day: 'Friday', open: t(8), close: t(17) },
      { day: 'Saturday', open: 0, close: 0 },
      { day: 'Sunday', open: 0, close: 0 },
    ],
    hero: images.building,
    links: [
      { label: 'Find us on Google Maps', href: 'https://goo.gl/maps/TPJyZQiuuUQ2' },
      { label: 'Read reviews on Yelp', href: 'https://www.yelp.com/biz/sellwood-medical-clinic-portland' },
    ],
    services: ['Family Medicine Clinic', 'Internal Medicine', 'Gynecology', 'Same-Day Visits'],
    extraServices: ['Annual Preventative Physical', 'Well Women / Men Care Exam', 'Primary Care', 'Telemedicine', 'Flu Shots', 'New Patients'],
    providers: [
      { name: 'Kelly Wright', creds: 'MD', role: 'Internist', href: `${OLD}/providers/kelly-wright-md/`, bookingUrl: book('3083-21', '3083-22') },
      { name: 'Merinda Sterner', creds: 'PA-C', role: 'Physician Assistant', href: `${OLD}/providers/merinda-sterner-pa-c/`, bookingUrl: book('3083-21', '3083-27') },
      { name: 'Melissa Federspiel', creds: 'FNP, CLC', role: 'Family Medicine', href: `${OLD}/providers/melissa-federspiel-fnp-clc/`, bookingUrl: book('3083-21', '3083-53') },
      { name: 'Heather Davidson', creds: 'PA', role: 'Physician Assistant', href: `${OLD}/providers/heather-davidson-pa/`, bookingUrl: book('3083-21', '3083-61') },
      { name: 'Susan Vockert-Burke', creds: 'FNP-BC', role: 'Certified Family Nurse Practitioner', href: `${OLD}/providers/susan-vockert-burke/`, bookingUrl: book('3083-21', '3083-62') },
    ],
  },
  {
    slug: 'sellwood-medical-clinic-north-pediatrics',
    name: 'Pediatrics, North Portland',
    short: 'North Portland',
    title: 'North Pediatrics | Sellwood Medical Clinic in Portland, OR',
    description: 'Sellwood Medical Clinic North Pediatrics in North Portland, OR. See office hours, providers, services, phone, fax and directions.',
    address: '6234 N Greeley Avenue',
    city: 'Portland, OR 97217',
    phone: '503-595-9300',
    phoneHref: 'tel:+15035959300',
    fax: '503-595-9301',
    hours: [
      { day: 'Monday', open: t(8, 30), close: t(17) },
      { day: 'Tuesday', open: t(8, 30), close: t(17) },
      { day: 'Wednesday', open: t(8), close: t(15) },
      { day: 'Thursday', open: t(7, 30), close: t(17) },
      { day: 'Friday', open: t(8, 30), close: t(17) },
      { day: 'Saturday', open: 0, close: 0 },
      { day: 'Sunday', open: 0, close: 0 },
    ],
    hero: images.building,
    links: [
      { label: 'Find us on Google Maps', href: 'https://goo.gl/maps/F4yyf4ZPTJAtoLj19' },
      { label: 'Read reviews on Yelp', href: 'https://www.yelp.com/biz/sellwood-medical-clinic-portland' },
    ],
    services: ['Pediatrics', 'Same-Day Visits', 'Newborn Care', 'Newborn Meet & Greet'],
    extraServices: ['Well Child Exams & Immunizations', 'Flu / Sick Visits', 'Immunizations / Vaccines', 'Flu Shots', 'Telemedicine', 'New Patients'],
    providers: [
      { name: 'Katie Oldread', creds: 'MD, FAAPP', role: 'Pediatrics', href: `${OLD}/providers/katie-oldread-md-faapp/`, bookingUrl: book('3083-43', '3083-15') },
      { name: 'Kaitlyn Simmons', creds: 'MD, MPH, FAAP', role: 'Pediatrics', href: `${OLD}/providers/kaitlyn-simmons-md-mhp-faap/`, bookingUrl: book('3083-43', '3083-52') },
      { name: 'Tara Bernhardt', creds: 'NP', role: 'Pediatric Nurse Practitioner', href: `${OLD}/providers/tara-bernhardt-np/`, bookingUrl: book('3083-43', '3083-26') },
      { name: 'Rachel Rittenhouse', creds: 'DNP, ARNP', role: 'Nurse Practitioner', href: `${OLD}/providers/rachel-rittenhouse-dnp-arnp/`, bookingUrl: book('3083-43', '3083-47') },
    ],
  },
  {
    slug: 'sellwood-medical-clinic-westside-beaverton',
    name: 'Pediatrics & Adult Medicine, Westside',
    short: 'Westside',
    title: 'Westside / Beaverton Clinic | Sellwood Medical Clinic',
    description: 'Sellwood Medical Clinic Westside in Beaverton, OR. Pediatrics and adult medicine. See providers, services, phone, fax and directions.',
    address: '9925 SW Nimbus Ave Suite 100',
    city: 'Beaverton, OR 97008',
    phone: '503-595-9300',
    phoneHref: 'tel:+15035959300',
    fax: '503-595-9301',
    hours: [
      { day: 'Monday', open: t(8), close: t(17) },
      { day: 'Tuesday', open: t(8), close: t(17) },
      { day: 'Wednesday', open: t(8), close: t(17) },
      { day: 'Thursday', open: t(8), close: t(17) },
      { day: 'Friday', open: t(8), close: t(17) },
      { day: 'Saturday', open: 0, close: 0 },
      { day: 'Sunday', open: 0, close: 0 },
    ],
    hero: images.building,
    links: [
      { label: 'Find us on Google Maps', href: 'https://www.google.com/maps?q=9925%20SW%20Nimbus%20Ave%20Beaverton%2C%20OR%2097008' },
    ],
    services: ['Pediatrics', 'Same-Day Visits', 'Newborn Care', 'Internal Medicine'],
    extraServices: ['Family Medicine Clinic', 'Gynecology', 'Telemedicine', 'Newborn Meet & Greet', 'Well Child Exams & Immunizations', 'Flu Shots'],
    providers: [
      { name: 'Tara Schwab', creds: 'MD, FAAP', role: 'Pediatrics', href: `${OLD}/providers/tara-schwab-md-faap/`, bookingUrl: book('3083-49', '3083-4') },
      { name: 'Naghmeh Moshtael', creds: 'MD, FAAP', role: 'Pediatrician', href: `${OLD}/providers/naghmeh-moshtael-md-faap/`, bookingUrl: book('3083-49', '3083-14') },
      { name: 'Heather Davidson', creds: 'PA', role: 'Physician Assistant', href: `${OLD}/providers/heather-davidson-pa/`, bookingUrl: book('3083-49', '3083-61') },
      { name: 'Susan Vockert-Burke', creds: 'FNP-BC', role: 'Certified Family Nurse Practitioner', href: `${OLD}/providers/susan-vockert-burke/`, bookingUrl: book('3083-49', '3083-62') },
      { name: 'Courtney Cotner', creds: 'NP', role: 'Nurse Practitioner', href: `${OLD}/providers/courtney-cotner-np/`, bookingUrl: book('3083-49', '3083-51') },
      { name: 'Deanna Read', creds: 'CPNP-PC', role: 'Pediatric Nurse Practitioner', href: `${OLD}/providers/deanna-read-cpnp-pc/`, bookingUrl: book('3083-49', '3083-42') },
      { name: 'Merinda Sterner', creds: 'PA-C', role: 'Physician Assistant', href: `${OLD}/providers/merinda-sterner-pa-c/`, bookingUrl: book('3083-49', '3083-27') },
    ],
  },
];
