// Old-site photos. Right now they load from the live website.
// When the files are saved into /public/images, change BASE and the paths below.
const BASE = 'https://sellwoodmd.com/wp-content/uploads/';
const u = (p: string) => BASE + p;

export const images = {
  logo: '/images/logo.png',
  skyline: u('2025/08/sellwood-2.jpg'),
  building: u('2025/08/sellwood-1.jpg'),
  about: u('2025/07/black-family.jpg'),
  // About page. Swap these for the licensed Shutterstock photos when they are saved in /public/images/about-page
  schwab: u('2026/01/Tara-e1768927805579.jpeg'),
  meetGreetHero: u('2025/07/new-born-meet-1.jpg'),
  aboutPage: {
    who: u('2025/07/2148597113-1.jpg'),
    dei: u('2025/07/2148463616-1.jpg'),
  },
  whyChoose: u('2025/07/2148463616-1.jpg'),
  services: {
    pediatrics: u('2025/07/2148732572-1.jpg'),
    sameDay: u('2025/07/97972-1.jpg'),
    newborn: u('2025/09/new-born-e1756995918217.jpg'),
    meetGreet: u('2025/07/2148354743-1.jpg'),
    internal: u('2026/08/medical-consultation-web-optimized.webp'),
    gynecology: u('2026/04/image-e1776456502940.png'),
  },
  awards: [
    u('2026/08/2022-e1786958291209.png'),
    u('2026/08/2023-1-e1786958356213.png'),
    u('2026/08/2024-e1786958482471.png'),
    u('2026/08/2025-Winner-decal-1.png'),
    u('2026/08/2026.png'),
    u('2026/08/Nominee_26.png'),
  ],
  tour: [
    '2025/08/sellwood-1.jpg', '2025/08/Office-Tour.jpg', '2025/08/Office-Tour-1.jpg',
    '2025/08/Office-Tour-5-e1754085464610.png', '2025/08/Office-Tour-6.jpg', '2025/08/Office-Tour-7.jpg',
    '2025/08/Office-Tour-8-e1754085492255.png', '2025/08/Office-Tour-10-e1754085515213.png',
    '2025/08/Office-Tour-11-e1754085539677.png', '2025/08/Office-Tour-12.jpg',
    '2025/08/Office-Tour-13-e1754085572209.png', '2025/08/Office-Tour-14-e1754085596257.png',
  ].map(u),
  providers: {
    rittenhouse: u('2025/07/2670608-e1753863678799.png'),
    sterner: u('2025/07/2772569-1-e1753863948243.png'),
    oldread: u('2025/12/Dr.-Katie-Oldread-e1764588468284.png'),
    pritchard: u('2025/07/2574933-1-e1753864262999.png'),
    simmons: u('2025/07/2754212.png'),
  },
  insurance: [
    '1779364', '2733511', '1787038', '2274268', '1789377', '1773702',
    '1771734', '1785282', '2614660', '1771833', '2206449',
  ].map((n) => u(`2025/07/${n}.png`)),
  blog: {
    teen: u('2026/04/pexels-karola-g-8147449-scaled.jpg'),
    newborn: u('2025/07/2761600.jpeg'),
    school: u('2025/07/2747691.jpg'),
  },
};
