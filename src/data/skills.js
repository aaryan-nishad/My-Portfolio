import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import express from '../assets/express.png'

const skills = {
  categories: [
    {
      title: 'Frontend',
      items: 'React.js, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap'
    },
    {
      title: 'Backend',
      items: 'Node.js, Express.js'
    },
    {
      title: 'Database',
      items: 'MongoDB'
    },
    {
      title: 'Tools',
      items: 'Git, GitHub, VS Code, Postman'
    }
  ],
  icons: [
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
    { src: javascript, alt: 'JavaScript' },
    { src: react, alt: 'React' },
    { src: node, alt: 'Node.js' },
    { src: mongo, alt: 'MongoDB' },
    { src: express, alt: 'Express' }
  ]
}

export default skills
