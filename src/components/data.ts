import { SkillDatas } from "./types";

export type LinkType = {
  name: string;
  url: string;
};

export type DataType = {
  name: string;
  date: string;
  description: string;
  skills: string[];
  links: LinkType[];
  images: string[];
  impressions: string;
};

export const data: DataType[] = [
  {
    name: "Simple Todo",
    date: "January 2021",
    description: "シンプルなTodoアプリ",
    skills: ["Firebase", "React", "TypeScript", "Next.js"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/hfukuoka/SimpleTodo",
      },
      { name: "Webアプリ", url: "https://simple-todo-snowy.vercel.app/" },
    ],
    images: ["assets/images/works/SimpleTodo.png"],
    impressions:
      "シンプルなTodoアプリ。firestoreでオンライン上に記録。projectごとにタスクを分けることができる。",
  },
];

export const skillDatas: SkillDatas = {
  language: [
    { name: "HTML5", iconName: "html", experience: "2 year", isActive: true },
    { name: "CSS3", iconName: "css", experience: "2 year", isActive: true },
    {
      name: "JavaScript",
      iconName: "javascript",
      experience: "2 year",
      isActive: true,
    },
    {
      name: "TypeScript",
      iconName: "typescript",
      experience: "2 year",
      isActive: true,
    },
    {
      name: "Python",
      iconName: "python",
      experience: "2 yaers",
      isActive: true,
    },
    { name: "C++", iconName: "c++", experience: "4 years", isActive: true },
  ],
  framework: [
    { name: "React", iconName: "react", experience: "2 year", isActive: true },
    {
      name: "Next.js",
      iconName: "nextjs",
      experience: "1 year",
      isActive: true,
    },
    {
      name: "Node.js",
      iconName: "nodejs",
      experience: "2 yaers",
      isActive: true,
    },
    {
      name: "Three.js",
      iconName: "three",
      experience: "1 months",
      isActive: true,
    },
  ],
  developmentTool: [
    {
      name: "VSCode",
      iconName: "vscode",
      experience: "4 years",
      isActive: true,
    },
    {
      name: "GitHub",
      iconName: "github",
      experience: "2 years",
      isActive: true,
    },
    {
      name: "Firebase",
      iconName: "firebase",
      experience: "6 month",
      isActive: true,
    },
    {
      name: "Docker",
      iconName: "docker",
      experience: "2 years",
      isActive: false,
    },
  ],
};
