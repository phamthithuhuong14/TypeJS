// Referent type

type projectType = {
  id: number;
  name: string;
  techStack: string[];
  summary: string;
};

type cetificateType = {
  id: number;
  name: string;
  major: string;
  graduatedYear: number;
};

type portfolioType = {
  fullName: string;
  birthDay: string;
  address: string;
  jobs: Array<string>;
  company: string;
  isMarried: boolean;
  projects: projectType[];
  cetificate?: cetificateType[];
};

const projectOne: projectType = {
  id: 1,
  name: "E-commerce website",
  techStack: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
  summary: "Build a website to sell products online",
};

const myPortfolio: portfolioType = {
  fullName: "Nguyen Minh Hoang",
  birthDay: "1992-12-12",
  address: "Bac Giang",
  jobs: ["developer", "teacher", "grab driver"],
  company: "FPT Software",
  isMarried: true,
  projects: [
    {
      id: 1,
      name: "E-commerce website",
      techStack: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
      summary: "Build a website to sell products online",
    },

    {
      id: 1,
      name: "Binacy website",
      techStack: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
      summary: "Build a website to ...",
    },
  ],
  cetificate: [
    {
      id: 1,
      name: "English version B",
      major: "language",
      graduatedYear: 2013,
    },
  ],
};

const yourPortfolio: portfolioType = {
  fullName: "Nguyen Minh Hoang",
  birthDay: "1992-12-12",
  address: "Bac Giang",
  jobs: ["developer", "teacher", "grab driver"],
  company: "FPT Software",
  isMarried: true,
  projects: [
    {
      id: 1,
      name: "E-commerce website",
      techStack: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
      summary: "Build a website to sell products online",
    },

    {
      id: 1,
      name: "Binacy website",
      techStack: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
      summary: "Build a website to ...",
    },
  ],
};
