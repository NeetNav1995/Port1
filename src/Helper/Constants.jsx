import { GMAIL, LINKED, PHONE } from "./Images";
import { NavigationPath } from "./NavigationPaths";

export const NAVIGATION_ITEMS = {
  Home: NavigationPath.HOME,
  "About Me": NavigationPath.ABOUT,
  'Work Experience': NavigationPath.PROJECTS,
  Skills: NavigationPath.SKILLS,
  "Cover Letter":"",
  Resume:"",
  Testimonials: NavigationPath.TESTIMONIALS,
  Contact: NavigationPath.CONTACT,
  Hobbies: NavigationPath.EXTRACURRICULAR_ACTIVITIES,
};

export const LINKS = {
  linkedIn: { link: "www.linkedin.com/in/neetnavkaur", image: LINKED },
  gmail: { link: "riarnavneet111@gmail.com", image: GMAIL },
  phone: { link: "riarnavneet111@gmail.com", image: PHONE },
};

export const TECHNOLOGY_STACK = {
  html: { name: "HTML 5" },
  css: { name: "Cascading Style Sheet" },
  bootstrap: { name: "Bootstrap" },
  react: { name: "React.js" },
  javascript: { name: "Javascript" },
  motion: { name: "Framer Motion" },
};
