import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mani",
  initials: "CA",
  url: "https://chirag.is-a.dev/",
  location: "Jalandhar,India",
  locationLink: "https://maps.app.goo.gl/Zbzok1mCik445h1C6",
  description:
    "Passionate, Caffienated and Sleep-deprived Software Engineer from India",
  summary:
    "I am Mani, a fourth-year Bachelor of Technology student from India, currently studying Computer Science Engineering. As a Fullstack Developer, I enjoy both frontend and backend development equally. Additionally, I have a passion for open-source projects and contribution particularly in the fields of Web Development and AI.",
  avatarUrl: "./me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Javascript",
    "GSAP",
    "Docker",
    "Kubernetes",
    "Tailwind",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chandramanigupta2003@gmail.com",
    tel: "+91 9919669660",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devxMani",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mani-7b5058253/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devxMani",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:chandramanigupta2003@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Skillarena",
      href: "https://skillarena.in/",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/skillarena.png",
      start: "July 2024",
      end: "September 2024",
      description:
        "Developed and maintained core backend systems for mobile and web applications using Node.js and Express.js, improving overall application performance by 30% | Designed and implemented a real-time chat application backend utilizing WebSockets and FastAPI (Python), resulting in a 50% increase in user engagement",
    },
    {
      company: "Clearmind AI",
      badges: [],
      href: "https://www.clearmind.plus/",
      location: "Remote",
      title: "Next.js Developer",
      logoUrl: "/clearmind.png",
      start: "October 2023",
      end: "December 2023",
      description:
        "Analyzed and implemented 75% user feedback suggestions, leading to a 15% increase in user satisfaction ratings and a 20% increase in page visits. | Integrated Stripe payment gateway, increasing online transactions by 30% and reducing checkout abandonment by 25%.",
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree:
        "Bachelor's of Technology in Computer Science Engineering",
      logoUrl: "/lpu.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Kendriya Vidyalaya",
      href: "https://no1shahjahanpur.kvs.ac.in/",
      degree: "Senior Secondary (CBSE)",
      logoUrl: "/kv.jpg",
      start: "2009",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Blogger Blog",
      href: "https://github.com/ChiragAgg5k/suraksha-ai",
      dates: "Feb 2024 - May 2024",
      active: true,
      description:
        "A Blogging website built using Next.js and Firebase.",
      technologies: ["React", "Javascript", "Tailwind", "Next", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/devxMani/BLOG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Blog.png",
    },
    {
      title: "GSAP projects",
      href: "https://github.com/devxMani/GSAP-Live",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "There are 5 projects that i have created for mastering my GSAP tailwind animation skills and Framer motion.",
      technologies: ["Javascript", "GSAP", "Tailwind", "Framer Motion"],
      links: [
        {
          type: "Source",
          href: "https://github.com/devxMani/GSAP-Live",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/asclepius.png",
    },
    {
      title: "BU News",
      href: "https://github.com/ChiragAgg5k/bu-news-android",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A news sharing platform targetting university students in particular, aiming to reduce spread of misinformation.",
      technologies: ["Java", "XML", "Firebase", "Android Studio"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ChiragAgg5k/bu-news-android",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bu-news.png",
    },
    {
      title: "Askit",
      href: "https://www.askit.study/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "A community-driven Q&A platform that leverages AI to expand, enhance, and get more in-depth answers to various questions from a diverse range of categories.",
      technologies: ["Next.js", "Typescript", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://www.askit.study/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ChiragAgg5k/askit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/askit.png",
    },
  ],
  positions: [
    {
      title: "Content Writer",
      dates: "July 2024 - Present",
      location: "GeeksForGeeks",
      description:
        "I like to write technical articles for GeeksForGeeks in my past time. Let's me be updated with various kinds of technologies.",
      image: "/gfg.png",
      links: [
        {
          title: "Contributions",
          href: "https://www.geeksforgeeks.org/user/chiragaggarwal5k/contributions/",
        },
      ],
    },
    {
      title: "Summer Immersion Participant",
      dates: "July 2024",
      location: "FPT University, Da Nang, Vietnam",
      description:
        "Participated in a 10-day fully funded Summer Immersion Programme in Vietnam hosted by FPT University, providing rich insights into Vietnamese culture from a entrepreneurship and technological point of view.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg",
      links: [
        {
          title: "Website",
          href: "https://international.fpt.edu.vn/",
        },
        {
          title: "Photos",
          href: "https://www.linkedin.com/posts/bennett-university_bennettuniversity-globalexposure-entrepreneurshipjourney-ugcPost-7232006796473683968-tKMa?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Technical CO-Head",
      dates: "August 2023 - May 2024",
      location: "Computer Society of India, Bennett University",
      description:
        "As the technical co-head of the CSI chapter of my university, I was responsible for organizing various events, workshops, and hackathons. I also mentored and guided students in their technical journey.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s",
      links: [
        { title: "Website", href: "https://csiindia.org/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/csi-india/",
        },
        {
          title: "Welcome Letter",
          href: "https://www.linkedin.com/posts/chiragagg5k_newrole-bennettuniversity-technology-activity-7097467074863636480-M1q6",
        },
      ],
    },
  ],
} as const;
