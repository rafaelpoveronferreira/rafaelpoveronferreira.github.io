import vite from "../assets/vite.svg"
import react from "../assets/react.svg"
import js from "../assets/js.svg"
import redux from "../assets/redux.svg"
import tailwind from "../assets/tailwind.svg"
import node from "../assets/node.svg"
import jwt from "../assets/jwt.svg"
import stripe from "../assets/stripe.svg"
import mongodb from "../assets/mongodb.svg"


const enUS = {
    home: {
        gridMaskText: 'Click to meet me',
        subheader: 'develope',
        linkToProjects: 'click to open my portfolio'
    },
    projects: [{
        title: 'Full-Stack E-Commerce',
        techList: [[vite, "Vite"],
            [react, "React"],
            [js, "JavaScript"],
            [redux, "Redux"],
            [tailwind, "Tailwind"],
            [node, "NodeJS"],
            [jwt, "JWT"],
            [stripe, "Stripe"],
            [mongodb, "MongoDB"]],
        description: [
            'Developed in MERN Stack (MongoDB + ExpressJS + ReactJS + NodeJS',
            'Deployed using Railway platform (https://niehs.up.railway.app/)',
            'Integrated with Stripe testnet for payments',
            'Frontend developed from the ground up, without any templates',
            "Although functional, it isn't a commercial product. It was developed mainly for self-learning purposes",
            "Source code is available on my github page.",
            "Next Features: 1- Admin page where it will be possible to deploy CRUD operations to the Database; 2- A customizable profile for each user; 3- Code optimization; 4- NodeJS server security review; 4- Finish implementation more language options besides brazilian portuguese; 4- Search system."
        ]
    }],
    contact: {
        header: 'Get in touch'
    }
}

export default enUS