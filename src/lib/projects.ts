import { Project } from "@/types/types";

export const Projects: Project[] = [
  {
    title: "Chatter",
    paragraphs: [
      "Chatter is a web-application in the works that will utilize the power of websockets to establish a consistent connection between users. This project will be a learning opportunity for backend development as I will be diverting my attention from a Python to JavaScript backend.",
      "Most of the projects I've done had a Django backend using the defaulted SQLite database. Although it is fine for developing applications fast, when having to deal with problems such as scale, SQLite would not be the best option.",
      "This application is inpsired by social platforms allowing real-time communications to occur such as Discord, Skype, Microsoft Teams, etc.",
    ],
    description:
      "A chat web-application allowing users to communicate in real-time.",
    imageFile: "chatter.png",
    techIcons: [
      { displayName: "Nextjs", srcName: "nextjs" },
      { displayName: "SocketIO", srcName: "socketio" },
      { displayName: "Express", srcName: "expressjs" },
      { displayName: "Postgres", srcName: "postgres" },
    ],
    slug: "chatter",
    completion_status: false,
  },
  {
    title: "Pressure Analysis and Prediction",
    description:
      "Predicting pressure maps from IR footage using Neural Networks.",
    paragraphs: [
      "My mechanical engineering team's senior design project involved building a 'sparbot' inspired by football tackle dummies. The purpose of this project was to analyze the effects of physical impact caused through athlete training.",
      "As part of the the software subsystem, our job was to collect and proccess data to be fed into a neural network for regression anaylsis. The team utilized a volleyball, FLIR IR Camera, and Tactilus pressure sensor to record data.",
      "We decided upon a Autoencoder architecture as that best suited our needs. This type of neural network is able to reconstruct inputs as outputs.",
      "After training the neural network with IR footage and pressure reading labels, we hope for it to outputs its own prediction pressure mapping with any new IR footage.",
      "Attained a 73.5% accuracy in predicting pressure maps from inputs of IR footage using our model.",
    ],
    imageFile: "autoencoder.png",
    techIcons: [
      { displayName: "Python3", srcName: "python3" },
      { displayName: "TensorFlow", srcName: "tensorflow" },
    ],
    slug: "pressure-analysis-and-prediction",
    completion_status: true,
  },
  {
    title: "Jobseeker",
    description:
      "A job search web application that allows jobseekers to apply to careers via job postings.",
    paragraphs: [
      "Jobseeker is a comprehensive full-stack web application designed to facilitate meaningful connections between users, whether they're seeking job opportunities or looking to hire talent.",
      "With Jobseeker, users have the option to register and log in as either a 'seeker' or an 'employer'.",
      "This flexibility empowers users to expand their professional network and access many career opportunities.",
    ],
    imageFile: "jobseeker.png",
    techIcons: [
      { displayName: "Nextjs", srcName: "nextjs" },
      { displayName: "MaterialUI", srcName: "material-ui" },
      { displayName: "Django", srcName: "django" },
    ],
    repoLink: "https://github.com/bencodes8/jobseeker",
    slug: "jobseeker",
    completion_status: true,
  },
  {
    title: "Social Network",
    description:
      "A social network, web application to allow users to view posts from others or to create one themselves.",
    paragraphs: [
      "This social network web-application was built to have some functionality similar to those found on popular social media platforms.",
      "All users, no matter if authenticated, can view all posts the platform has stored in its database and will be fetched via HTTP request. Users who are authenticated has access to more features.",
      "This includes: creating/editing posts of their own, follow/unfollow particular users, view user's profiles, and liking/unliking posts.",
    ],
    imageFile: "network.png",
    techIcons: [
      { displayName: "React", srcName: "react" },
      { displayName: "Bootstrap", srcName: "bootstrap" },
      { displayName: "Django", srcName: "django" },
    ],
    repoLink: "https://github.com/bencodes8/network",
    slug: "social-network",
    completion_status: true,
  },
  {
    title: "Game Auctions",
    description:
      "A e-commerce, web application to allow users to participate in a video game auction.",
    paragraphs: [
      "This e-commerce web-application allows users to participate in an auction to bid for their most wanted video game.",
      "All users, no matter if authentiacted, can view all listings and listing status' posted by registered users. Django is able to dynamically retrieve these models and render them on the page.",
      "Registered users have the extensive features including: creating a listing, adding a listing to a watchlist, bid for a listing, comment, and close a listing.",
      "When a listing is closed, the listing becomes invalid and can no longer be bidded for. The listing can still be viewed and the winner will be notified upon visiting the page.",
    ],
    imageFile: "commerce.png",
    techIcons: [
      { displayName: "HTML5", srcName: "html5" },
      { displayName: "CSS3", srcName: "css3" },
      { displayName: "Bootstrap", srcName: "bootstrap" },
      { displayName: "Django", srcName: "django" },
    ],
    repoLink: "https://github.com/bencodes8/commerce",
    slug: "game-auctions",
    completion_status: true,
  },
];
