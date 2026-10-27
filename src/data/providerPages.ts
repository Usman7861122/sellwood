import { images } from './images';

// Full provider pages. Text comes from the live site. Add one entry per provider.
export interface ProviderPage {
  slug: string;
  name: string;
  creds: string;
  role: string;
  title: string;
  description: string;
  photo: string;
  bio: string[];
  facts: { label: string; value: string }[];
  // slugs from officeLocations in site.ts, with the booking link for each
  locations: { slug: string; bookingUrl: string }[];
  // titles from the services list in site.ts
  services: string[];
  extraServices: string[];
  kind: 'ped' | 'adult' | 'gyn';
  callName: string; // e.g. "Dr. Schwab"
  tagline: string;
}

const A = 'https://consumer.scheduling.athena.io/?locationId=3083-';
const book = (loc: string, pr: string) => `${A}${loc}&practitionerId=3083-${pr}`;
const U = 'https://sellwoodmd.com/wp-content/uploads/';
const TAG = {
  ped: 'Compassionate pediatric care for infants, children, and adolescents, with a family-centered approach.',
  adult: 'Thoughtful primary care for adults, built on trust, prevention and long-term relationships.',
  gyn: 'Caring women’s health and gynecology services, from well-woman exams to menopause care.',
};
const SV = {
  pedMD: ['Pediatrics', 'Newborn Care', 'Newborn Meet & Greet', 'Same-Day Visits'],
  ped: ['Pediatrics', 'Newborn Care', 'Same-Day Visits'],
  adult: ['Internal Medicine', 'Gynecology', 'Same-Day Visits'],
  adultIM: ['Internal Medicine', 'Same-Day Visits'],
  gyn: ['Gynecology'],
};
const EX = {
  ped: ['Well Child Exams & Immunizations', 'Ear Problems in Children', 'Flu / Sick Visits', 'Strep Throat', 'Common Cold Visits', 'Flu Shots'],
  adult: ['Annual Preventative Physical', 'Primary Care', 'Well Women / Men Care Exam', 'Flu Shots', 'Telemedicine'],
  gyn: ['Well Women Care Exam', 'Pre-conception counseling', 'Hormone replacement therapy', 'Perimenopause and menopause care', 'Abnormal uterine bleeding', 'Minimally invasive procedures'],
};
const F = (a: [string, string][]) => a.map(([label, value]) => ({ label, value }));

const more: ProviderPage[] = [
  {
    slug: 'monique-pritchard-md-faap-2', name: 'Monique Pritchard', creds: 'MD, FAAP', role: 'Chief Medical Officer', kind: 'ped', callName: 'Dr. Pritchard', tagline: TAG.ped,
    title: 'Monique Pritchard, MD, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Monique Pritchard, MD, FAAP, Chief Medical Officer and pediatrician at Sellwood Medical Clinic in Portland, OR.',
    photo: U + '2025/07/M-3onique-Pritchard.png',
    bio: [
      'Dr. Pritchard combines expert medical knowledge with compassionate care. She grew up in Seattle, graduated with honors from the University of Washington, and studied art history in Siena, Italy. She earned her medical degree at the University of Vermont and completed her pediatric residency at Oregon Health and Science University (OHSU), where she later became an attending physician teaching residents and medical students.',
      'She has been part of Sellwood Medical Clinic since 2007 and has been named a top-rated doctor by Portland Monthly and Castle Connolly. Away from work, she enjoys time with her three sons, biking, swimming, running marathons and backcountry skiing.',
    ],
    facts: F([['With the clinic since', '2007'], ['Role', 'Chief Medical Officer'], ['Honor', 'Top doctor, Portland Monthly']]),
    locations: [{ slug: 'sellwood', bookingUrl: 'https://sellwoodmd.com/pediatric-appointments/' }],
    services: SV.pedMD, extraServices: EX.ped,
  },
  {
    slug: 'katie-oldread-md-faapp', name: 'Katie Oldread', creds: 'MD, FAAP', role: 'Pediatrician', kind: 'ped', callName: 'Dr. Oldread', tagline: TAG.ped,
    title: 'Katie Oldread, MD, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Katie Oldread, MD, FAAP, a pediatrician at Sellwood Medical Clinic in Portland, OR, caring for infants, children and adolescents.',
    photo: U + '2025/12/Dr.-Katie-Oldread-e1764588468284.png',
    bio: [
      'Dr. Oldread is a trusted pediatrician with expertise in a wide range of pediatric care. She focuses on building long-term relationships with patients and their families, and she is an advocate for the LGBTQ+ community with a special interest in healthcare disparities in the US and around the world.',
      'She grew up near Boston, studied biology and psychology at Smith College, and earned her medical degree at Harvard Medical School. After college she served in the Peace Corps as a community health worker in Haiti and the Dominican Republic. She completed her pediatric residency at OHSU and joined Sellwood Medical Clinic in 2012. Outside of work she enjoys nature and hosts living room dance parties with her three children.',
    ],
    facts: F([['With the clinic since', '2012'], ['Medical school', 'Harvard Medical School'], ['Before medicine', 'Peace Corps']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('22', '3') }, { slug: 'north-portland', bookingUrl: book('43', '15') }],
    services: SV.pedMD, extraServices: EX.ped,
  },
  {
    slug: 'naghmeh-moshtael-md-faap', name: 'Naghmeh Moshtael', creds: 'MD, FAAP', role: 'Pediatrician', kind: 'ped', callName: 'Dr. Moshtael', tagline: TAG.ped,
    title: 'Naghmeh Moshtael, MD, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Naghmeh Moshtael, MD, FAAP, a pediatrician at Sellwood Medical Clinic in Portland, OR, with expertise in pediatric eating disorders.',
    photo: U + '2025/07/Naghmeh-Moshtael.jpg',
    bio: [
      'Dr. Moshtael joined the pediatric team full time in 2024. She has practiced for more than 20 years in both hospital and clinic settings and has been closely involved in the care of medically complex patients. She is a passionate child health advocate.',
      'She is known across Oregon for her expertise in pediatric eating disorders, including diagnostic evaluations, medical stabilization and step-down care, and she is respected for teaching students, residents and fellow providers. She has received three teaching awards and is a fellow of the American Academy of Pediatrics. At home she enjoys travel, gardening, knitting and walking her two dogs.',
    ],
    facts: F([['With the clinic since', '2024'], ['Focus', 'Pediatric eating disorders'], ['Honor', 'Three teaching awards']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('22', '14') }, { slug: 'beaverton', bookingUrl: book('49', '14') }],
    services: SV.pedMD, extraServices: EX.ped,
  },
  {
    slug: 'brittany-petering-md-faap', name: 'Brittany Petering', creds: 'MD, FAAP', role: 'Pediatrician', kind: 'ped', callName: 'Dr. Petering', tagline: TAG.ped,
    title: 'Brittany Petering, MD, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Brittany Petering, MD, FAAP, a pediatrician at Sellwood Medical Clinic in Portland, OR, focused on preventive care.',
    photo: U + '2025/08/Brittany-Petering.png',
    bio: [
      'Dr. Petering is drawn to pediatrics by her interest in preventive healthcare. She encourages healthy habits early in life, including good nutrition, active play, sleep, positive social time and stress reduction.',
      'She studied human biology at Stanford University, earned a master’s degree in geography at the University of Oregon, and completed her medical degree and residency at OHSU. She is also a certified breastfeeding specialist. Outside the clinic she enjoys running, hiking, skiing and time outdoors with her family, dogs and friends.',
    ],
    facts: F([['Focus', 'Preventive care'], ['Training', 'Stanford, OHSU'], ['Certified', 'Breastfeeding specialist']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('21', '19') }],
    services: SV.pedMD, extraServices: EX.ped,
  },
  {
    slug: 'kaitlyn-simmons-md-mhp-faap', name: 'Kaitlyn Simmons', creds: 'MD, MPH, FAAP', role: 'Pediatrician', kind: 'ped', callName: 'Dr. Simmons', tagline: TAG.ped,
    title: 'Kaitlyn Simmons, MD, MPH, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Kaitlyn Simmons, MD, MPH, FAAP, a general pediatrician at Sellwood Medical Clinic in Portland, OR.',
    photo: U + '2025/08/Kaitlyn-Simmons.png',
    bio: [
      'Dr. Simmons is a general pediatrician who values long-term relationships with patients and families. Her public health training shapes a holistic, preventive approach to care.',
      'She is from Arizona, studied at the University of Notre Dame, and earned her medical degree and master’s in public health at the University of Arizona College of Medicine in Phoenix. Her pediatric residency at OHSU brought her to the Portland area. She enjoys mystery novels, board games, nature walks with her dog Rori, and exploring Oregon’s food scene and beaches.',
    ],
    facts: F([['Degrees', 'MD, MPH'], ['Residency', 'OHSU'], ['Approach', 'Preventive and holistic']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('22', '52') }, { slug: 'north-portland', bookingUrl: book('43', '52') }],
    services: SV.pedMD, extraServices: EX.ped,
  },
  {
    slug: 'heather-davidson-pa', name: 'Heather Davidson', creds: 'PA', role: 'Physician Assistant', kind: 'adult', callName: 'Heather Davidson', tagline: TAG.adult,
    title: 'Heather Davidson, PA | Physician Assistant in Portland, OR',
    description: 'Meet Heather Davidson, PA, a physician assistant at Sellwood Medical Clinic in Portland and Beaverton, OR, focused on family medicine and women’s health.',
    photo: U + '2025/08/2797500.png',
    bio: [
      'Heather is a certified physician assistant who focuses on compassionate, whole-person care for patients of all ages, with an emphasis on wellness, preventive care and women’s health. She previously practiced primary care at Providence Medical Group.',
      'She began as a veterinary technician, moved into hospital laboratory work, and found her way to family medicine. She earned her master’s degree in Physician Assistant Studies at OHSU in 2007. She listens closely so patients can take an active role in their care, and in her words, she loves to figure out the problem and then make it better. She is originally from Helena, Montana, and enjoys her children, biking, hiking, knitting and travel.',
    ],
    facts: F([['Education', 'OHSU, 2007'], ['Focus', 'Family medicine'], ['Also', 'Women’s health']]),
    locations: [{ slug: 'sellwood-adult-medicine', bookingUrl: book('21', '61') }, { slug: 'beaverton', bookingUrl: book('49', '61') }],
    services: SV.adult, extraServices: EX.adult,
  },
  {
    slug: 'kim-vigil-md-faap', name: 'Kim Vigil', creds: 'MD, FAAP', role: 'Pediatrician', kind: 'ped', callName: 'Dr. Vigil', tagline: TAG.ped,
    title: 'Kim Vigil, MD, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Kim Vigil, MD, FAAP, a pediatrician at Sellwood Medical Clinic in Portland, OR, with more than 25 years of experience.',
    photo: U + '2025/08/2797510.png',
    bio: [
      'Dr. Vigil has more than 25 years of outpatient pediatric experience. She is originally from Fort Worth, Texas, and has lived in Portland since 1999. She began her career in psychiatry before moving into pediatrics, which gives her a strong background in children’s mental health concerns.',
      'She focuses on long-term relationships with patients and their families and on healthy habits such as exercise, nutrition, mindfulness, sleep and limited screen time. She studied biomedical science at Texas A&M University and trained at the University of Texas Health Science Center in San Antonio. She enjoys hiking with her three dogs, biking, and time with family and grandchildren.',
    ],
    facts: F([['In Portland since', '1999'], ['Experience', '25+ years in pediatrics'], ['Also trained in', 'Psychiatry']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('22', '56') }],
    services: SV.pedMD, extraServices: EX.ped,
  },
  {
    slug: 'vaniza-naveed-md-faap', name: 'Vaniza Naveed', creds: 'MD, FAAP', role: 'Pediatrician', kind: 'ped', callName: 'Dr. Naveed', tagline: TAG.ped,
    title: 'Vaniza Naveed, MD, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Vaniza Naveed, MD, FAAP, a board-certified pediatrician at Sellwood Medical Clinic in Portland, OR.',
    photo: U + '2025/12/Vaniza-Naveed-scaled-e1767007691470.jpg',
    bio: [
      'Dr. Naveed is a board-certified pediatrician who provides patient-centered, evidence-based care. She has worked in hospital, clinic and urgent care settings, which helps her care for children at every level of need.',
      'She completed her pediatric residency at Tulane University in New Orleans. Outside of work she enjoys local yoga studios and trying Portland’s restaurants.',
    ],
    facts: F([['Board certified', 'Pediatrics'], ['Residency', 'Tulane University'], ['Experience', 'Clinic, hospital, urgent care']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('22', '60') }],
    services: SV.pedMD, extraServices: EX.ped,
  },
  {
    slug: 'susan-vockert-burke', name: 'Susan Vockert-Burke', creds: 'FNP-BC', role: 'Certified Family Nurse Practitioner', kind: 'adult', callName: 'Susan Vockert-Burke', tagline: TAG.adult,
    title: 'Susan Vockert-Burke, FNP-BC | Family Nurse Practitioner in Portland, OR',
    description: 'Meet Susan Vockert-Burke, FNP-BC, a family nurse practitioner at Sellwood Medical Clinic in Portland and Beaverton, OR.',
    photo: U + '2025/10/Vockert-Burke-Susan-headshot-1.webp',
    bio: [
      'Susan is a board-certified family nurse practitioner who has cared for patients of all ages, from children to older adults, for more than ten years. She works with patients as partners and builds personalized care plans to help them reach their health goals.',
      'She graduated from Oregon Health & Science University in 2009 and joined the Sellwood Medical Clinic provider team to serve pediatric, adolescent, adult and older adult patients.',
    ],
    facts: F([['Certified', 'FNP-BC'], ['Education', 'OHSU, 2009'], ['Patients', 'All ages']]),
    locations: [{ slug: 'sellwood-adult-medicine', bookingUrl: book('21', '62') }, { slug: 'beaverton', bookingUrl: book('49', '62') }],
    services: SV.adult, extraServices: EX.adult,
  },
  {
    slug: 'tara-bernhardt-np', name: 'Tara Bernhardt', creds: 'NP', role: 'Pediatric Nurse Practitioner', kind: 'ped', callName: 'Tara Bernhardt', tagline: TAG.ped,
    title: 'Tara Bernhardt, NP | Pediatric Nurse Practitioner in Portland, OR',
    description: 'Meet Tara Bernhardt, NP, a pediatric nurse practitioner at Sellwood Medical Clinic’s North Portland office.',
    photo: U + '2025/08/Tara-Bernhardt-1.png',
    bio: [
      'Tara grew up on the Central Coast of California and began her nursing career in 1999 as a pediatric nurse in San Francisco. She later worked in pediatric bone marrow transplant at OHSU and earned her pediatric nurse practitioner degree there in 2005.',
      'She enjoys working with children of all ages and helping families stay healthy. She works to make clinic visits positive and to ease children’s fears, and being a parent herself helps her understand family life. She loves hiking, camping, running, skiing and soccer, and has two school-age children and a dog.',
    ],
    facts: F([['Nursing since', '1999'], ['Degree', 'OHSU, 2005'], ['Office', 'North Portland']]),
    locations: [{ slug: 'north-portland', bookingUrl: book('43', '26') }],
    services: SV.ped, extraServices: EX.ped,
  },
  {
    slug: 'courtney-cotner-np', name: 'Courtney Cotner', creds: 'NP', role: 'Nurse Practitioner', kind: 'ped', callName: 'Courtney Cotner', tagline: TAG.ped,
    title: 'Courtney Cotner, NP | Pediatric Nurse Practitioner in Portland, OR',
    description: 'Meet Courtney Cotner, NP, a pediatric nurse practitioner at Sellwood Medical Clinic in Portland and Beaverton, OR.',
    photo: U + '2025/08/Courtney-Cotner.png',
    bio: [
      'Courtney is a certified pediatric nurse practitioner who has provided care since 2017. Her experience covers pediatrics, mother-baby care and the NICU. She takes a patient-centered approach, listens closely to every concern, and builds trusting relationships with children and families.',
      'She grew up in Oregon’s wine country and studied biology at Portland State University and nursing at OHSU. In 2024 she earned her Doctor of Nursing Practice from Arizona State University with a focus on primary care. She enjoys rock climbing, pickleball and time outdoors with her husband, their goldendoodle and friends.',
    ],
    facts: F([['Providing care since', '2017'], ['Doctorate', 'DNP, 2024'], ['Experience', 'NICU, mother-baby']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('22', '51') }, { slug: 'beaverton', bookingUrl: book('49', '51') }],
    services: SV.ped, extraServices: EX.ped,
  },
  {
    slug: 'deanna-read-cpnp-pc', name: 'Deanna Read', creds: 'CPNP-PC', role: 'Pediatric Nurse Practitioner', kind: 'ped', callName: 'Deanna Read', tagline: TAG.ped,
    title: 'Deanna Read, CPNP-PC | Pediatric Nurse Practitioner in Portland, OR',
    description: 'Meet Deanna Read, CPNP-PC, a pediatric nurse practitioner at Sellwood Medical Clinic in Portland and Beaverton, OR.',
    photo: U + '2025/08/Deanna-Read-1.png',
    bio: [
      'Deanna was born and raised in Portland and spent time living and working in California before coming home. She chose primary care because it lets her build long-term relationships with patients and their families. Earlier in her career she worked as a registered nurse caring for medically fragile children in their homes, which taught her to see the whole picture for each patient.',
      'She studied physiology at the University of Washington and earned her pediatric nurse practitioner degree at OHSU. She provides well-child visits and same-day sick care for children of all ages. At home she enjoys time with her husband, daughter and three chihuahuas, planning trips, finding new ice cream shops and photographing whales.',
    ],
    facts: F([['Certified', 'CPNP-PC'], ['Education', 'UW, OHSU'], ['Hometown', 'Portland']]),
    locations: [{ slug: 'sellwood', bookingUrl: book('22', '42') }, { slug: 'beaverton', bookingUrl: book('49', '42') }],
    services: SV.ped, extraServices: EX.ped,
  },
  {
    slug: 'rachel-rittenhouse-dnp-arnp', name: 'Rachel Rittenhouse', creds: 'DNP, ARNP', role: 'Pediatric Nurse Practitioner', kind: 'ped', callName: 'Rachel Rittenhouse', tagline: TAG.ped,
    title: 'Rachel Rittenhouse, DNP, ARNP | Pediatric Nurse Practitioner in Portland, OR',
    description: 'Meet Rachel Rittenhouse, DNP, ARNP, a pediatric nurse practitioner at Sellwood Medical Clinic’s North Portland office.',
    photo: U + '2025/08/Rachel-Rittenhouse-1.png',
    bio: [
      'Rachel is a pediatric nurse practitioner focused on preventive care for children and support for families. She has a special interest in breastfeeding support and early childhood development.',
      'She has more than 12 years in medicine as a nurse and nurse practitioner, including time at Holy Family Hospital in Spokane, the burn and pediatric trauma unit at Harborview Medical Center in Seattle, and the pediatric clinic at PeaceHealth St. John Medical Center. She earned her nursing degree at Gonzaga University and her Doctor of Nursing Practice at the University of Washington. She enjoys exploring Portland, the Oregon coast and her family farm in Banks.',
    ],
    facts: F([['Experience', '12+ years'], ['Doctorate', 'University of Washington'], ['Special interest', 'Breastfeeding support']]),
    locations: [{ slug: 'north-portland', bookingUrl: book('43', '47') }],
    services: SV.ped, extraServices: EX.ped,
  },
  {
    slug: 'younghee-kim-dnp', name: 'Younghee Kim', creds: 'DNP', role: 'Certified Pediatric Nurse Practitioner', kind: 'ped', callName: 'Younghee Kim', tagline: TAG.ped,
    title: 'Younghee Kim, DNP | Pediatric Nurse Practitioner in Portland, OR',
    description: 'Meet Younghee Kim, DNP, a board-certified pediatric nurse practitioner at Sellwood Medical Clinic in Portland, OR.',
    photo: U + '2026/01/headshot-e1767990852268.jpeg',
    bio: [
      'Younghee is a board-certified pediatric nurse practitioner with more than ten years of hospital nursing experience. She is committed to children’s health, high ethical standards and evidence-based care.',
      'She studied at Oregon State University, earned her nursing degree at Duke University and her Doctor of Nursing Practice at OHSU. Her experience includes adult neurosurgery, pediatric intermediate care and pediatric emergency care, beginning at Johns Hopkins Hospital, and she also works in the pediatric emergency department at OHSU. She enjoys time with her family and her puppy Holly, fostering puppies, traveling and finding good restaurants in Portland.',
    ],
    facts: F([['Certified', 'Pediatric NP'], ['Doctorate', 'DNP, OHSU'], ['Experience', '10+ years nursing']]),
    locations: [{ slug: 'sellwood', bookingUrl: 'https://sellwoodmd.com/pediatric-appointments/' }],
    services: SV.ped, extraServices: EX.ped,
  },
  {
    slug: 'kelly-wright-md', name: 'Kelly Wright', creds: 'MD', role: 'Internist', kind: 'adult', callName: 'Dr. Wright', tagline: TAG.adult,
    title: 'Kelly Wright, MD | Internal Medicine in Portland, OR',
    description: 'Meet Kelly Wright, MD, an internal medicine physician at Sellwood Medical Clinic in Portland, OR, caring for adults 18 and older.',
    photo: U + '2025/08/Kelly-Wright-MD.png',
    bio: [
      'Dr. Wright is an internist who cares for adults aged 18 to 100 and beyond. She focuses on preventive care and helps patients manage chronic conditions. She has been part of the Sellwood Medical Clinic team since 2005.',
      'She grew up in Delaware, studied physics and biology at Fordham University, earned her medical degree at Sidney Kimmel Medical College at Thomas Jefferson University, and completed her internal medicine residency at Thomas Jefferson University Hospital in 2012. After two years as a hospitalist in Portland, Maine, she moved to Oregon to begin her primary care career. She values the art of medicine and building trusting, long-term relationships, being there for patients through life’s ups and downs.',
    ],
    facts: F([['With the clinic since', '2005'], ['Patients', 'Adults 18 to 100+'], ['Specialty', 'Internal medicine']]),
    locations: [{ slug: 'sellwood-adult-medicine', bookingUrl: book('21', '22') }],
    services: SV.adultIM, extraServices: EX.adult,
  },
  {
    slug: 'jenna-murray-md', name: 'Jenna Murray', creds: 'MD', role: 'Gynecologist', kind: 'gyn', callName: 'Dr. Murray', tagline: TAG.gyn,
    title: 'Jenna Murray, MD | Gynecologist in Portland, OR',
    description: 'Meet Jenna Murray, MD, a board-certified gynecologist at Sellwood Medical Clinic in Portland, OR.',
    photo: U + '2025/07/Jenna-Murray-1.png',
    bio: [
      'Dr. Murray is a board-certified gynecologist who joined Sellwood Medical Clinic in June 2023. She is originally from New Jersey and has practiced in Portland since completing her training in obstetrics and gynecology at OHSU in 1999.',
      'She offers well-woman care, pre-conception counseling, hormone replacement therapy, perimenopause and menopause management, treatment of abnormal uterine bleeding and minimally invasive gynecologic procedures. She is certified by the American Board of Obstetrics and Gynecology and is a member of the American College of Obstetricians and Gynecologists. She enjoys camping, canoeing, trail running and backpacking.',
    ],
    facts: F([['Joined', 'June 2023'], ['Board certified', 'Obstetrics and gynecology'], ['Training', 'OHSU']]),
    locations: [{ slug: 'sellwood-gynecology', bookingUrl: 'https://3083.portal.athenahealth.com/' }],
    services: SV.gyn, extraServices: EX.gyn,
  },
  {
    slug: 'merinda-sterner-pa-c', name: 'Merinda Sterner', creds: 'PA-C', role: 'Physician Assistant', kind: 'adult', callName: 'Merinda Sterner', tagline: TAG.adult,
    title: 'Merinda Sterner, PA-C | Physician Assistant in Portland, OR',
    description: 'Meet Merinda Sterner, PA-C, a physician assistant in family practice and gynecology at Sellwood Medical Clinic in Portland, OR.',
    photo: U + '2025/08/Merinda-Sterner.png',
    bio: [
      'Merinda is a physician assistant in family practice and gynecology on the Adult Care Team. Her healthcare career began as an Army medic and grew into a focus on preventive medicine. She has provided primary care since 2015 and returned to Sellwood Medical Clinic after working with the clinic for several years before.',
      'She combines holistic and evidence-based medicine, builds trusting, collaborative relationships, and encourages patients to ask questions and talk openly about any topic. She is a strong believer in sleep, laughter and lifestyle as part of good health. She completed her PA education at the University of Utah and enjoys running, hiking with her dog, crafting and Portland’s food scene.',
    ],
    facts: F([['Primary care since', '2015'], ['Background', 'Former Army medic'], ['Education', 'University of Utah']]),
    locations: [{ slug: 'sellwood-adult-medicine', bookingUrl: book('21', '27') }, { slug: 'beaverton', bookingUrl: book('49', '27') }],
    services: SV.adult, extraServices: EX.adult,
  },
  {
    slug: 'melissa-federspiel-fnp-clc', name: 'Melissa Federspiel', creds: 'FNP, CLC', role: 'Family Medicine', kind: 'adult', callName: 'Melissa Federspiel', tagline: TAG.adult,
    title: 'Melissa Federspiel, FNP, CLC | Family Nurse Practitioner in Portland, OR',
    description: 'Meet Melissa Federspiel, FNP, CLC, a family nurse practitioner and lactation consultant at Sellwood Medical Clinic in Portland, OR.',
    photo: U + '2025/08/Melissa-Federspiel.png',
    bio: [
      'Melissa is a family nurse practitioner and certified lactation consultant with about 20 years of primary care experience in family practice and internal medicine in the Portland area. She builds trusting relationships with patients, and focuses on preventive care, routine screenings and partnering with patients to manage chronic conditions.',
      'She studied exercise science at Willamette University and earned her family nurse practitioner degree at Boston College in 2004. Before nursing school she worked in homeless services for several years. She grew up in a military family, has lived in Portland most of her adult life, and enjoys running, hiking and backpacking with her husband and two kids.',
    ],
    facts: F([['Primary care', 'About 20 years'], ['Certified', 'Lactation consultant'], ['Degree', 'Boston College, 2004']]),
    locations: [{ slug: 'sellwood-adult-medicine', bookingUrl: book('21', '53') }],
    services: SV.adult, extraServices: EX.adult,
  },
];

export const providerPages: ProviderPage[] = [
  {
    slug: 'tara-schwab-md-faap',
    name: 'Tara Schwab',
    creds: 'MD, FAAP',
    role: 'Pediatrician',
    title: 'Tara Schwab, MD, FAAP | Pediatrician in Portland, OR',
    description: 'Meet Tara Schwab, MD, FAAP at Sellwood Medical Clinic in Portland, OR. Dr. Schwab provides compassionate pediatric care for infants, children, and adolescents with a family-centered approach.',
    photo: images.schwab,
    bio: [
      'Dr. Schwab has been practicing with Sellwood Medical Clinic since 2010, establishing herself as a leading pediatrician in the Portland area and earning her the Castle Connolly Award for being among the top doctors in the region. Dr. Schwab focuses on building quality, long-lasting relationships with her patients and their families, taking into account the emotional needs of all family members.',
      'Away from work, Dr. Schwab enjoys skiing, traveling, and attending school functions with her husband and three children.',
    ],
    facts: [
      { label: 'With the clinic since', value: '2010' },
      { label: 'Honor', value: 'Castle Connolly Top Doctor' },
      { label: 'Specialty', value: 'Pediatrics' },
    ],
    locations: [
      { slug: 'beaverton', bookingUrl: 'https://consumer.scheduling.athena.io/?locationId=3083-49&practitionerId=3083-4' },
    ],
    services: ['Pediatrics', 'Newborn Care', 'Newborn Meet & Greet', 'Same-Day Visits'],
    extraServices: ['Well Child Exams & Immunizations', 'Child Development / Physical Exam', 'Ear Problems in Children', 'Flu / Sick Visits', 'Strep Throat', 'Common Cold Visits', 'Flu Shots'],
    kind: 'ped',
    callName: 'Dr. Schwab',
    tagline: TAG.ped,
  },
  ...more,
];

export const bookLabel = (slug: string, url: string) =>
  url.includes('sellwoodmd.com/pediatric-appointments') ? 'Book an appointment'
  : url.includes('portal.athenahealth') ? 'Book Now'
  : ({ sellwood: 'Sellwood Appointment', 'sellwood-adult-medicine': 'Sellwood Appointment', 'sellwood-gynecology': 'Sellwood Appointment', 'north-portland': 'North Appointment', beaverton: 'Westside Appointment' } as Record<string, string>)[slug] ?? 'Book Now';
