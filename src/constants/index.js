import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  dojo,
  webdev,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  django,
  python,
  java,
  spring, 
  expressjs,
  nextjs,
  mysql,
  ecommerce,
  artblog,
  mellow
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "Python/Django Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express JS",
  //   icon: expressjs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer Course",
    company_name: "Coding Dojo",
    icon: dojo,
    iconBg: "#383E56",
    date: "August 2022 - March 2023",
    points: [
      "Learned Front-End and Back-End technologies.",
      'Completed 3 "stacks" of languages including: Python, Java, & MERN',
      "Built various Full-Stack projects throughout the course as well as learning how to use either MySQL or MongoDB for data storage and collection.",
    ],
  },
  {
    title: "Freelance Front-End Developer",
    company_name: "Front-End Developer",
    icon: webdev,
    iconBg: "#383E56",
    date: "September 2021 - Present",
    points: [
      "Worked with various clients from startups to larger enterprise companies.",
      "Some of the projects I`ve worked on include: a marketing website for an early stage company, an e-commerce platform, and an enterprise dashboard for team admins.",
      "Used various libraries in different projects such as Tailwind CSS/UI, SASS, React JS, Next JS, etc.",
      "Worked closely with design and other product stakeholders to achieve the desired outcome.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jordan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jordan does.",
    name: "Chris Davis",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jordan optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce App",
    description:
      "Simple e-commerce app built with MERN stack, has login/registration, admin access only pages to create new products, remove products, etc., and is fully responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Art Blog",
    description:
      "An art blog that allows users to read and share posts on any and all art related topics, as well as create forums to discuss art and meet other art enthusiasts.",
    tags: [
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: artblog,
    source_code_link: "https://github.com/",
  },
  {
    name: "Real Estate",
    description:
      'A replica of Zillow called "Mellow" that allows users to search homes available to buy or rent, or list their own homes as well, and search for real estate agents in the area.',
    tags: [
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
    ],
    image: mellow,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
