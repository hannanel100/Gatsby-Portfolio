import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hannanel Gershinsky | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Hannanel',
  subtitle: "and I'm a Front-End Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am A Material Engineer working in the Aerospace industry and looking to spread my wings and pursue my dream. ',
  paragraphTwo:
    'For the past two years i have been steadily working on learning and expanding my web development skills, emphasizing Front-End and React.js.',
  paragraphThree:
    'I truly am passionate about learning new stuff, love solving problems and creating complex apps. Seeking an entry level Front-End position.',
  resume: 'https://resume.io/r/7WyWBmlxX', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'feeding-times.jpg',
    title: 'Feeding-Times',
    info: "This App is for new mothers to record the new baby's feeding times.",
    info2: 'Using Reactjs, material-ui and firebase for authentication and database',
    url: 'http://hannanel100.github.io/feeding-times',
    repo: 'https://github.com/hannanel100/feeding-times', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to continue the conversation',
  btn: '',
  email: 'hannanel.gersh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hannanel100',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hannanel-gershinsky/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hannanel100',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
