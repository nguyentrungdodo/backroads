import imgTour1 from "./images/tour-1.jpeg";
import imgTour2 from "./images/tour-2.jpeg";
import imgTour3 from "./images/tour-3.jpeg";
import imgTour4 from "./images/tour-4.jpeg";


export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", iconClass: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", iconClass: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", iconClass: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    iconClass: "fas fa-wallet fa-fw",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiore sofficia",
  },
  {
    id: 2,
    title: "endless hiking",
    iconClass: "fas fa-tree fa-fw",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiore sofficia",
  },
  {
    id: 3,
    title: "amazing comfort",
    iconClass: "fas fa-socks fa-fw",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiore sofficia",
  },
];

export const tours = [
  {
    id: 1,
    img: imgTour1,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: imgTour2,
    title: "Best of java",
    date: "october 1th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: imgTour3,
    title: "explore hong kong",
    date: "september 15th, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: imgTour4,
    title: "kenya highlights",
    date: "december 5th, 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    destination: "kenya",
    duration: 20,
    cost: 3300,
  },
];
