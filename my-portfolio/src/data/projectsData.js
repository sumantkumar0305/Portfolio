
const projects = [   
    {
    title: "OLX Phone Price Prediction - Machine Learning Web Application",

    description:
        "A full-stack machine learning application that predicts the resale prices of used smartphones using OLX market data. The project includes web scraping of phone listings, data cleaning, missing value handling, univariate and bivariate exploratory data analysis, feature engineering, and machine learning model selection. Users can enter phone specifications such as brand, RAM, storage, network type, warranty, and included accessories to receive an estimated resale price. The application features a responsive React frontend built with Material UI and a Flask REST API backend integrated with a trained Scikit-learn model. It also includes a modular architecture designed for future laptop price prediction and additional product categories.",

    tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Jupyter Notebook",
        "Machine Learning",
        "Data Cleaning",
        "EDA",
        "Feature Engineering",
        "React",
        "Vite",
        "Material UI",
        "Flask",
        "Flask-CORS",
        "Joblib",
        "REST API",
    ],

    github: "https://github.com/sumantkumar0305/OLX_Price_Prediction",
    demo: "",
    },

    {
        title: "Alumnexus - Full-Stack Alumni Management System",

        description:
            "A full-stack MERN application designed to connect college students with alumni for mentorship, internships, job referrals, networking, and community engagement. The platform provides separate portals for students, alumni, and administrators with role-based authentication and authorization. Students can explore alumni profiles, jobs, internships, and events, while alumni can offer mentorship, share opportunities, organize events, and support their college through donations. Administrators can manage user records and transfer graduated students into the alumni system. Built with React, Material UI, Node.js, Express.js, MongoDB, and JWT authentication.",

        tech: [
            "React 18",
            "React Router DOM",
            "Material UI",
            "Axios",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "bcryptjs",
            "Multer",
            "CORS",
            "Helmet",
            "REST API",
        ],

        github: "https://github.com/sumantkumar0305/Alumni-project",
        demo: "",
    },

    {
        title: "VisitSmart - Nature Explorer & Hotel Booking Platform",

        description:
        "A comprehensive full-stack MERN application designed to simplify travel planning by helping users discover natural tourist destinations such as forests, waterfalls, lakes, and scenic locations. The platform allows users to explore destination details and, on the same page, view and book nearby hotels without redirection. It features secure user authentication, dynamic place-based navigation, responsive UI design, and a scalable backend architecture that efficiently manages users, destinations, and hotel data.",

        tech: [
        "React",
        "Material UI",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "AWS",
        "Cloudinary",
        ],

        github: "https://github.com/sumantkumar0305/visitSmart",
        demo: "",
    },

    {
        title:
        "HireReady AI - AI-Powered Resume Analyzer, Job Matcher & Interview Preparation Platform",

        description:
        "A comprehensive full-stack web application designed to help students and job seekers become career-ready through AI-powered resume analysis, job compatibility assessment, and interview preparation. The platform analyzes uploaded resumes to generate ATS scores, identify strengths and weaknesses, highlight resume mistakes, and recommend missing skills. It enables users to compare resumes against job descriptions, evaluate compatibility, and identify skill gaps. Additionally, it generates role-specific interview questions and evaluates mock interview answers using AI-powered feedback. Built with React, Node.js, Express.js, Google Gemini AI, MySQL, Sequelize ORM, and JWT authentication.",

        tech: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Axios",
        "Node.js",
        "Express.js",
        "MySQL",
        "Sequelize ORM",
        "Google Gemini API",
        "JWT",
        "bcryptjs",
        "Multer",
        "pdf-parse",
        "Nodemailer",
        ],

        github: "https://github.com/sumantkumar0305/HireReady",
        demo: "",
    },

    {
        title: "Library Management System - C++ OOP Project",

        description:
            "A command-line Library Management System developed in C++17 using Object-Oriented Programming (OOP) and the Standard Template Library (STL). The system supports book inventory management, member registration, book issuing and returning, and instant book/member lookup using hash-based containers. It includes role-based access for administrators and standard users, tracks books issued to each member, prevents duplicate borrowing of the same book, and updates inventory automatically when books are issued or returned. The project demonstrates encapsulation, object relationships, data management, and efficient searching with unordered_map and unordered_set. Future enhancements include file handling for permanent storage, ISBN-based identification, overdue fines, and a graphical user interface.",

        tech: [
            "C++",
            "C++17",
            "Object-Oriented Programming",
            "STL",
            "unordered_map",
            "unordered_set",
            "Data Structures",
            "Role-Based Access Control",
            "Command Line Interface",
            "G++"
        ],

        github: "https://github.com/sumantkumar0305/Library-Management",
        demo: "",
    },

    {
        title: "Wall Calendar - Interactive React Web Application",

        description:
            "A responsive wall-calendar web application built with React.js and Material UI, inspired by traditional hanging calendars. It features seasonal hero images for all 12 months, month navigation, interactive date-range selection, visual highlighting for selected dates, and a live summary showing the selected range and total number of days. The application includes a notepad-style notes panel that saves and retrieves notes using localStorage, holiday markers with tooltip names, a distinct highlight for the current date, and red styling for weekends. Its modular component architecture separates calendar navigation, date cells, notes, holiday data, and date utilities, while the responsive layout adapts seamlessly to desktop and mobile screens.",

        tech: [
            "React.js 18",
            "JavaScript",
            "Material UI (MUI) v5",
            "Emotion",
            "HTML5",
            "CSS3",
            "React Hooks",
            "localStorage",
            "Date Manipulation",
            "Responsive Web Design",
            "Unsplash"
        ],

        github: "https://github.com/sumantkumar0305/wall-calendar",
        demo: "",
    }
];

export default projects;
