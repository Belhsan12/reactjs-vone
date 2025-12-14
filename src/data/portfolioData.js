/**
 * @typedef {object} ExperienceItem
 * @property {string} title
 * @property {string} company
 * @property {string} type
 * @property {string} period
 * @property {string} location
 * @property {string[]} bullets
 */

/**
 * @typedef {object} EducationItem
 * @property {string} title
 * @property {string} school
 * @property {string} status
 * @property {string} period
 */

/**
 * @typedef {object} ProjectItem
 * @property {string} title
 * @property {'Completed' | 'In Progress' | 'Planned' | 'Under Review'} status
 * @property {string} description
 * @property {string} category
 * @property {string[]} technologies
 * @property {string[]} [highlights]
 */

/**
 * @typedef {object} AchievementItem
 * @property {string} title
 * @property {string} issuer
 * @property {string} date
 * @property {string} category
 * @property {string} [note]
 */

export const personalInfo = {
  name: "Naffeti Belhsan",
  image: "/belhsanImage.jpg", // Assuming this image exists in public/ or is handled by Vite directly
  headline: "Full Stack Web & Mobile Developer",
  subheadline:
    "Building secure, modern web experiences with the MERN stack and AI-enhanced workflows.",
  summary:
    "I am a passionate web developer with a focus on building modern, user-friendly, and secure web applications. With a strong foundation in the MERN stack, I enjoy creating solutions that combine functionality and creativity to solve real-world challenges. Currently pursuing a Master's in Competitive Intelligence Monitoring at ESEN, I bring both technical expertise and strategic thinking to every project I undertake.",
  location: "Tunis, Tunisia",
  phone: "+216 50 231 521",
  email: "belhsannaffeti@gmail.com",
  website: "https://www.belhsandevs.tech",
  availability: "Available for freelance opportunities",
  callToAction: {
    primaryLabel: "Download CV",
    primaryLink: "/path/to/your/cv.pdf", // Placeholder: Update with actual CV path
    secondaryLabel: "View Projects",
    secondaryLink: "#projects",
  },
  heroBadges: ["Naffeti Belhsan", "React", "Node.js", "MongoDB", "AI/ML"],
};

export const coreTechnologies = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "Tailwind CSS",
  "Next.js",
  "Flutter",
  "React Native",
  "Python",
  "AI/ML"
];

export const stats = [
  { label: "Experience", value: "2+ Years", caption: "Web Developer" },
  { label: "Projects", value: "8+", caption: "Delivered end-to-end" },
  { label: "Education", value: "Master", caption: "Competitive Intelligence" },
  { label: "Freelance", value: "Available", caption: "Open to new work" },
];

/** @type {ExperienceItem[]} */
export const experiences = [
  {
    title: "Graduation Project: Web Developer Intern",
    company: "ATVIC",
    type: "Internship",
    period: "Feb 2025 - Present",
    location: "La Manouba, Tunisia",
    bullets: [
      "Leading the strategic redesign and modernization of atvic.tn to elevate the user experience.",
      "Implementing SEO optimizations and strengthening the digital presence through data-driven decisions.",
      "Developing a new website (www.atvic.tn) with modular architecture and optimized content workflows.",
      "Integrating AI tools to automate content generation and improve member engagement.",
    ],
  },
  {
    title: "Training Internship: Intern",
    company: "Transtu",
    type: "Internship",
    period: "2023",
    location: "Tunis, Tunisia",
    bullets: [
      "Built responsive web applications leveraging the MERN stack and modern design systems.",
      "Collaborated with cross-functional teams to deliver innovative features under tight deadlines.",
      "Adopted coding best practices to ensure maintainable, high-quality software solutions.",
    ],
  },
  {
    title: "Training Internship: Intern",
    company: "OACA",
    type: "Internship",
    period: "Jan 2022 - Feb 2022",
    location: "Tunis, Tunisia",
    bullets: [
      "Developed a web application to streamline intern assignment management for the organization.",
      "Utilized HTML, CSS, JavaScript, Bootstrap, and PHP to build a full-stack solution.",
      "Gained experience in full-stack web development and process automation.",
    ],
  },
  {
    title: "Initiation Internship: Intern",
    company: "Transtu",
    type: "Internship",
    period: "Jan 2021 - Feb 2021",
    location: "Tunis, Tunisia",
    bullets: [
      "Assisted in migrating critical data from AS400 systems to MySQL with minimal downtime.",
      "Collaborated with the IT department to design and document data migration workflows.",
      "Developed a strong foundation in database management and data transfer protocols.",
    ],
  },
];

/** @type {EducationItem[]} */
export const education = [
  {
    title: "Master in Competitive Intelligence Monitoring",
    school: "Ecole Superieure de l'Economie Numerique (ESEN)",
    status: "Completed",
    period: "2023 - 2025",
  },
  {
    title: "Bachelor in Information System Development",
    school: "ISET Kelibia",
    status: "Completed",
    period: "2020 - 2023",
  },
  {
    title: "Computer Science Baccalaureate",
    school: "High School Sidi Hssine",
    status: "Completed",
    period: "2020",
  },
];

/** @type {ProjectItem[]} */
export const projects = [
  {
    title: "ATVIC Website Modernization",
    status: "Completed",
    description:
      "Redesigned and optimized the ATVIC website to enhance digital presence. Delivered responsive UI, improved navigation, AI-powered content generation, and dedicated member subdomains.",
    category: "Web Development & Digital Transformation",
    technologies: ["Next.js 15", "TypeScript", "MongoDB", "Express.js", "Tailwind CSS"],
  },
  {
    title: "CarteWatch - Assurance Competitor Monitoring",
    status: "In Progress",
    description:
      "Strategic competitive intelligence application for the insurance sector with real-time monitoring of offers, pricing, and reviews to guide decision-making.",
    category: "Competitive Intelligence",
    technologies: ["Next.js 15", "TypeScript", "MongoDB", "Node.js", "AI Analysis"],
  },
  {
    title: "Live with AI Assistant (Audio-Visual)",
    status: "Planned",
    description:
      "Real-time AI-powered audio-visual assistant enabling interactive live streaming with instant speech recognition and dynamic responses.",
    category: "AI & Audio-Visual Technology",
    technologies: ["Google Gemini AI", "WebRTC", "Node.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Connect Your Google Workspace",
    status: "In Progress",
    description:
      "OAuth integration experience that connects users with Google Workspace, requesting granular scopes for Gmail, Google Photos, and Google Drive.",
    category: "Authentication & Integration",
    technologies: ["OAuth 2.0", "Google API", "React", "Node.js"],
  },
  {
    title: "E-Commerce Website (Women's Clothing)",
    status: "In Progress",
    description:
      "Modern, responsive e-commerce frontend with product cards, filters, and streamlined checkout to boost conversions.",
    category: "E-Commerce",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Learn Without Limits",
    status: "Planned",
    description:
      "eLearning platform offering thousands of courses, designed for scale with engaging UI to help users grow their skills.",
    category: "Education Platform",
    technologies: ["React", "Node.js", "MongoDB", "Responsive Design"],
  },
  {
    title: "SocialBot AI",
    status: "In Progress",
    description:
      "AI-driven social media automation with enterprise security, team collaboration features, and blazing-fast responses.",
    category: "AI & Social Media Automation",
    technologies: ["Google Gemini AI", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "MareSereno Luxury Beachfront Accommodation",
    status: "Completed",
    description:
      "Premium booking experience with interactive gallery, testimonials, and conversion-focused UI for seaside accommodations.",
    category: "Hospitality & Booking Platforms",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js"],
  },
  {
    title: "Connected Legal Cabinet",
    status: "Completed",
    description:
      "Secure MERN platform for legal document management with confidentiality and collaboration at the core.",
    category: "Web Application",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Security"],
  },
  {
    title: "Sales and Purchases Management",
    status: "Completed",
    description:
      "Business management solution integrating budgeting, scheduling, and resource tracking to streamline operations.",
    category: "Business Application",
    technologies: ["MERN Stack", "Project Management", "Budgeting"],
  },
  {
    title: "Data Migration AS400 to MySQL",
    status: "Completed",
    description:
      "Led the migration of large datasets from AS400 to MySQL using Talend ETL and Navigate with rigorous validation.",
    category: "Data Engineering",
    technologies: ["AS400", "MySQL", "Talend ETL", "Navigate"],
  },
  {
    title: "AI Plant Disease Detection",
    status: "Completed",
    description:
      "Built a 90% accurate AI model for plant disease detection with image recognition to support agricultural innovation.",
    category: "AI/Machine Learning",
    technologies: ["AI/ML", "Image Recognition", "Python", "Computer Vision"],
  },
  {
    title: "Server Architecture Project",
    status: "Under Review",
    description:
      "Designing secure, scalable backend architecture with optimized APIs and data protection at its core.",
    category: "Backend Infrastructure",
    technologies: ["Node.js", "API Design", "Scalability", "Security"],
  },
];

/** @type {AchievementItem[]} */
export const achievements = [
  {
    title: "National License in Information System Development",
    issuer: "ISET Kelibia",
    date: "16/06/2023",
    category: "Academic",
    note: "PFE Project with Very Good Score",
  },
  {
    title: "Cisco Networking Academy Certifications",
    issuer: "IT Department 4C Kelibia",
    date: "August 2023",
    category: "Technology",
    note: "Python, Cybersecurity, and Network Security specializations",
  },
  {
    title: "AI Certificate",
    issuer: "IT Department 4C Kelibia",
    date: "June 2023",
    category: "AI/ML",
    note: "Artificial Intelligence and its Tools Identification program",
  },
  {
    title: "Mobile Development Certificate",
    issuer: "Made in Kelibia",
    date: "2023",
    category: "Mobile",
    note: "Kotlin Android development bootcamp",
  },
  {
    title: "Second Place in Chess Competition",
    issuer: "ISET Kelibia",
    date: "2022",
    category: "Achievement",
    note: "Recognized at the ISET Kelibia chess tournament",
  },
];

export const contactDetails = {
  headline: "Ask Me About a Project or App",
  prompt:
    "Ready to work together? Let's discuss your project and bring your ideas to life.",
  location: "Tunis, Tunisia",
  email: "belhsannaffeti@gmail.com",
  phone: "+216 50 231 521",
  website: "https://www.belhsandevs.tech",
};