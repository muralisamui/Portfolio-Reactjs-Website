export const hashRoutes = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Experience", "/#experience"],
    ["Projects", "/#projects"],
    ["Contact", "/#contact"],
    ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
    "Developer",
    "Programmer",
    "Tech Enthusiast",
    "Cook"
];
export const myName = "Murali Samui";
export const shortDescription = "Full Stack Developer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/muralisamui',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/murali-samui-479a91163/',
    },
    {
        name: 'Email',
        url: 'mailto:muralisamui997@gmail.com',
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["C", "Java", "HTML/CSS", "Javascript", "Typescript"],
    },
    {
        name: "Web Development",
        items: ["React", "NextJs", "Node", "Redux", "RestAPI", "ExpressJs", "MUI"],
    },
    {
        name: "Database",
        items: ["MySQL", "MongoDB"],
    },
    {
        name: "Tools/Software/Others",
        items: ["Git", "Github", "VSCode", "Postman", "Other"],
    },
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Sigilo Tech Pvt Ltd",
        bottomColor: "#6d92bf",
        icon: "/company/Sigilo_Tech.png",
        date: "May 2022 - February 2024",
        points: [
            "Led a team of 10 developers in the creation of efficient and aesthetic websites and mobile applications for 10+ projects.",
            "Conceptualized mock-ups for websites and mobile applications, resulting in a 35% increase in client satisfaction.",
            "Developed a customer-specific design framework adaptable to both web and mobile platforms, reducing site and app production time by 4 days",
            "Conducted daily standups, enhancing team efficiency by over 50% and decreasing time-to-deployment."
        ],
    },
    {
        title: "Cloud Developer Intern",
        company_name: "Ardent Computech PVT LTD",
        bottomColor: "#f1df87",
        icon: "/company/ardent.png",
        date: "Feb 2020 - Feb 2021",
        points: [
            "Played a pivotal role in the successful implementation of AWS cloud-based solutions, resulting in a 50% reduction in infrastructure costs and a 60% increase in system scalability",
            "Engineered highly optimized serverless applications leveraging AWS Lambda, achieving a 40% reduction in response time",
            "Implemented and managed scalable and secure storage solutions using AWS S3."
        ],
    },
    {
        title: "Front-End Developer Intern",
        company_name: "Confiance Mobility LLP",
        bottomColor: "#bc1010",
        icon: "/company/confiance.png",
        date: "Nov 2020 - Dec 2020",
        points: [
            "Translated intricate design concepts into precisely engineered codebases, resulting in a 30% improvement in website loading times and a 25% increase in user engagement, leveraging WordPress, HTML, and CSS.",
            "Collaborated with cross-functional teams to drive innovation, leading to a 40% increase in conversions.",
            'Provided insights to leaders three times a week regarding the development of new features.',
        ],
    }
];

export const projectsData = [
    {
        title: 'Portfolio',
        desciption: 'Crafted an engaging portfolio site with ReactJS and Three.js, enhancing user interaction through a serverless feedback system powered by a custom API',
        tech: ['Nodejs', 'React', 'Threejs', 'Nodemailer', 'MUI', 'Bootstrap', 'drei'],
        github: 'https://github.com/muralisamui',
        external: 'https://murali-samui-dev-portfolio.netlify.app/',
        image: '/projects/PortfolioBG.png'
    },
    {
        title: 'Chat-Bot using AWS',
        desciption: 'Designed a chatbot that can be integrated with facebook messenger to take food orders.',
        tech: ['AWS LEX','Lambda','S3','EC2'],
        github: 'https://github.com/muralisamui',
        image: '/projects/aws.jpg'
    },
];

export const contactData = {
    imagesrc: '/stars/StarBackground.png',
    imagealt: 'Star Background Image',
};
