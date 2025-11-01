export interface Certificate {
  id: number;
  title: string;
  issuer: "AWS" | "HackerRank" | "Google" | "Microsoft" | "MongoDB";
  logo: string;
  description: string;
  pdfUrl: string;
  date: string;
  skills: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  organization: string;
  testimonial: string;
  photo?: string;
  relationship: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "AWS",
    logo: "/certificates/aws-logo.svg",
    description: "Validates advanced technical skills and experience in designing distributed systems on AWS. Demonstrates expertise in compute, networking, storage, database services, security best practices, and cost optimization strategies for complex enterprise applications.",
    pdfUrl: "/certificates/aws-solutions-architect-professional.pdf",
    date: "January 2024",
    skills: ["AWS", "Cloud Architecture", "System Design", "DevOps", "Security"]
  },
  {
    id: 2,
    title: "AWS Certified Developer - Associate",
    issuer: "AWS",
    logo: "/certificates/aws-logo.svg",
    description: "Demonstrates proficiency in developing, deploying, and debugging cloud-based applications using AWS. Covers core AWS services, AWS SDK, serverless architecture, and continuous integration/deployment practices.",
    pdfUrl: "/certificates/aws-developer-associate.pdf",
    date: "October 2023",
    skills: ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "CloudFormation"]
  },
  {
    id: 3,
    title: "React (Advanced) Certificate",
    issuer: "HackerRank",
    logo: "/certificates/hackerrank-logo.svg",
    description: "Advanced-level certification validating expertise in React.js framework, including hooks, context API, performance optimization, state management, and modern React patterns. Covers building scalable, production-ready applications.",
    pdfUrl: "/certificates/hackerrank-react-advanced.pdf",
    date: "August 2023",
    skills: ["React", "Hooks", "Context API", "Redux", "Performance Optimization"]
  },
  {
    id: 4,
    title: "Node.js (Intermediate) Certificate",
    issuer: "HackerRank",
    logo: "/certificates/hackerrank-logo.svg",
    description: "Intermediate certification demonstrating strong knowledge of Node.js for backend development, including Express.js, middleware, RESTful API design, authentication, database integration, and async programming patterns.",
    pdfUrl: "/certificates/hackerrank-nodejs-intermediate.pdf",
    date: "July 2023",
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "MongoDB"]
  },
  {
    id: 5,
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    logo: "/certificates/hackerrank-logo.svg",
    description: "Validates intermediate-level algorithmic problem-solving skills. Covers data structures, algorithms, complexity analysis, and optimization techniques essential for tackling complex technical challenges.",
    pdfUrl: "/certificates/hackerrank-problem-solving.pdf",
    date: "June 2023",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"]
  },
  {
    id: 6,
    title: "Google Cloud Platform Fundamentals",
    issuer: "Google",
    logo: "/certificates/google-cloud-logo.svg",
    description: "Foundational certification covering Google Cloud Platform services including Compute Engine, Cloud Storage, BigQuery, and Cloud SQL. Demonstrates understanding of cloud infrastructure, deployment, and management on GCP.",
    pdfUrl: "/certificates/google-cloud-fundamentals.pdf",
    date: "March 2023",
    skills: ["Google Cloud", "GCP", "Cloud Computing", "Infrastructure"]
  },
  {
    id: 7,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB",
    logo: "/certificates/mongodb-logo.svg",
    description: "Official MongoDB certification validating expertise in MongoDB database design, queries, aggregation framework, indexing strategies, and performance tuning. Covers best practices for building scalable applications with MongoDB.",
    pdfUrl: "/certificates/mongodb-developer.pdf",
    date: "December 2022",
    skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation", "Indexing"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Senior Engineering Manager",
    organization: "Healthcare Innovations Inc.",
    testimonial: "Lokesh's technical leadership transformed our healthcare platform from the ground up. His expertise in React Native and Node.js, combined with his architectural vision, enabled us to scale from 100 to 1000+ users seamlessly. His mentorship elevated our entire team's capabilities. A true asset to any organization.",
    relationship: "Former Manager",
    photo: "/testimonials/sarah-johnson.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Chief Technology Officer",
    organization: "FinTech Solutions Corp",
    testimonial: "Working with Lokesh on our DeFi platform was exceptional. His deep understanding of blockchain technology, smart contracts, and Web3 ecosystem, paired with his ability to deliver production-grade code, was instrumental in our success. He consistently exceeded expectations and brought innovative solutions to complex problems.",
    relationship: "Client",
    photo: "/testimonials/michael-chen.jpg"
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "Product Lead",
    organization: "MedTech Startup",
    testimonial: "Lokesh brings rare combination of technical excellence and business acumen. During our AI healthcare platform development, he not only architected scalable solutions but also contributed strategic insights that shaped our product direction. His proactive communication and problem-solving abilities make him an invaluable collaborator.",
    relationship: "Colleague",
    photo: "/testimonials/priya-sharma.jpg"
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Lead Full Stack Developer",
    organization: "Enterprise Solutions Ltd.",
    testimonial: "I had the pleasure of working alongside Lokesh on multiple enterprise projects. His code quality is exceptional, his architectural decisions are sound, and his ability to mentor junior developers is outstanding. He creates maintainable, scalable systems and elevates everyone around him through his collaborative approach.",
    relationship: "Colleague",
    photo: "/testimonials/david-rodriguez.jpg"
  },
  {
    id: 5,
    name: "Emily Watson",
    position: "VP of Engineering",
    organization: "Telefy Technologies",
    testimonial: "Lokesh was pivotal in building our multi-chain DeFi platform. His full-stack expertise spanning React, Solidity, and Node.js allowed him to own critical features end-to-end. What impressed me most was his ability to balance rapid iteration with code quality, ensuring we shipped fast without compromising our technical foundation.",
    relationship: "Former Supervisor",
    photo: "/testimonials/emily-watson.jpg"
  }
];
