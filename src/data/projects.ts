import type Project from 'models/Project'

const projects: Project[] = [
  {
    title: 'Indexify',
    subtitle: 'A service for creating the navigation of Telegram channels',
    url: 'https://indexify.cc/nomadmood',
    description: [
      'I developed a service to assist individuals in creating navigation for their Telegram channels. While browsing various channels, I noticed a lack of navigation or poorly designed ones, which inspired me to create a simple and user-friendly tool. With just a few clicks, users can create a navigation system for their channels, grouping posts by topic and sharing them. Moreover, users can read all posts directly within the app, eliminating the need to switch between Telegram and the browser.',
    ],
    technologies: [
      'TypeScript',
      'Python',
      'Preact',
      'Koa',
      'MongoDB',
      'grammY',
      'Pyrogram',
    ],
  },
  {
    title: 'GetParcel',
    subtitle: 'A delivery service using crowdshipping mechanics',
    url: 'https://t.me/getparcelbot',
    description: [
      "While browsing through Telegram groups, I noticed that many people were seeking someone who could travel to their city from another location to bring them documents or other items. That's when I had the idea to create this service. My service connects individuals who need help delivering a parcel or documents from one location to another, no matter where they are located.",
    ],
    technologies: [
      'TypeScript',
      'Preact',
      'TailwindCSS',
      'Koa',
      'MongoDB',
      'grammY',
    ],
  },
  {
    title: '@surfwaybookingbot',
    subtitle: 'Telegram bot for booking surf classes',
    url: 'https://t.me/surfwaybookingbot',
    description: [
      "This is my biggest and most complex bot I've done. It automates the process of booking classes, purchasing and activating certificates, and making deposits. I've connected it to a payment solution and made integration with a CRM system. The bot features calendar for choosing dates of classes which is implemented using native telegram buttons. The initial schema of database was totally redisigned by me to make it possible to store all types of calendars, classes and certificates. It also has a messaging system. Metabase is used to provide charts and tables for analytics. The bot and metabase run in Docker containers.",
    ],
    technologies: ['Python', 'MySQL', 'Redis', 'Docker', 'Metabase'],
  },
  {
    title: 'antonbuev.com',
    subtitle: 'This is this website!',
    url: 'https://antonbuev.com/',
    github: 'https://github.com/SOAPkelele/my-landing',
    description: [
      "I think any developer needs one! I've made it to gather all info about my projects and myself. I'll try to keep updated with the latest info.",
    ],
    technologies: ['TypeScript', 'TailwindCSS', 'Astro', 'Preact'],
  },
  {
    title: '@workoutybot',
    subtitle: 'Telegram bot for saving workouts and weight measurements',
    url: 'https://t.me/workoutybot',
    description: [
      "Workoutybot is my favourite pet project. I love sports and some time ago I didn't find an app which would be simple enough and better than a plain textbook, so I created this bot. It provides a minimalistic interface with a calendar to view and save workouts. I also added a graph chart to view weight progress.",
      'I wrote an article on vc.ru promoting this bot. More than 2000+ users have registered since then and they are still coming.',
    ],
    technologies: ['Python', 'PostgreSQL', 'Redis', 'Docker', 'TypeScript'],
  },
  {
    title: '@somecoffeebot',
    url: 'https://t.me/somecoffeebot',
    description: [
      'I have created a Telegram bot to demonstrate the capabilities of a WebApp and to showcase the potential for integrating Telegram payments. This project serves as a template for future endeavors and allows me to explore the possibilities of WebApps.',
    ],
    technologies: [
      'TypeScript',
      'Preact',
      'TailwindCSS',
      'Koa',
      'MongoDB',
      'grammY',
    ],
  },
  {
    title: '@ltuniversity_bot',
    subtitle: 'Multilingual Telegram bot for crypto quizzes',
    github: 'https://github.com/SOAPkelele/nft_quiz_bot/',
    url: 'https://t.me/ltuniversity_bot',
    description: [
      'Beatiful Telegram bot for taking polls from LocalTrade University. It utilizes built-in telegram quizzes for a seamless experience. It is available in 4 languages and has a small admin panel where you can get stats. Adding new polls and questions is automated by parsing google spreadsheet.',
    ],
    technologies: ['Python', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Smart camera',
    subtitle: 'Raspberry Pi and camera to detect people',
    github: 'https://github.com/soapkelele/smart-camera',
    description: [
      "A coursework project for Sberbank's internal use. It's a program to identify people who perform maintenance and repair of equipment in the office environment. I found, trained and compressed a neural network so we could start it on a Raspberry  Pi.",
    ],
    technologies: ['Python', 'Raspberry Pi', 'OpenCV', 'YoloV4', 'TFLite'],
  },
]

export default projects
