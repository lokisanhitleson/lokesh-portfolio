export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  role: string;
  duration: string;
  teamSize: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
    other: string[];
  };
  problem: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  screenshots: {
    url: string;
    caption: string;
  }[];
  videoUrl?: string;
  github?: string;
  demo?: string;
  logo: string;
  banner: string;
  bannerBackground: "light" | "dark";
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "sevily",
    title: "Sevily",
    tagline: "Bridging Family/Friends Through the Smart Monitoring",
    shortDescription:
      "B2C platform for pairing caretakers and loved ones with health reminders and data sharing",
    description:
      "Sevily is an innovative mobile healthcare application that bridges the gap between caretakers and their loved ones through intelligent health monitoring and reminder management. Built with a unique bidirectional relationship model, users can simultaneously serve as both caretakers and loved ones, creating a comprehensive family health network. The platform features voice recorded smart reminders, automated health data synchronization from wearables, and timezone-aware scheduling to accommodate geographically distributed families.",
    role: "Planning, Research, Full Stack Development, Deployment, Leadership & Mentoring",
    duration: "4 months",
    teamSize: "3 developers",
    technologies: {
      frontend: ["React Native", "TypeScript"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB", "Redis"],
      devops: ["AWS EC2", "AWS S3", "PM2", "CI/CD Pipeline", "Ubuntu"],
      other: [
        "HealthConnect API (Android)",
        "HealthKit API (iOS)",
        "OAuth 2.0",
        "Razorpay",
        "Paypal",
        "Call simulation",
        "FCM",
      ],
    },
    problem:
      "Adult children living away from their elderly parents struggle to monitor their health and ensure medication adherence. Existing solutions lacked bidirectional care relationships, timezone-aware reminders, and seamless health data integration from native platforms. Families needed a simple yet comprehensive tool that works across different locations and time zones, with minimal friction for elderly users who may not be tech-savvy.",
    solution:
      "Developed a React Native mobile application with a sophisticated role-based system where users can be both caretakers and loved ones simultaneously. Implemented OAuth authentication (Google, Apple) for easy onboarding, complemented by traditional email/phone registration. Built an automated health data synchronization engine that syncs data from HealthConnect (Android) and HealthKit (iOS) in realtime. Created a voice recorded personalized health reminders with intelligent alarm type notifications. Designed a care relationship request system similar to social connections but focused on health monitoring permissions.",
    keyFeatures: [
      "Bidirectional care relationships - be a caretaker and loved one simultaneously",
      "Care relationship requests with permission-based access control",
      "Voice recorded health reminders with personal touch",
      "Intelligent alarm triggering and push notification delivery",
      "Automated health data realtime sync from HealthConnect/HealthKit",
      "Timezone aware reminder scheduling for distributed families",
      "Multi authentication support: Google, Apple, Email, Phone",
      "Realtime health metrics monitoring dashboard",
      "Emergency contact alerts for critical health events",
    ],
    results: [],
    metrics: [
      { label: "Family Networks", value: "800+" },
      { label: "Reminder Completion", value: "92%" },
      { label: "App Store Rating", value: "4.6/5" },
      { label: "Missed Dose Reduction", value: "65%" },
    ],
    screenshots: [
      {
        url: "/assets/images/projects/sevily/caretaker homescreen.png",
        caption: "Caretaker Homescreen",
      },
      {
        url: "/assets/images/projects/sevily/LovedOneProfile.png",
        caption: "Caretaker accessing Loved One Profile",
      },
      {
        url: "/assets/images/projects/sevily/LovedOne homescreen.png",
        caption: "Loved One Homescreen",
      },
      {
        url: "/assets/images/projects/sevily/Health data.png",
        caption: "Loved One Health Metrics View",
      },
    ],
    logo: "/assets/images/projects/sevily/sevily-square.jpeg",
    banner: "/assets/images/projects/sevily/sevily rect.jpeg",
    bannerBackground: "light",
    demo: "https://sevily.com",
  },
  {
    id: 2,
    slug: "mazoapps-health",
    title: "Mazoapps Health",
    tagline: "AI-Powered Healthcare Management for Modern Facilities",
    shortDescription:
      "AI-integrated healthcare SaaS for healthcare services management and patient engagement",
    description:
      "Mazoapps Health is an advanced healthcare solution that integrates cutting edge AI technology with comprehensive health record management and appointment scheduling. The platform leverages OpenAI and Llama APIs to provide intelligent chatbot assistance, helping healthcare facilities streamline operations and improve patient engagement.",
    role: "Planning, Research, Full Stack Development, Deployment, Leadership & Mentoring",
    duration: "2 Years (Ongoing)",
    teamSize: "4 developers",
    technologies: {
      frontend: ["Angular 14", "Ionic 6", "TypeScript"],
      backend: ["Node.js", "Express", "Socket.io"],
      database: ["MySQL", "Redis"],
      devops: ["AWS EC2", "AWS S3", "Nginx", "PM2", "Ubuntu"],
      other: [
        "OpenAI API",
        "Llama API",
        "Twilio",
        "SendGrid",
        "Razorpay API",
        "Zoom API",
        "Google Calendar/Meet API",
      ],
    },
    problem:
      "Healthcare facilities struggled with appointment management, patient records organization, and patient engagement through modern communication channels. Staff spent excessive time on routine inquiries, leading to reduced focus on critical patient care. There was no unified system to handle appointments, records, and patient communication in a white-labelling model",
    solution:
      "Developed an AI enhanced healthcare platform with intelligent chatbots powered by OpenAI that handle medical suggestions to doctors and patient inquiries. Implemented centralized health records management with role-based access control, seamless appointment scheduling with automated reminders, and real-time analytics dashboard for healthcare administrators.",
    keyFeatures: [
      "AI-powered assistant for doctors to understand patients better",
      "Comprehensive appointment scheduling system with calendar sync",
      "Centralized health records management with search capabilities",
      "Multi-facility support with white-label customization",
      "Automated SMS and email reminders using Twilio & SendGrid",
      "Real-time analytics dashboard for administrators",
      "Patient portal for self-service appointment booking",
      "Integration with social media and third party health services",
      "Mobile app for iOS and Android",
    ],
    results: [
      "Onboarded 4 healthcare facilities across multiple regions",
      "Managing 9K+ patient appointments monthly",
      "AI assistant successfully reduced 40% of doctor workload",
      "Reduced administrative record management workload by 60%",
      "Got best ratings from our healthcare clients",
    ],
    metrics: [
      { label: "Clients Onboarded", value: "4" },
      { label: "Monthly Appointments", value: "50K+" },
      { label: "AI Query Resolution", value: "80%" },
      { label: "Provider Rating", value: "5.0/5" },
    ],
    screenshots: [
      {
        url: "/projects/mazoapps/screenshot-1.jpg",
        caption: "AI Chatbot Interface",
      },
      {
        url: "/projects/mazoapps/screenshot-2.jpg",
        caption: "Appointment Dashboard",
      },
      {
        url: "/projects/mazoapps/screenshot-3.jpg",
        caption: "Patient Records View",
      },
      {
        url: "/projects/mazoapps/screenshot-4.jpg",
        caption: "Analytics Dashboard",
      },
    ],
    logo: "/assets/images/projects/mazoapps/mazoapps-logo square.png",
    banner: "/assets/images/projects/mazoapps/mazoapps-health Logo rect.png",
    bannerBackground: "light",
    demo: "https://mazoapps.com",
  },
  {
    id: 3,
    slug: "telefy",
    title: "Telefy",
    tagline: "World's First Credit Score-Oriented Multi-Chain DeFi Platform",
    shortDescription: "DeFi multi-chain platform with DEX and lending services",
    description:
      "Telefy is a revolutionary decentralized finance platform that introduces the world's first credit score system for crypto wallets. Supporting multiple blockchain networks, Telefy offers DEX functionality, lending protocols, NFT marketplace, and LaunchPad services. The platform's unique Tele-Score determines wallet creditworthiness and provides personalized interest rates based on holdings and transaction history.",
    role: "Planning, Research, Full Stack Development, Deployment",
    duration: "6 months",
    teamSize: "2 developers",
    technologies: {
      frontend: ["React 18", "Web3.js", "Ethers.js", "Redux Toolkit"],
      backend: ["Node.js", "Express", "TheGraph API", "Solidity"],
      database: ["Blockchain", "Smart Contracts"],
      devops: ["AWS EC2", "AWS S3", "Docker", "Nginx", "CentOS"],
      other: ["Ethereum", "MetaMask", "WalletConnect"],
    },
    problem:
      "DeFi users needed a unified interface to access multiple DeFi protocols across different blockchain networks with low transaction costs. Existing platforms lacked credit scoring mechanisms, leading to uniform interest rates regardless of user trustworthiness. Users struggled with fragmented experiences across different chains and protocols.",
    solution:
      "Engineered a multi-chain DeFi platform with custom smart contracts supporting Ethereum, Binance Smart Chain, Polygon, and other networks. Implemented the innovative Tele-Score algorithm that analyzes wallet holdings and transaction patterns to determine creditworthiness. Built automated market maker (AMM) for token swapping, lending protocols with dynamic interest rates, and an NFT marketplace with low fees (0.27%).",
    keyFeatures: [
      "Tele-Score: Credit scoring system for crypto wallets",
      "Multi-chain support (Ethereum, BSC, Polygon, Solana, Cardano)",
      "Tele Swap: AMM-based DEX for token swapping",
      "Tele Lend: Automated lending protocol with credit-based rates",
      "Tele NFT: Multi-chain NFT marketplace with 0.27% fees",
      "Tele PAD: LaunchPad for Initial DEX Offerings (IDOs)",
      "TELE token staking with rewards distribution",
      "Cross-chain bridge for seamless asset transfers",
      "Real-time portfolio tracking and analytics",
    ],
    results: [
      "Attracted 5000+ daily active users initially across all chains",
      "Supported 100+ token pairs with deep liquidity",
      "Smart contracts audited with zero critical vulnerabilities",
    ],
    metrics: [
      { label: "Total Value Locked", value: "$5M+" },
      { label: "Daily Active Users", value: "5K+" },
      { label: "Token Pairs", value: "100+" },
      { label: "Transaction Speed", value: "<1s" },
    ],
    screenshots: [],
    videoUrl: "https://www.youtube.com/embed/_XHNBvyL9zg",
    logo: "/assets/images/projects/telefy/telefy-square.png",
    banner: "/assets/images/projects/telefy/telefy logo rect.png",
    bannerBackground: "dark",
    github: "https://github.com/telefy",
  },
  {
    id: 4,
    slug: "bocxy",
    title: "Bocxy",
    tagline: "Complete Business Management for Salons & Spas",
    shortDescription: "SaaS platform for salon and spa service management",
    description:
      "Bocxy is a comprehensive business management solution designed specifically for salons and spas. The platform streamlines operations with features including appointment scheduling, staff management, inventory tracking, and customer communication. With an intuitive interface and powerful backend, Bocxy helps beauty businesses focus on what they do best - making clients look and feel great.",
    role: "Planning, Full Stack Development, Deployment, Leadership & Mentoring",
    duration: "10 months",
    teamSize: "3 developers",
    technologies: {
      frontend: ["Angular 10", "Ionic 5", "TypeScript", "Angular Material"],
      backend: ["Node.js", "Express", "JWT"],
      database: ["MySQL"],
      devops: ["AWS EC2", "Apache", "PM2", "Ubuntu"],
      other: ["Twilio", "Razorpay", "Calendar API", "Push Notifications"],
    },
    problem:
      "Salon and spa businesses needed an affordable, easy-to-use platform to manage appointments, staff schedules, and customer relationships. Many were still using paper-based systems or fragmented digital tools. High no-show rates and poor communication led to revenue loss. Small to medium-sized businesses couldn't afford enterprise-level solutions.",
    solution:
      "Created a comprehensive SaaS platform with an intuitive booking system accessible via mobile apps. Implemented intelligent staff scheduling with availability management and assignment. Built automated reminder system using Twilio and push notifications that reduced no-shows drastically. Integrated Razorpay for seamless payment processing and developed a customer loyalty program with rewards tracking.",
    keyFeatures: [
      "Online booking system with real-time availability",
      "Staff management with schedule optimization",
      "Automated SMS and notifications appointment reminders",
      "Inventory tracking for products and supplies",
      "Point-of-sale (POS) integration with Razorpay",
      "Customer loyalty program with rewards",
      "Multi-location support for franchise businesses",
      "Analytics dashboard with revenue insights",
      "Mobile apps for iOS and Android",
    ],
    results: [
      "Onboarded 40+ active salon and spa merchant locations",
      "Achieved 5 star rating on app stores",
      "Increased merchant revenue by 20% through better scheduling",
      "Clients include top brands Toni & Guy and McKingstown.",
    ],
    metrics: [
      { label: "Active Merchants", value: "40+" },
      { label: "Monthly Bookings", value: "100K+" },
      { label: "App Rating", value: "5/5" },
      { label: "No-Show Reduction", value: "35%" },
    ],
    screenshots: [
      {
        url: "/assets/images/projects/bocxy/bocxy - merchant.webp",
        caption: "Merchant Dashboard",
      },
      {
        url: "/assets/images/projects/bocxy/bocxy merchant 2.webp",
        caption: "Merchant service management",
      },
      {
        url: "/assets/images/projects/bocxy/bocxy customer 1.webp",
        caption: "Customer Homescreen",
      },
      {
        url: "/assets/images/projects/bocxy/bocxy customer 2.webp",
        caption: "Customer service booking",
      },
    ],
    videoUrl: "/assets/videos/salon-demo.mp4",
    logo: "/assets/images/projects/bocxy/bocxy logo square.webp",
    banner: "/assets/images/projects/bocxy/bocxy-Logo rect.jpeg",
    bannerBackground: "light",
    demo: "https://bocxy.com",
  },
  {
    id: 5,
    slug: "rungila",
    title: "Rungila",
    tagline: "Neuro Adaptive Learning for Career Success",
    shortDescription: "Online career guidance platform with smart assessments",
    description:
      "Rungila is an innovative educational technology platform that leverages neuro adaptive learning technology to provide personalized career guidance and assessments. The platform helps students identify their natural talents and matches them with 300+ career options. Educational institutions use Rungila to gain data driven insights into student aptitudes and career interests, enabling better counseling and program planning.",
    role: "Planning, Research, Full Stack Development and Deployment",
    duration: "16 months",
    teamSize: "2 developers",
    technologies: {
      frontend: ["Angular 8", "TypeScript", "Ng Bootstrap"],
      backend: ["Node.js", "Express"],
      database: ["MySQL", "MongoDB", "Redis"],
      devops: ["AWS", "Jenkins", "Apache", "Ubuntu"],
      other: ["SMS API", "Razorpay"],
    },
    problem:
      "Students lacked access to proper career guidance tools and data driven assessments to make informed decisions about their future. Educational institutions had no systematic way to track student aptitudes and provide personalized recommendations. Traditional career counseling was time-consuming, expensive, and not scalable. Generic career tests didn't consider individual learning patterns and cognitive strengths. Also there was no enterprise solution for schools and colleges to manage student assessments and analytics.",
    solution:
      "Built a comprehensive career guidance platform with AI-powered assessments that use neuro adaptive learning algorithms to identify individual talents and strengths. Developed a sophisticated recommendation algorithms that matches students with suitable careers from a database of 300+ options. Created institutional analytics dashboard providing insights into student cohorts. Implemented personalized learning paths that adapt based on student responses and performance.",
    keyFeatures: [
      "Neuro adaptive assessment algorithms for talent identification",
      "300+ personalized career recommendations",
      "Comprehensive Career Planning tools",
      "Institutional dashboard for schools and colleges",
      "Student can self register and take assessments online",
      "Detailed career path information with insights",
      "Skills gap analysis and learning recommendations",
      "Parent and counselor access portals",
    ],
    results: [
      "Partnered with 10+ educational institutions nationwide",
      "Served 50,000+ student users with career assessments",
      "Achieved 90% assessment completion rate",
      "Platform recognized by Indian Government education authorities for innovation",
    ],
    metrics: [
      { label: "Partner Institutions", value: "10+" },
      { label: "Student Users", value: "50K+" },
      { label: "Completion Rate", value: "90%" },
      { label: "Accuracy", value: "85%" },
    ],
    screenshots: [
      {
        url: "/assets/images/projects/rungila/institution dashboard.png",
        caption: "Institution Dashboard",
      },
      {
        url: "/assets/images/projects/rungila/student dashboard.png",
        caption: "Student Dashboard",
      },
      {
        url: "/assets/images/projects/rungila/CAREER interests.png",
        caption: "Career Interests Assessment",
      },
      {
        url: "/assets/images/projects/rungila/primary schol.png",
        caption: "Assessment for Primary Schoolers",
      },
    ],
    logo: "/assets/images/projects/rungila/logo square.png",
    banner: "/assets/images/projects/rungila/rungila-Logo rect.png",
    bannerBackground: "dark",
    demo: "https://www.rungila.com",
  },
  {
    id: 6,
    slug: "milereach",
    title: "MileReach",
    tagline: "Last-Mile Delivery Excellence for Modern Logistics",
    shortDescription:
      "Logistics platform with order tracking and delivery optimization",
    description:
      "MileReach is a sophisticated logistics management system specializing in last-mile and intra-city delivery services. Founded in 2016 and based in Chennai, the platform enables order tracking, automated delivery assignment, and route optimization. MileReach has become a household name for intracity delivery in Chennai, particularly in pharmaceutical and grocery segments, serving major clients through a robust network of bikers and mini trucks.",
    role: "Planning, Backend Development, Mentoring & Deployment",
    duration: "4 months",
    teamSize: "2 developers",
    technologies: {
      frontend: ["Angular", "TypeScript"],
      backend: ["Node.js", "Hapi.js", "Socket.io"],
      database: ["MySQL", "Redis"],
      devops: ["AWS", "Apache", "PM2", "Ubuntu"],
      other: ["Barcode Generation", "Google Maps API"],
    },
    problem:
      "MileReach wants to build their own platform for intelligent delivery assignment, and route optimization to reduce delivery times and costs. Manual dispatch systems led to inefficiencies and poor resource utilization. Customers had no visibility into delivery status. Pharmaceutical deliveries required special handling and tracking.",
    solution:
      "Architected a scalable personalised platform with smart routing algorithms that optimize delivery routes based on delivery urgency, and vehicle capacity. Implemented real-time GPS tracking with socket-based updates for live location monitoring. Built automated dispatch system that assigns deliveries based on proximity, vehicle type, and driver availability. Developed client API integration allowing businesses to track shipments programmatically with barcode scanning capabilities.",
    keyFeatures: [
      "Real-time GPS tracking for all deliveries",
      "Intelligent route optimization algorithms",
      "Automated delivery assignment system",
      "Barcode generation and scanning",
      "Client API for software integration",
      "Multi-vehicle type support (bikes, mini trucks)",
      "Driver mobile app for delivery management",
      "Proof of delivery with digital signatures",
      "Analytics dashboard with performance metrics",
    ],
    results: [
      "Achieved 20% reduction in average delivery times",
      "Reduced operational costs by 25% through route optimization",
      "Handled 5,000+ daily deliveries at peak capacity",
    ],
    metrics: [
      { label: "Logistics Companies", value: "50+" },
      { label: "Deliveries Tracked", value: "10M+" },
      { label: "Time Reduction", value: "20%" },
      { label: "Tracking Accuracy", value: "99.5%" },
    ],
    screenshots: [
      {
        url: "/projects/milereach/screenshot-1.jpg",
        caption: "Live Tracking Dashboard",
      },
      {
        url: "/projects/milereach/screenshot-2.jpg",
        caption: "Route Optimization",
      },
      { url: "/projects/milereach/screenshot-3.jpg", caption: "Driver App" },
      {
        url: "/projects/milereach/screenshot-4.jpg",
        caption: "Analytics Overview",
      },
    ],
    logo: "/assets/images/projects/milereach/milereach_logo square.jpeg",
    banner: "/assets/images/projects/milereach/milereach logo rect.png",
    bannerBackground: "dark",
  },
  {
    id: 7,
    slug: "aster-dialer",
    title: "Aster Dialer",
    tagline: "Enterprise VoIP Call Center Solution Built on Asterisk",
    shortDescription:
      "Call center solution based on Digium Asterisk for managing calls and reports",
    description:
      "Aster Dialer is a comprehensive VoIP call center solution built on the robust Digium Asterisk platform. Developed for Tevatel, a leading Asterisk solution provider in Chennai, this system enables call centers to manage both inbound and outbound calling campaigns with advanced features including predictive dialing, call recording, realtime monitoring, and detailed analytics. The platform provides seamless CRM integration and supports distributed server architecture for high volume operations.",
    role: "Full Stack Development",
    duration: "12 months",
    teamSize: "3 developers",
    technologies: {
      frontend: ["Bootstrap", "HTML5", "CSS3", "JavaScript", "jQuery"],
      backend: ["PHP", "CodeIgniter Framework"],
      database: ["MySQL"],
      devops: ["CentOS", "Apache", "Asterisk PBX"],
      other: [
        "Digium Asterisk",
        "SIP Protocol",
        "VoIP",
        "AMI (Asterisk Manager Interface)",
        "AGI Scripts",
      ],
    },
    problem:
      "Call centers needed an affordable, feature rich solution to manage high volume calling operations with predictive dialing capabilities. Existing commercial solutions were expensive and lacked customization options. Organizations required real time call monitoring, detailed reporting, and seamless integration with their existing CRM systems. Small to medium sized businesses couldn't afford enterprise-level call center platforms.",
    solution:
      "Developed a full featured call center solution leveraging the open source Asterisk platform with custom dialplan scripts and AMI integration. Built a comprehensive web based interface using CodeIgniter that provides realtime call monitoring, campaign management, and agent performance tracking. Implemented predictive dialer algorithms to maximize agent productivity by automatically dialing multiple numbers and connecting answered calls to available agents. Created detailed reporting modules with exportable call logs, agent statistics, and campaign analytics.",
    keyFeatures: [
      "Predictive dialer for automated outbound calling campaigns",
      "Realtime call monitoring and whisper/barge-in capabilities",
      "Interactive Voice Response (IVR) system builder",
      "Automatic Call Distribution (ACD) for inbound calls",
      "Call recording with playback and download functionality",
      "Multi campaign management with scheduling",
      "Agent performance dashboard with realtime metrics",
      "CRM integration capabilities via APIs",
      "Detailed analytics and reporting with exports",
      "Lead management with callback scheduling",
      "SIP trunk integration for cost effective calling",
    ],
    results: [
      "Successfully deployed across 50+ call centers in India",
      "Increased agent productivity by 40% through predictive dialing",
      "Achieved 99.2% system uptime with load-balanced architecture",
      "Improved customer satisfaction with reduced wait times",
    ],
    metrics: [
      { label: "Call Centers", value: "50+" },
      { label: "Daily Calls", value: "100K+" },
      { label: "Productivity Gain", value: "40%" },
      { label: "Cost Reduction", value: "60%" },
    ],
    screenshots: [
      {
        url: "/projects/aster-dialer/screenshot-1.jpg",
        caption: "Agent Dashboard",
      },
      {
        url: "/projects/aster-dialer/screenshot-2.jpg",
        caption: "Campaign Management",
      },
      {
        url: "/projects/aster-dialer/screenshot-3.jpg",
        caption: "Real-time Monitoring",
      },
      {
        url: "/projects/aster-dialer/screenshot-4.jpg",
        caption: "Analytics & Reports",
      },
    ],
    logo: "/assets/images/projects/aster-dialer/aster dialer square.png",
    banner: "/assets/images/projects/aster-dialer/aster dialer rect.jpeg",
    bannerBackground: "light",
    demo: "https://tevatel.com",
  },
];
