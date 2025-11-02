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
  linkedinUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Solutions Architect - Fundamentals",
    issuer: "AWS",
    logo: "/assets/images/certificate-logo/aws-cert-logo.jpeg",
    description:
      "This comprehensive course covers the fundamentals of building IT infrastructure on AWS, teaching solutions architects and developers how to identify services and features to build resilient, secure, and highly available solutions on the AWS Cloud. The course emphasizes best practices using the AWS Well-Architected Framework and guides learners through designing optimal IT solutions based on real-life scenarios.",
    pdfUrl:
      "/assets/images/certificates/AWS Solutions Architect - Fundamentals of Architecting on AWS.pdf",
    date: "October 2025",
    skills: [
      "AWS Well-Architected Framework",
      "VPC Architecture",
      "EC2 & Lambda",
      "S3 & EBS",
      "RDS & DynamoDB",
      "CloudWatch & CloudFormation",
      "Disaster Recovery",
    ],
  },
  {
    id: 2,
    title: "Getting Started with DevOps on AWS",
    issuer: "AWS",
    logo: "/assets/images/certificate-logo/aws-cert-logo.jpeg",
    description:
      "This course provides an overview of the cultural philosophies, practices, and tools recommended to build cloud-native DevOps skills. The course uses discussions, interactive content, and demonstrations to teach about culture, practices, and tools used in a DevOps environment, including CI/CD, microservices, and infrastructure as code on AWS.",
    pdfUrl:
      "/assets/images/certificates/Getting Started with DevOps on AWS.pdf",
    date: "October 2025",
    skills: [
      "DevOps Culture",
      "CI/CD Pipelines",
      "AWS CodePipeline",
      "Microservices Architecture",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Secure Deployment",
    ],
  },
  {
    id: 3,
    title: "Advanced Testing Practices Using AWS DevOps Tools",
    issuer: "AWS",
    logo: "/assets/images/certificate-logo/aws-cert-logo.jpeg",
    description:
      "This course demonstrates how to integrate testing and security into continuous integration (CI), continuous delivery (CD), and continuous deployment pipelines. The course teaches how to implement advanced testing practices in various phases of the application lifecycle to deliver application updates in a safer and more reliable manner using AWS DevOps tools.",
    pdfUrl:
      "/assets/images/certificates/Advanced Testing Practices Using AWS DevOps Tools.pdf",
    date: "October 2025",
    skills: [
      "CI/CD Pipelines",
      "Test Driven Development",
      "Unit Testing",
      "Load Testing",
      "Amazon CodeGuru",
      "Static Code Analysis",
      "AWS Lambda Testing",
    ],
  },
  {
    id: 4,
    title: "AWS Cloud Computing Essentials",
    issuer: "AWS",
    logo: "/assets/images/certificate-logo/aws-cert-logo.jpeg",
    description:
      "This interactive AI-powered learning experience provides a comprehensive introduction to AWS cloud concepts and services through 12 solution-building simulations. Learners engage with generative AI-powered virtual customers to understand business needs, design AWS solutions, and then build those solutions in a guided lab within a live AWS Console environment.",
    pdfUrl:
      "/assets/images/certificates/AWS SimuLearn - Cloud Computing Essentials.pdf",
    date: "October 2025",
    skills: [
      "AWS Cloud Fundamentals",
      "EC2, S3, VPC",
      "Solution Design",
      "Security Best Practices",
      "AWS Billing & Pricing",
      "Cost Optimization",
      "Customer Communication",
    ],
  },
  {
    id: 5,
    title: "AWS Databases in Practice",
    issuer: "AWS",
    logo: "/assets/images/certificate-logo/aws-cert-logo.jpeg",
    description:
      "This hands-on, AI-powered simulation course focuses on designing and implementing AWS database solutions, with emphasis on Amazon RDS. Learners engage in life-like conversations with AI-powered virtual customers to gather requirements, design database solutions, and then build and validate those solutions in a live AWS Console environment.",
    pdfUrl:
      "/assets/images/certificates/AWS SimuLearn - Databases in Practice.pdf",
    date: "October 2025",
    skills: [
      "Amazon RDS",
      "Relational Databases",
      "Database Security",
      "Backup & Recovery",
      "Performance Tuning",
      "Scalability Design",
      "Requirement Analysis",
    ],
  },
  {
    id: 6,
    title: "Amazon DevOps Guru Getting Started",
    issuer: "AWS",
    logo: "/assets/images/certificate-logo/aws-cert-logo.jpeg",
    description:
      "This course teaches the benefits and technical concepts of Amazon DevOps Guru through presentations and demonstrations. The course shows how to start using DevOps Guru through the AWS Management Console and AWS CLI to help improve application performance and availability using machine learning.",
    pdfUrl:
      "/assets/images/certificates/Amazon DevOps Guru Getting Started.pdf",
    date: "October 2025",
    skills: [
      "Machine Learning Operations",
      "AWS IAM",
      "CloudWatch Integration",
      "Anomaly Detection",
      "AWS Management Console",
      "AWS CLI",
      "Performance Monitoring",
    ],
  },
  {
    id: 7,
    title: "Node.js (Intermediate) Skills Certification",
    issuer: "HackerRank",
    logo: "/assets/images/certificate-logo/hackerrank-cert-log.jpeg",
    description:
      "This certification validates intermediate-level Node.js development skills with a focus on building and managing web applications using the Express.js framework. The assessment tests the ability to understand Event-Driven Architecture and Concurrency concepts, which are core to Node.js performance. It evaluates competency in creating servers, implementing routing, utilizing middleware, designing RESTful APIs, and handling errors effectively.",
    pdfUrl:
      "/assets/images/certificates/HackerRank nodejs_intermediate certificate.pdf",
    date: "October 2025",
    skills: [
      "Event-Driven Architecture",
      "Concurrency",
      "Express.js",
      "RESTful API Design",
      "Middleware",
      "Routing",
      "Error Handling",
    ],
  },
  {
    id: 8,
    title: "Problem Solving (Basic) Skills Certification",
    issuer: "HackerRank",
    logo: "/assets/images/certificate-logo/hackerrank-cert-log.jpeg",
    description:
      "This certification validates fundamental programming and problem-solving abilities using data structures and algorithms. The assessment covers foundational topics including arrays, strings, sorting algorithms, and searching techniques. It tests the ability to traverse data structures, manipulate array elements and string characters, and implement sorting algorithms.",
    pdfUrl:
      "/assets/images/certificates/HackerRank problem_solving_basic certificate.pdf",
    date: "October 2025",
    skills: [
      "Arrays",
      "Strings",
      "Sorting Algorithms",
      "Searching Algorithms",
      "Data Structure Traversal",
      "Algorithm Implementation",
      "Problem Solving",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Srini Selvaraj",
    position: "Director of Product Management",
    organization: "PayPal",
    testimonial:
      "Lokesh is one of the most honest and committed professional. He's been leading our healthcare platform from architecture to deployment on AWS and always staying updated with the current trends in technologies. We faced a major client customization with limited resources, he quickly trained interns and freelancers, divided the work smartly and got it delivered on time. His leadership skills truly stand out.",
    relationship: "Chief Advisor",
    photo: "/testimonials/srini-selvaraj.jpg",
    linkedinUrl: "https://www.linkedin.com/in/srini-selvaraj-06195811",
  },
  {
    id: 2,
    name: "Dr. Raj Rajendran",
    position: "Founder and CEO",
    organization: "Rungila Neuro Adaptive Learning Pvt Ltd",
    testimonial:
      "Working with Lokesh on the Rungila assessment platform was a great experience. I shared my idea for a system where questions load instantly, and he came up with the smart solution of using an in-memory database to make it happen. Later, when we had to handle 2000 students taking the test at the same time for a Sikkim government project, he simulated load testing and scaled the server perfectly. The entire session ran smoothly, and I was really impressed with his technical and practical approach",
    relationship: "Client",
    photo: "/testimonials/rajendr.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rajendr",
  },
  {
    id: 3,
    name: "Mr. Barath Kumar",
    position: "Automation Architect",
    organization: "Leidos",
    testimonial:
      "When Lokesh joined the Telefy, he was new to blockchain and FinTech, but I really impressed by how fast he picked things up. He quickly understood the requirements and delivered exactly what we needed. He handled the entire development end to end, especially the smart contracts part with great ownership. Working with him was smooth and reliable.",
    relationship: "Client",
    photo: "/testimonials/barath-kumar-raghunathan-847820a3.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/barath-kumar-raghunathan-847820a3",
  },
  {
    id: 4,
    name: "Mr. Narayanan Srinivasan",
    position: "Chief Technology Officer",
    organization: "Tevatel",
    testimonial:
      "Lokesh is one of the most dependable developers I worked with at Tevatel. He understood client needs really well and always made my job easier by quickly analyzing and fixing issues, even during late-night production incidents. I could always rely on him to handle urgent situations calmly.",
    relationship: "Former Director",
    photo: "/testimonials/narayanan-srinivasan-36b30211b.jpg",
    linkedinUrl: "https://www.linkedin.com/in/narayanan-srinivasan-36b30211b",
  },
  {
    id: 5,
    name: "Ms. Subhiksha Parthasarathi",
    position: "Associate Product Manager",
    organization: "Mazoapps",
    testimonial:
      "I remember Lokesh testing a new concept over a week, then walking us through the results like a story of what worked, what didn’t and why. It helped us decide confidently, and the handoff to the rest of the teams was seamless. Also a friendly human being.",
    relationship: "Colleague",
    photo: "/testimonials/subhiksha-parthasarathi-9b60311a5.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/subhiksha-parthasarathi-9b60311a5",
  },
  {
    id: 6,
    name: "Mr. Sathish Kumar",
    position: "Senior Software Developer",
    organization: "Unitch Pvt Ltd",
    testimonial:
      "I remember Lokesh testing a new concept over a week, then walking us through the results like a story of what worked, what didn't and why. It helped us decide confidently, and the handoff to the rest of the teams was seamless. Also a friendly human being.",
    relationship: "Colleague",
    photo: "/testimonials/sathish-kumar-7173a6113.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sathish-kumar-7173a6113",
  },
];
