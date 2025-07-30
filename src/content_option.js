const logotext = "MEGHA";
const meta = {
    title: "Megha Dua",
    description: "Half engineer, half aesthetic gremlin. I write code with one hand and moodboard with the other. Everything I make is a little weird, a little pink, but very me.",
};

const introdata = {
    title: "Hi, I'm Megha Dua",
    animated: {
        first: "Engineer in the making, but creativity always sneaks into my code.",
        second: "I don’t just build tech; I make it think, feel, and maybe even look cute.",
        third: "I live in the space where code meets couture, and both sparkle.",
    },
    description: "I’m a final-year B.Tech CSE student with a strong interest in AI, cloud computing, and DevOps. I enjoy building smart, efficient systems and exploring how technology can solve real problems. Whether it’s designing clean architectures or automating processes, I’m always excited to learn, build, and improve.",
    your_img_url: "https://ibb.co/NnpPy1wx",
}

const dataabout = {
    title: "About Me",
    aboutme: "I like building things that work well and look good. I’ve worked with tools like React, Node.js, and Python, and I’m especially into AI and computer vision. But outside of all the tech stuff, I’ve always loved fashion and design. So now, I’m figuring out how to bring those two sides together, blending creativity and code to make digital experiences that are smart, fun, and a little bit stylish too.",
};

const worktimeline = [
    {
        jobtitle: "AI Research Intern",
        where: "DRDO Young Scientist Laboratory",
        date: "June 2025",
    },
    {
        jobtitle: "Business Analyst Intern",
        where: "NetCarrots Loyalty Services",
        date: "January 2025",
    },
    {
        jobtitle: "Volunteer Educator",
        where: "Saksham Bharti NGO",
        date: "June 2024",
    },
];

const skills = [
    { name: "Python & OpenCV", value: 85 },
    { name: "React & Node.js", value: 50 },
    { name: "AI/ML", value:80 },
    { name: "HTML/CSS", value: 70 },
    { name: "Figma", value: 80 },
    { name: "Git & GitHub", value: 85 },
    { name: "AWS", value: 65 }
];

const services = [
    {
        title: "AI & Computer Vision",
        description: "I design intelligent systems using YOLOv8, DeepSORT, and OpenCV — from surveillance applications to creative vision-based projects.",
    },
    {
        title: "DevOps & Automation",
        description: "With tools like GitHub Actions, Prometheus, and Jenkins, I streamline workflows and automate development pipelines for real-time tracking and efficiency.",
    },
    {
        title: "Creative Tech & UI Design",
        description: "I love blending clean code with thoughtful design — creating interfaces that are not only functional but also visually expressive and user-friendly.",
    },
];


const dataportfolio = [
    {
        img: "https://picsum.photos/400/600?grayscale&tech",
        description: "SynCode: A smart CI/CD tool built with Python and GitHub Actions that automatically syncs your LeetCode submissions to GitHub, turning your coding journey into a real-time, trackable portfolio.",
        link: "https://github.com/meghaduaa/SynCode",
    },
    {
        img: "https://picsum.photos/400/600?grayscale&ai",
        description: "CCTV Tracking System: AI-based CCTV Footage Analysis Tool using YOLOv8 and DeepSORT to track suspects in real-time.",
        link: "https://github.com/meghaduaa/CCTV_Tracking_System",
    },
    {
        img: "https://picsum.photos/400/600?grayscale&fashion",
        description: "Outfit Generator: A fun little web app built with HTML, CSS, and JavaScript that lets users mix and match outfits from a digital closet, all wrapped in a dreamy, playful UI.",
        link: "https://github.com/meghaduaa/Outfit-Generator",
    },
    {
        img: "https://picsum.photos/400/600?grayscale&fun",
        description: "Mini RAG System: A lightweight, local RAG pipeline built with LangChain, FAISS, and a compact LLM to answer questions from custom documents, optimized for speed and low-resource environments.",
        link: "https://github.com/meghaduaa/RAG-UPDATED",
    },
    {
        img: "https://picsum.photos/400/600?grayscale&fun",
        description: "Fusion Canvas: An AI art tool that lets you turn your photos into dreamy masterpieces — using Python, TensorFlow, and a neural network that paints like Van Gogh!",
        link: "https://github.com/meghaduaa/Fusion-Canvas",
    },
];

const contactConfig = {
    YOUR_EMAIL: "meghadua2603@gmail.com",
    YOUR_FONE: "+91 7982397657",
    description: "Have a tech challenge or a creative project in mind? Whether it's AI, full-stack apps, or fashion-tech blends, let's talk!",
    YOUR_SERVICE_ID: "your_emailjs_service_id",
    YOUR_TEMPLATE_ID: "your_template_id",
    YOUR_USER_ID: "your_user_id",
};

const socialprofils = {
    github: "https://github.com/meghaduaa",
    linkedin: "https://linkedin.com/in/megha_dua",
    instagram: "https://instagram.com/_meghadua_",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
