import gochat from "./img/gochat-tau.vercel.app_ (1).png";
import gopack from "./img/GOPack.gif";
import nigtrak from "./img/nigtrak.png";
import lendSqr from "./img/Lendsqr-fe-test.png";
import onlineAuction from "./img/onlineAuction.png";
import expense from "./img/goit-expenses.netlify.app_.png";
import meetup from "./img/goit-meetup.netlify.app_.png";
import momasPay from "./img/goit-momas-pay.netlify.app_.png";
import streamIt from "./img/goit-streamit.netlify.app_.png";
import hopeAtLast from "./img/hope-at-last.netlify.app_.png";
import goit from "./img/onukwilip.github.io_GO-IT_.png";
import nodeJs from "./img/icons8-nodejs-480.png";
import reactjs from "./img/icons8-react-100.png";
import nextjs from "./img/nextjs.png";
import webpack from "./img/icons8-webpack.png";
import typescript from "./img/icons8-typescript-144.png";
import babel from "./img/icons8-babel-128.png";
import scss from "./img/icons8-sass-144.png";
import mqtt from "./img/mqtt-logo.png";
import webSocket from "./img/websocket-logo.png";
import googleMaps from "./img/icons8-google-maps-old-144.png";
import restApi from "./img/restApi-logo.png";
import docker from "./img/icons8-docker-144.png";
import mongoDb from "./img/MongoDB-logo.png";
import cloudinaryApi from "./img/cloudinary.png";
import dotNet from "./img/DotNET.png";
import cSharp from "./img/csharp.png";
import msSql from "./img/mssql.png";
import git from "./img/icons8-git-144.png";
import github from "./img/icons8-github-120.png";
import jest from "./img/icons8-jest.png";
import reactTestingLibrary from "./img/reactTestingLibrary.png";
import html from "./img/icons8-html-5-128.png";
import css from "./img/icons8-css3-144.png";
import firebase from "./img/icons8-firebase-144.png";

const skillsId = {
  nodeJs: "Node Js",
  reactjs: "React Js",
  nextjs: "Next Js",
  webpack: "Webpack",
  typescript: "Typescript",
  babel: "Babel",
  scss: "SCSS",
  mqtt: "MQTT",
  webSocket: "WebSocket",
  googleMaps: "Google Maps",
  restApi: "REST API",
  docker: "Docker",
  mongoDb: "MongoDB",
  cloudinaryApi: "Cloudinary API",
  dotNet: ".NET",
  cSharp: "C#",
  msSql: "MSSQL",
  git: "Git",
  github: "GitHub",
  jest: "Jest",
  reactTestingLibrary: "React testing library",
  html: "HTML",
  css: "CSS",
  firebase: "Firebase",
};

class SkillClass {
  constructor(skill, image, stack) {
    this.skill = skill;
    this.image = image;
    this.stack = stack;
  }
}

export const skills = [
  new SkillClass(skillsId.nodeJs, nodeJs, "backend"),
  new SkillClass(skillsId.reactjs, reactjs, "frontend"),
  new SkillClass(skillsId.nextjs, nextjs, ["frontend", "backend"]),
  new SkillClass(skillsId.webpack, webpack, ["frontend", "backend"]),
  new SkillClass(skillsId.typescript, typescript, ["frontend", "backend"]),
  new SkillClass(skillsId.babel, babel, ["frontend", "backend"]),
  new SkillClass(skillsId.scss, scss, "frontend"),
  new SkillClass(skillsId.mqtt, mqtt, ["frontend", "backend"]),
  new SkillClass(skillsId.webSocket, webSocket, ["frontend", "backend"]),
  new SkillClass(skillsId.googleMaps, googleMaps, "frontend"),
  new SkillClass(skillsId.restApi, restApi, ["frontend", "backend"]),
  new SkillClass(skillsId.docker, docker, ["frontend", "backend"]),
  new SkillClass(skillsId.mongoDb, mongoDb, "database"),
  new SkillClass(skillsId.cloudinaryApi, cloudinaryApi, "backend"),
  new SkillClass(skillsId.dotNet, dotNet, "backend"),
  new SkillClass(skillsId.cSharp, cSharp, "backend"),
  new SkillClass(skillsId.msSql, msSql, "database"),
  new SkillClass(skillsId.git, git, ["frontend", "backend"]),
  new SkillClass(skillsId.github, github, ["frontend", "backend"]),
  new SkillClass(skillsId.jest, jest, ["frontend", "backend"]),
  new SkillClass(skillsId.reactTestingLibrary, reactTestingLibrary, "frontend"),
  new SkillClass(skillsId.html, html, "frontend"),
  new SkillClass(skillsId.css, css, "frontend"),
  new SkillClass(skillsId.firebase, firebase, "database"),
];

export const portfolioArray = [
  {
    id: 1,
    name: "GOPack",
    image: gopack,
    githubLink: "https://github.com/onukwilip/gopack",
    demoLink: "https://gopack.vercel.app",
    tech: [
      skillsId.nodeJs,
      skillsId.webpack,
      skillsId.babel,
      skillsId.typescript,
      skillsId.git,
      skillsId.github,
    ],
    desc: `GOPack is an open-source JavaScript library built using Node Js, webpack, and babel. It was developed to help javascript developers unfamiliar with webpack bundle their projects into static files using pre-written webpack configuration and pre-installed loaders.`,
  },
  {
    id: 3,
    name: "NigTrak",
    image: nigtrak,
    githubLink: "https://github.com/onukwilip/NigTrak/tree/adding-typescript",
    demoLink: "https://nigtrak.netlify.app",
    tech: [
      skillsId.reactjs,
      skillsId.scss,
      skillsId.mqtt,
      skillsId.webSocket,
      skillsId.googleMaps,
      skillsId.typescript,
      skillsId.github,
      skillsId.git,
    ],
    desc: `NigTrak is a real-time location tracker (UI Only) that tracks registered personnel wherever they are in the world. It was developed for a previous organization. The backend is yet to be integrated into it. It uses React Js and SCSS for the frontend, Node Js and MSSQL for the backend and MQTT and WebSocket for the realtime communication`,
  },
  {
    id: 4,
    name: "OnlineAuction",
    image: onlineAuction,
    githubLink: "https://github.com/onukwilip/onlineAuction",
    demoLink: "https://auction-app-s9qv.onrender.com/",
    tech: [
      skillsId.nextjs,
      skillsId.restApi,
      skillsId.docker,
      skillsId.mongoDb,
      skillsId.git,
      skillsId.github,
      skillsId.cloudinaryApi,
    ],
    desc: `OnlineAuction is an auctioning web application developed for a client on Fiverr, where can sugn-up, create, bid, buy, and sell products`,
  },
  {
    id: 2,
    name: "GOChat",
    image: gochat,
    githubLink: "https://github.com/onukwilip/GOChat-2.0",
    demoLink: "https://gochat-tau.vercel.app",
    tech: [
      skillsId.nodeJs,
      skillsId.nextjs,
      skillsId.scss,
      skillsId.reactjs,
      skillsId.restApi,
      skillsId.dotNet,
      skillsId.cSharp,
      skillsId.msSql,
      skillsId.docker,
      skillsId.github,
      skillsId.git,
    ],
    desc: "This is a chat web application where users from around the world can sign up and communicate with thier family and friends. It was developed using React Js, Next Js and SCSS for the frontend. .NET, C# and MSSQL for it's backend, and Node Js for the web socket. ",
  },
  {
    id: 5,
    name: "LendSQR Dashboard",
    image: lendSqr,
    githubLink: "https://github.com/onukwilip/lendsqr-fe-test",
    demoLink: "http://prince-c-onukwili-lendsqr-fe-test.netlify.app/",
    tech: [
      skillsId.reactjs,
      skillsId.scss,
      skillsId.jest,
      skillsId.restApi,
      skillsId.reactTestingLibrary,
      skillsId.docker,
      skillsId.github,
      skillsId.git,
    ],
    desc: "This is a UI dashboard/website developed for an interview i had with LendSQR. It was developed using React Js and SCSS for the frontend, Jest and React testing library for Unit and integration tests and Docker for deploying to containers. ",
  },
];

export const otherProjects = [
  {
    id: 2,
    image: hopeAtLast,
    githubLink: "#",
    name: "Hope at last",
    demoLink: "https://hope-at-last.netlify.app/",
    tech: [skillsId.html, skillsId.css, skillsId.git, skillsId.github],
    desc: "This is a website that was and is currently being developed for charity, using HTML, CSS and Javascript",
  },
  {
    id: 3,
    image: momasPay,
    githubLink: "https://github.com/onukwilip/momas-pay-backup",
    name: "MomasPay",
    tech: [skillsId.reactjs, skillsId.scss, skillsId.git, skillsId.github],
    desc: "This is one of the versions of payment web application (UI only) that was and is currently being developed for an organization i worked for. It is an application where customers of the organization can pay for the organization's resources they consume, E.g Power/Energy",
    demoLink: "https://goit-momas-pay.netlify.app/",
  },
  {
    id: 4,
    image: expense,
    githubLink:
      "https://github.com/onukwilip/react-complete-guide-expenses-project",
    name: "Expenses App",
    tech: [skillsId.reactjs, skillsId.css, skillsId.git, skillsId.github],
    desc: "This is a website/dummy project that was developed while i was learning React Js, it tracks a user's yearly expenses",
    demoLink: "https://goit-expenses.netlify.app/",
  },
  {
    id: 5,
    image: meetup,
    githubLink: "https://github.com/onukwilip/react-meetup",
    desc: "This is a website/dummy project that was developed while i was learning React Js, it keeps track of one's meetup",
    tech: [
      skillsId.reactjs,
      skillsId.css,
      skillsId.git,
      skillsId.firebase,
      skillsId.github,
    ],
    name: "Meetup App",
    demoLink: "https://goit-meetup.netlify.app/",
  },
  {
    id: 6,
    image: streamIt,
    desc: "This is a website/dummy project that was developed while i was learning React Js, it is a UI clone of Netflix",
    name: "StreamIt",
    tech: [skillsId.reactjs, skillsId.scss, skillsId.git, skillsId.github],
    githubLink: "https://github.com/onukwilip/movie-web-app",
    demoLink: "https://goit-streamit.netlify.app/",
  },
  {
    id: 7,
    image: goit,
    name: "GOIT",
    desc: "This is a website that was developed inorder to display my skills and services. (It was my previous portfolio)",
    tech: [skillsId.html, skillsId.css, skillsId.git, skillsId.github],
    githubLink: "https://github.com/onukwilip/GO-IT",
    demoLink: "https://onukwilip.github.io/GO-IT/",
  },
];
