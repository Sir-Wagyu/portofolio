export const personalInfo = {
   name: "Wahyu Nur Hidayadi",
   title: "Frontend Web Developer",
   location: "Kuta Selatan, Badung, Bali",
   email: "whyuunur@gmail.com",
   github: "https://github.com/Sir-Wagyu",
   linkedin: "https://www.linkedin.com/in/wahyunurh/",
   summary:
      "I am an Information Technology student with a deep interest in the world of technology, particularly in areas such as web development, UI/UX design, and digital creativity. I enjoy exploring how technology can solve real-world problems, whether through writing clean and efficient code, designing user-friendly interfaces, or creating visual content that enhances user experience",
   summary2:
      "Throughout my journey in IT, I have focused on developing both technical and creative skills by working on various projects that involve programming, design, and team collaboration. These experiences have helped me become more adaptable, communicative, and eager to explore new tools and technologies across different areas of tech. I believe that learning by doing, combined with strong teamwork, is the key to growing as a well-rounded tech enthusiast. I am always excited to take on new challenges and contribute to projects that make a positive impact.",
};

export const skills = {
   frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
   backend: ["PHP", "Laravel", "MySQL"],
   tools: ["Git & GitHub", "Figma", "CodeIgniter"],
   soft: ["Communication", "Problem Solving", "Adaptability", "Time Management", "Creativity", "Leadership"],
};

export const education = [
   {
      institution: "Politeknik Negeri Bali",
      degree: "Information Technology",
      gpa: "GPA 3.77 / 4.00",
      period: "2023 - Present",
      location: "Bali",
   },
   {
      institution: "SMK Negeri 1 Kuta Selatan",
      degree: "Multimedia",
      period: "2020 - 2023",
      location: "Bali",
   },
];

export const projects = [
   {
      id: 1,
      tumbnail: "/images/tumbnails/megamesari.png",
      title: "Digital Reporting System | Megamesari Group",
      category: "Web Application",
      technologies: [
         "React.js",
         "Express.js",
         "TailwindCSS",
         "MySQL"
      ],
      period: "April 2026 - June 2026",
      description: "A Digital Reporting System designed to streamline the recording and tracking of construction projects at PT Megamesari Group.",
      overview: "A comprehensive Digital Reporting System developed to facilitate reporting on contractor activities at PT Megamesari Group. This system was built to streamline the reporting and tracking processes for ongoing construction projects, ensuring efficient management and transparency.",
      features: [
         {
            title: "Dashboard",
            features: [
               "Project Summary: Displays details of active projects (contract value, execution time, remaining time, contractors, and consultants).",
               "Project Switcher: Dropdown to seamlessly switch monitoring between different projects.",
               "S-Curve Chart: Visual comparison between Planned Progress (Target) and Actual Progress based on weekly weights.",
               "Addendum/Version Management: Feature to view and create re-baseline schedule versions in case of time extensions or contract addendums."
            ]
         },
         {
            title: "Daily Progress Management",
            features: []
         },
         {
            title: "BOQ Management",
            features: [
               "Hierarchical Structure: Manages work structures (Main Work ➔ Sub Work ➔ Work Item).",
               "Value & Volume Management: Determines Volume, Unit, Unit Price, and Total Price for each item.",
               "Automated Weight Calculation: Automatically calculates the weight percentage of each work item relative to the total project value.",
               "BOQ Data Import: Supports Excel import using predefined templates to accelerate bulk BOQ data entry."
            ]
         },
         {
            title: "Schedule",
            features: [
               "Weekly Planning: Breaks down project execution time into weekly periods (Week 1, Week 2, etc.).",
               "Work Weight Distribution: Allocates target completion for each BOQ work item per week.",
               "Cumulative Target Calculation: Calculates the cumulative weekly target progress (%) to be visualized on the S-Curve chart."
            ]
         },
         {
            title: "Daily Plan",
            features: [
               "Daily Target Creation: Breaks down weekly targets into day-to-day field activity targets.",
               "Work Item Selection: Selects specific BOQ work items to be executed on particular dates."
            ]
         },
         {
            title: "Daily Progress",
            features: [
               "Actual Volume Input: Allows the field team to input the actual volume of work items completed on that day.",
               "Documentation Management: Feature to attach or upload field work proof photos.",
               "Weather & Obstacle Status: Includes daily records of field weather conditions and technical obstacles."
            ]
         },
         {
            title: "Material, Equipment, and Labor Data Management",
            features: [
               "Material Catalog: List of materials used in the selected project.",
               "Equipment Inventory: List of equipment utilized in the selected project.",
               "Labor/Workforce: Data on subcontractors working on the selected project."
            ]
         },
         {
            title: "Project AHSP (Unit Price Analysis)",
            features: [
               "Coefficient Combination (Recipe): Forms a single Work Unit Price.",
               "Per-Project Customization: Dynamic price analysis customized specifically for individual projects."
            ]
         },
         {
            title: "Project Reports (Daily, Weekly, Monthly)",
            features: [
               "Daily Report: Recaps daily progress (completed volume, field photos, and field conditions).",
               "Weekly & Monthly Reports: Automatic calculation of recapitulations (Volume Up to Last Week, Within This Week, and Up to This Week).",
               "Deviation Calculation: Displays the deviation (difference) between Actual Progress and Planned Progress.",
               "Automated Report Printing (Excel): Export formats that align with internal company templates."
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/megamesari/ss-megamesari1.png",
            caption: "Dashboard Page - Initial view of the system"
         },
         {
            image: "/images/screenshots/megamesari/ss-megamesari2.png",
            caption: "Daily Progress Page - View daily work progress"
         },
         {
            image: "/images/screenshots/megamesari/ss-megamesari3.png",
            caption: "BOQ Page - Manage Bill of Quantities"
         },
         {
            image: "/images/screenshots/megamesari/ss-megamesari4.png",
            caption: "Schedule Page - Manage project work schedules"
         },
         {
            image: "/images/screenshots/megamesari/ss-megamesari5.png",
            caption: "Material Catalog Page - Manage material catalogs"
         },
         {
            image: "/images/screenshots/megamesari/ss-megamesari6.png",
            caption: "AHSP Page - Manage Unit Price Analysis (AHSP)"
         }
      ],
      demo: "https://system.bomborastudio.id/",
      repository: "https://github.com/Sir-Wagyu/megamesarigroup",
      status: "On Going"
   },
   {
      id: 2,
      tumbnail: "/images/tumbnails/balidriver-home.png",
      title: "Tour & Travel Website | Bali Driver",
      category: "Company Profile",
      technologies: [
         "React.js",
         "Tailwind CSS"
      ],
      period: "March 2026 - April 2026",
      description: "Company Profile Website for Tour & Travel services with rental and booking features",
      overview: "Bali Driver is a comprehensive tour and travel website built to showcase the beauty of Bali through professional tour and driver services. The platform serves as a modern digital gateway for tourists to explore and experience Bali with ease, featuring flexible tour packages, car rentals, and an integrated booking system. This application aims to provide a seamless and enjoyable experience for tourists while highlighting the quality and professionalism of the tour services offered.",
      features: [
         {
            title: "Homepage",
            features: [
               "Welcome section with engaging visuals and tourism atmosphere",
               "Highlight of tour packages and available services",
               "Direct booking call-to-action and quick search",
               "Customer testimonials and service highlights"
            ]
         },
         {
            title: "Tour Packages Page",
            features: [
               "List of available tour packages with detailed descriptions",
               "Filter functionality to find suitable packages",
               "Highlight of package inclusions and features",
               "Direct to WhatsApp for booking and inquiry",
               "View detailed information of tour packages"
            ]
         },
         {
            title: "Airport Transfer Service Page",
            features: [
               "Display of airport transfer services with complete information",
               "View detailed information about airport transfer services",
               "Displays inclusive pickup and drop-off information"
            ]
         },
         {
            title: "Gallery Page",
            features: [
               "Visual gallery showcasing beautiful Bali tourism destinations",
               "Categorized photo collection for easy browsing",
               "Highlights of tour experiences and activities"
            ]
         },
         {
            title: "About & Contact Page",
            features: [
               "Complete company information and service overview",
               "Contact section with WhatsApp integration for direct inquiries",
               "FAQ section to answer common customer questions"
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/balidriver/ss-balidriver1.png",
            caption: "Homepage - Initial view of the Bali Driver website"
         },
         {
            image: "/images/screenshots/balidriver/ss-balidriver2.png",
            caption: "Tour Packages Page - List of available tour packages"
         },
         {
            image: "/images/screenshots/balidriver/ss-balidriver3.png",
            caption: "Car Rental Service Page - List of available cars for rent"
         },
         {
            image: "/images/screenshots/balidriver/ss-balidriver4.png",
            caption: "Gallery Page - Visual gallery showcasing Bali tourism destinations"
         }
      ],
      demo: "https://cangguseminyakbalidriver.com/",
      repository: "https://github.com/Sir-Wagyu/baliDriver",
      status: "Completed"
   },
   {
      id: 3,
      tumbnail: "/images/tumbnails/kampungkopicamp.png",
      title: "Accomodation Booking Website | Kampung Kopi Camp",
      category: "Web Application",
      technologies: [
         "Laravel",
         "Livewire",
         "Tailwind CSS",
         "MySQL"
      ],
      period: "October 2025 - February 2026",
      description: "Kampung Kopi Camp is an accommodation booking website built to make it easier for visitors to make online reservations.",
      overview: "Kampung Kopi Camp is an accommodation booking platform designed to facilitate online reservations for its visitors. This project implements various features to assist business owners in managing accommodations, reservations, and available inventory. Furthermore, the website is integrated with the Midtrans payment gateway to streamline online transactions securely and efficiently.",
      features: [
         {
            title: "Web Portal",
            features: [
               "Public website section providing comprehensive information about Kampung Kopi Camp.",
               "Information on available accommodations and facilities.",
               "Information about the surrounding environment in Kampung Kopi Camp that is worth exploring.",
               "Articles featuring the latest news about Kampung Kopi Camp and Pupuan.",
               "Gallery containing photos of activities at Kampung Kopi Camp.",
               "Users are not required to log in to make reservations and pay online."
            ]
         },
         {
            title: "User Dashboard Features",
            features: [
               "Dashboard homepage displaying all available accommodations and facilities.",
               "My Booking Page showing the user's complete booking history.",
               "Rewards page displaying available vouchers that can be claimed during reservation checkout.",
               "Account Page to manage user profiles and find application support information."
            ]
         },
         {
            title: "Admin Features",
            features: [
               "Admin dashboard displaying comprehensive metrics related to accommodation, reservation, inventory, and financial management.",
               "Booking Management feature to view all booking details and payment statuses, including manual booking entry (walk-ins).",
               "Accommodation Management feature to manage data on available accommodations and facilities.",
               "Accommodation Availability Management to set the number of available accommodations at any given time.",
               "Add-on Management feature to manage add-on data.",
               "Voucher Management feature to manage voucher data.",
               "Financial Management feature to oversee available financial data.",
               "User Data Management feature to oversee registered users.",
               "Article Management feature to manage published articles.",
               "Revenue, Booking, Customer, and Financial Reporting features.",
               "Settings Management feature to configure the portal's appearance and the user dashboard."
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/kkc/ss-kkc1.png",
            caption: "Web Portal - Kampung Kopi Camp homepage"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc2.png",
            caption: "Web Portal - List of available accommodations"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc3.png",
            caption: "Web Portal - Information page about Pupuan Village"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc4.png",
            caption: "Web Portal - Articles page featuring activities at Kampung Kopi Camp"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc5.png",
            caption: "User Dashboard - Main user dashboard page"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc6.png",
            caption: "User Dashboard - User booking history page"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc7.png",
            caption: "User Dashboard - Available vouchers page"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc8.png",
            caption: "Admin Dashboard - Main admin dashboard page"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc9.png",
            caption: "Admin Dashboard - Booking management page"
         },
         {
            image: "/images/screenshots/kkc/ss-kkc10.png",
            caption: "Admin Dashboard - Accommodation management page"
         }
      ],
      demo: "https://demo-kampungkopicamp-production.up.railway.app/",
      repository: "https://github.com/Sir-Wagyu/demo-kampungkopicamp",
      status: "Completed"
   },
   {
      id: 4,
      tumbnail: "/images/tumbnails/davillamanagement.png",
      title: "Villa Management Service | DA Villa Management",
      category: "Company Profile",
      technologies: [
         "React.js",
         "Tailwind CSS"
      ],
      period: "August 2025 – September 2025",
      description: "A Company Profile website for a Villa Management Team that oversees villas, hotels, and lodgings spread across Bali.",
      overview: "A Villa Management Team founded by Dina Amelya, who has over 5 years of experience in the hospitality and property industry. This website was built to help promote and provide detailed information about DA Villa Management's services.",
      features: [
         {
            title: "HomePage",
            features: [
               "Hero Section displaying key information about DA Villa Management.",
               "Packages provided by DA Villa Management.",
               "Services offered by DA Villa Management.",
               "About Us Section.",
               "Why Choose Us Section."
            ]
         },
         {
            title: "Service Page",
            features: [
               "List of services categorized by service type."
            ]
         },
         {
            title: "About Page",
            features: [
               "Information about the founder and the company's vision and mission."
            ]
         },
         {
            title: "Gallery Page",
            features: [
               "Visual gallery showcasing villas and lodgings managed by the team."
            ]
         },
         {
            title: "Contact Page",
            features: [
               "Contact information and an integrated inquiry form."
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/davillamanagement/ss-davilla1.png",
            caption: "Home Page - Initial view of the website"
         },
         {
            image: "/images/screenshots/davillamanagement/ss-davilla2.png",
            caption: "Service Page - List of services offered by DA Villa Management"
         },
         {
            image: "/images/screenshots/davillamanagement/ss-davilla3.png",
            caption: "About Page - Information about the founder and offered services"
         },
         {
            image: "/images/screenshots/davillamanagement/ss-davilla4.png",
            caption: "Gallery Page - List of villa and lodging images managed by the team"
         },
         {
            image: "/images/screenshots/davillamanagement/ss-davilla5.png",
            caption: "Contact Page - Contact form and FAQ"
         }
      ],
      demo: "https://davillamanagement.com/",
      repository: "https://github.com/Nyomanpass/villamanajement",
      status: "Completed"
   },
   {
      id: 5,
      tumbnail: "/images/tumbnails/gymyankarta-home.png",
      title: "POS & Member Attendance Record Application | YankartaGYM",
      category: "Web Application",
      technologies: [
         "Laravel",
         "Tailwind CSS",
         "MySQL"
      ],
      period: "Jun 2025 - Jul 2025",
      description: "A web-based gym management system that integrates Point of Sale (POS) for financial transactions and a member attendance system using QR Codes into a single unified platform.",
      overview: "Gym Yankarta is a fitness center in Jimbaran, Bali, that needed a digitized system to manage daily operations. This application is designed to handle two main workflows: member management & attendance, and financial recording (POS). The system aims to replace manual recording, increase admin/cashier efficiency, and provide a better experience for members.",
      features: [
         {
            title: "Admin Features",
            features: [
               "Main Dashboard: Displays key metrics summaries such as active members, pending verifications, and total monthly revenue along with an annual revenue chart",
               "Point of Sale (POS) / Cashier: Records 3 types of transactions (Membership Payment, Daily Visitor, Additional Items Sales) with automatic membership activation",
               "Supports different pricing schemes for Local and Foreign members, including weekly duration",
               "Shopping cart feature for multi-item sales in a single transaction",
               "Manage Members: Complete member list with search and filter based on status and member type",
               "Member details with attendance history in a visual calendar format",
               "QR Code Attendance: Dynamically updated QR Code to be scanned by members",
               "Price Settings: Dedicated page to change membership prices, daily visitor rates, and additional product prices",
               "Reports & Export: Monthly/annual revenue reports and export to Excel format, member statistics (new members, expiring members, etc.)"
            ]
         },
         {
            title: "Member Features",
            features: [
               "Registration & Verification: Self-registration flow with email verification process",
               "Member Dashboard: Displays personal statistics such as remaining active days, total attendance, and attendance percentage",
               "Visual calendar to view personal attendance history and active membership periods",
               "QR Code Attendance: Feature to open camera and scan QR Code at the gym to record attendance (limited to once a day)",
               "Profile Management: Members can change their profile information and password"
            ]
         },
         {
            title: "Technical Achievements",
            features: [
               "Direct communication with the client to explore requirements for the cashier transaction recording and member management system",
               "Led a 4-person team and distributed roles according to UI/UX and backend developer expertise",
               "Developed authentication features, daily transaction recording, user management on the admin dashboard, and QR-based attendance on the member dashboard",
               "Application can be used by over 100 members and capable of recording over 50 transactions per day"
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/gymyankarta/ss-gymyankarta1.png",
            caption: "Main Page - Initial view of the YankartaGYM application"
         },
         {
            image: "/images/screenshots/gymyankarta/ss-gymyankarta2.png",
            caption: "Dashboard Page - Admin page displaying keys with metrics "
         },
         {
            image: "/images/screenshots/gymyankarta/ss-gymyankarta3.png",
            caption: "Cashier Page - Admin page for recording transactions"
         },
         {
            image: "/images/screenshots/gymyankarta/ss-gymyankarta4.png",
            caption: "QR Attendance Page - Page displaying QR Code for members to scan"
         }
      ],
      demo: "https://demo-gymyankarta-production.up.railway.app/",
      repository: "https://github.com/Sir-Wagyu/demo-gymyankarta",
      status: "Completed"
   },
   {
      id: 6,
      tumbnail: "/images/tumbnails/siduktang-home.png",
      title: "Migrant Population Management Application | Sidukang",
      category: "Web Application",
      technologies: [
         "Laravel",
         "Tailwind CSS",
         "MySQL"
      ],
      period: "May 2025 - Jun 2025",
      description: "Web-based information system for managing migrant population data with administrative letter request features and a multi-level approval system.",
      overview: "A Web Programming 2 course partnership project completed with an A grade. This system was developed to address the manual administrative processes for the migrant population. It involves building a system for collecting migrant population data and administrative letter requests (domicile, birth certificate, general introduction, etc.) by implementing authentication features, role-based access, request approval, and letter status notifications. Responsive and user-friendly UI for easy multi-device access.",
      features: [
         "Partnership project for Web Programming 2 course with a final grade of A",
         "Built a migrant population data collection system and administrative letter request feature (domicile, birth certificate, general introduction, etc.)",
         "Implemented authentication features, role-based access, request approval, and letter status notifications",
         "Responsive and user-friendly UI for easy multi-device access"
      ],
      screenshots: [
         {
            image: "/images/screenshots/siduktang/ss-siduktang1.png",
            caption: "Landing Page - Initial view of the Sidukang application"
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang2.png",
            caption: "Authentication Page - Login for system access"
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang3.png",
            caption: "Dashboard Page - Summary of population data and letter requests"
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang4.png",
            caption: "Verification Page - Account verification process by admin"
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang5.png",
            caption: "Master Data Page - Account data management"
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang6.png",
            caption: "Approval Page - Letter request approval process by admin"
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang7.png",
            caption: "Letter Request Page - Form for population administrative letter requests"
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang8.png",
            caption: "Report Page - Population data collection and other status reports"
         }
      ],
      repository: "https://github.com/Sir-Wagyu/pendataanPendudukV2",
      status: "Completed"
   },
   {
      id: 7,
      tumbnail: "/images/tumbnails/syntaxacademy-home.png",
      title: "E-learning Website | Syntax Academy",
      category: "Web Application",
      technologies: [
         "CodeIgniter 3",
         "Tailwind CSS",
         "MySQL"
      ],
      period: "Mar 2025 - Apr 2025",
      description: "E-learning platform for programming language courses with Midtrans payment gateway integration and a complete learning content management system.",
      overview: "SyntaxAcademy is an e-learning platform developed as a final university course project with an A grade. This application was created to address the main issue of expensive online programming courses available in the market. The platform aims to provide access to quality programming education at affordable costs, making it accessible to more students who have financial limitations but want to develop their programming skills.",
      features: [
         {
            title: "Student Features",
            features: [
               "User Authentication: Registration and login system for students",
               "Course Catalog: Displays the list of available courses along with their details",
               "Online Learning: Students can access the course materials they have purchased",
               "Profile Management: Users can view and manage their profiles",
               "Transaction Process: Integration with a payment gateway (Midtrans) for the course purchasing process",
               "Transaction History: Users can view their course purchase history"
            ]
         },
         {
            title: "Admin Features",
            features: [
               "Admin Dashboard: Administrative panel to manage the platform",
               "User Management: Manage data and registered student accounts",
               "Course Management: Add, edit, and delete programming courses",
               "Learning Material Management: Upload and manage learning content",
               "Transaction Monitor: Monitor and manage the course payment process"
            ]
         },
         {
            title: "Technical Achievements",
            features: [
               "Final course project with an A grade, using CodeIgniter 3 as the main framework",
               "Implemented an online payment system integrated with the Midtrans payment gateway",
               "Responsive and user-friendly design for an optimal learning experience across various devices",
               "An affordable e-learning solution to tackle the high cost of online programming courses"
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax1.png",
            caption: "Homepage - Initial view of the Syntax Academy application"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax2.png",
            caption: "Course Catalog Page - List of available courses"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax3.png",
            caption: "Course Package Page - Course details with prices and descriptions"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax4.png",
            caption: "Authentication Page - User login process"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax5.png",
            caption: "Authentication Page - New user registration process"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax6.png",
            caption: "Payment Page - Subscription payment process"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax7.png",
            caption: "Course Detail Page - Complete information about the selected course"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax8.png",
            caption: "Course Material Page - Access to learning materials after purchase"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax9.png",
            caption: "Admin Dashboard Page - Administrative panel to manage the platform"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax10.png",
            caption: "Member Management Page - Manage data and registered student accounts"
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax11.png",
            caption: "Course Management Page - Add, edit, and delete programming courses"
         }
      ],
      repository: "https://github.com/Sir-Wagyu/SyntaxAcademy",
      status: "Completed"
   },
   {
      id: 8,
      tumbnail: "/images/tumbnails/jobscape-home.png",
      title: "Job Portal Website | Jobscape",
      category: "Landing Page",
      technologies: [
         "React.js",
         "Tailwind CSS"
      ],
      period: "Feb 2025 - Mar 2025",
      description: "Job portal website connecting job seekers with companies, providing job vacancy search features.",
      overview: "Jobscape is a job portal platform developed as the final project for the React.js bootcamp by Sanbercode, achieving 2nd place in the batch. This project implements all the materials learned during the bootcamp, including React fundamentals, state management, component lifecycle, API integration, and best practices in modern frontend development. The platform is designed to connect job seekers with companies through a user-friendly and responsive interface.",
      features: [
         {
            title: "Homepage",
            features: [
               "Hero Section: Main greeting that catches visitor attention",
               "About Us: Brief explanation of the offered services",
               "Service Advantages: Highlights reasons why users should choose Jobscape, such as ease of use and customer support",
               "Vacancy List: Comparison display of available vacancies with clear features and locations",
               "Registration Steps: Visual guide on the job application workflow",
               "Company Gallery: Slider containing logos of companies currently opening vacancies",
               "FAQ (Frequently Asked Questions): Collection of common questions to address potential applicant doubts"
            ]
         },
         {
            title: "Vacancies Page",
            features: [
               "Complete list containing all available job vacancies, complete with descriptions and requirements",
               "Filter feature by category (technology, marketing, design, etc.) to simplify searches",
               "Button to view vacancy details and directly apply for the selected job"
            ]
         },
         {
            title: "Companies Page",
            features: [
               "Displays a list of companies currently opening vacancies and their brief profiles"
            ]
         },
         {
            title: "Registration Form",
            features: [
               "Registration Form: Structured form to apply for jobs, upload CVs, and fill in personal details",
               "Contact Form: Dedicated page for potential applicants to ask questions or discuss via WhatsApp"
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/jobscape/ss-jobscape1.png",
            caption: "Homepage - Initial view of the Jobscape website"
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape2.png",
            caption: "Authentication Page - Login for system access"
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape3.png",
            caption: "Authentication Page - Registration for job seekers"
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape4.png",
            caption: "Vacancies Page - List of available job vacancies"
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape5.png",
            caption: "Vacancy Detail Page - Complete information about the job vacancy"
         }
      ],
      demo: "https://newjobscape.netlify.app/",
      repository: "https://github.com/Sir-Wagyu/jobScape",
      status: "Completed"
   },
   {
      id: 9,
      tumbnail: "/images/tumbnails/arifinbatik-home.png",
      title: "Catalog Website | Arifin Batik",
      category: "Product Catalog",
      technologies: [
         "React.js",
         "PHP Native",
         "MySQL"
      ],
      period: "Jan 2025 - Feb 2025",
      description: "Company profile website and online catalog for premium stamped batik manufacturers and wholesale suppliers, featuring complete product search and category filters.",
      overview: "Arifin Batik is a business dedicated to the production and sale of high-quality stamped batik, with over 30 years of experience. This web application was built to be the company's digital face, displaying its stories, collections, and product details to potential customers and business partners. The goal is to expand market reach and make it easier for customers to find and order authentic and classy batik products.",
      features: [
         {
            title: "Informative Homepage",
            features: [
               "Displays a brief introduction to Arifin Batik and the company's history",
               "Showcase of available stamped batik product types",
               "Presents service excellence and product quality",
               "Collection snippets and galleries to attract visitor interest"
            ]
         },
         {
            title: "Dynamic Product Catalog",
            features: [
               "Product page with real-time search feature to find products quickly",
               "Advanced Filter system based on Categories (Rainbow, Plain, Smoke)",
               "Filter by Motif (Plants, Flowers, Animals, Abstract)",
               "Filter by Color for more specific searches",
               "Responsive and attractive grid format product list display"
            ]
         },
         {
            title: "Product Detail Page",
            features: [
               "Displays product images, names, materials, and full descriptions",
               "Presents specific details like colors and batik motifs",
               "Displays Related Products from the same category to increase user engagement",
               "Detailed information about the quality and manufacturing process of stamped batik"
            ]
         },
         {
            title: "Photo Gallery",
            features: [
               "Gallery section displaying attractive visuals of batik products",
               "Product showcase in various settings and styling",
               "Interactive gallery to provide an optimal visual experience"
            ]
         },
         {
            title: "Contact & FAQ Page",
            features: [
               "Provides clear contact information (WhatsApp, Email, Location)",
               "Equipped with a Frequently Asked Questions (FAQ) section to answer common customer questions",
               "Integration of an 'Order Now' button that directs straight to WhatsApp for easy ordering",
               "Complete information about the ordering process and wholesale services"
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/arifinbatik/ss-arifinbatik1.png",
            caption: "Home Page - Initial view of the Arifin Batik website"
         },
         {
            image: "/images/screenshots/arifinbatik/ss-arifinbatik2.png",
            caption: "Product Page - Page displaying product list"
         },
         {
            image: "/images/screenshots/arifinbatik/ss-arifinbatik3.png",
            caption: "Product Detail Page - Page displaying product details"
         }
      ],
      demo: "https://arifinbatik.com/",
      repository: "https://github.com/Sir-Wagyu/arifin-batik",
      status: "Completed"
   },
   {
      id: 10,
      tumbnail: "/images/tumbnails/bomboraweb-home.png",
      title: "Landing Page | Bombora Web",
      category: "Company Profile",
      technologies: [
         "React.js",
         "Tailwind CSS",
         "Native PHP",
         "MySQL"
      ],
      period: "Dec 2024 - Jan 2025",
      description: "Landing page and portfolio website for the Bombora web development team, specifically serving website creation and web application systems for MSMEs with portfolio gallery features and an integrated ordering system.",
      overview: "Bombora Web is a web development team of 4 developers focused on helping MSMEs build their digital presence. This website is designed with an intuitive flow for visitors, from introductions to placing orders. The application serves not only as an informative introductory page but also as a comprehensive portfolio gallery and an integrated ordering platform.",
      features: [
         {
            title: "Homepage (Landing Page)",
            features: [
               "Hero Section: Main greeting that catches visitor attention",
               "About Us: Brief explanation of offered services, such as Website Development and Marketing Design",
               "Service Advantages: Highlights reasons why clients should choose Bombora, such as fast turnaround and free consultation",
               "Pricing Packages List: Display of package comparisons (Starter, Growth, Premium) with clear features and pricing",
               "Ordering Steps: Visual guide on the website ordering workflow",
               "Template Gallery: Slider containing previews of available website templates",
               "FAQ (Frequently Asked Questions): Collection of common questions to address potential client doubts"
            ]
         },
         {
            title: "Templates Page",
            features: [
               "Complete gallery containing all available website templates, complete with preview images",
               "Filter feature by category (agriculture, company, restaurant, etc.) to simplify searches",
               "Button to view live previews and directly order the selected template"
            ]
         },
         {
            title: "Portfolio Page",
            features: [
               "Displays a list of clients and previously completed projects as proof of quality"
            ]
         },
         {
            title: "Ordering & Consultation Form",
            features: [
               "Order Form: Structured form to order website packages, select templates, and fill in requirement details",
               "Consultation Form: Dedicated page for potential clients to ask questions or discuss via WhatsApp"
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/bombora/ss-bombora1.png",
            caption: "Homepage - Initial view of the Bombora Web website"
         },
         {
            image: "/images/screenshots/bombora/ss-bombora2.png",
            caption: "Homepage - Ordering Process Explanation Section"
         },
         {
            image: "/images/screenshots/bombora/ss-bombora3.png",
            caption: "Package Page - List of offered pricing packages"
         },
         {
            image: "/images/screenshots/bombora/ss-bombora4.png",
            caption: "Order Form Page - Website order form"
         },
         {
            image: "/images/screenshots/bombora/ss-bombora5.png",
            caption: "Template Page - Gallery of available website templates"
         }
      ],
      demo: "https://bomboraweb.com/",
      repository: "https://github.com/passchatter/bomboraweb",
      status: "Completed"
   },
   {
      id: 11,
      tumbnail: "/images/tumbnails/nadiaartshop-home.png",
      title: "Product Catalog Website | Nadia Art Shop",
      category: "Product Catalog",
      technologies: [
         "React.js",
         "PHP Native",
         "MySQL"
      ],
      period: "Nov 2024 - Dec 2024",
      description: "A React.js-based e-commerce website displaying an authentic Balinese craft product catalog with search features, product filters, and WhatsApp integration for inquiries.",
      overview: "Nadia Art Shop is a small business selling authentic Balinese crafts, including wall decor and office furniture. This website serves as a product catalog allowing users to browse products, view details, and make inquiries. The frontend was developed using React.js with a focus on responsive design and user-friendly navigation. The backend is powered by Native PHP and MySQL API for dynamic product management.",
      features: [
         {
            title: "Dynamic Homepage",
            features: [
               "Hero Banner: Attractive banner highlighting key products and brand identity",
               "Featured Products: Showcase of the best and most popular products",
               "About Us: Section detailing the history and vision of Nadia Art Shop",
               "Image Gallery: Displays the Balinese craft product collection in an engaging visual format",
               "Call-to-Action: Actionable buttons directing to the catalog and contacts"
            ]
         },
         {
            title: "Easily Browsable Product Catalog",
            features: [
               "Advanced Search Filters: Filter by category, material, size, and product color",
               "Quick Search: Search bar to quickly find products by name",
               "Page Navigation: Pagination system to handle large product catalogs",
               "Sorting Options: Sort products by popularity, price, or newness"
            ]
         },
         {
            title: "Comprehensive Product Detail Page",
            features: [
               "Complete Information: Images, detailed descriptions, materials, sizes, and color specifications",
               "Product Gallery: Multiple images for each product with zoom functionality",
               "Related Products: 'You might also like' section to increase engagement",
               "Technical Specifications: Detailed craftsmanship and comprehensive product information"
            ]
         },
         {
            title: "Interactive User Experience",
            features: [
               "Responsive Design: Seamless adaptation across devices (desktop, tablet, mobile)",
               "Smooth Animations: Subtle animations on scroll for a modern experience",
               "Interactive Gallery: Interactive gallery for easy product browsing",
               "Loading Optimization: Optimized performance for a good user experience"
            ]
         },
         {
            title: "Contact and Communication",
            features: [
               "Dedicated Contact Page: Complete contact information for Nadia Art Shop",
               "FAQ Section: Frequently asked questions section with expandable answers",
               "WhatsApp Integration: 'Consult Now' and 'Order Now' buttons directly linking to WhatsApp",
               "Easy Inquiry: User-friendly contact form for product inquiries"
            ]
         }
      ],
      screenshots: [
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia1.png",
            caption: "Homepage - Initial view of the Nadia Art Shop website"
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia2.png",
            caption: "Homepage - Featured products showcase"
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia3.png",
            caption: "Homepage - Product advantages"
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia4.png",
            caption: "Product Catalog Page - Product showcase"
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia5.png",
            caption: "Product Catalog Page - Product filters and search"
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia6.png",
            caption: "Product Detail Page - Complete product information"
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia7.png",
            caption: "Contact Page - Contact information and FAQ"
         }
      ],
      demo: "https://nadiaartshop.com/",
      repository: "https://github.com/Sir-Wagyu/nadia-shop",
      status: "Completed"
   },
   {
      id: 12,
      tumbnail: "/images/tumbnails/nusantaraJourney-home.png",
      title: "Landing Page | Nusantara Journey",
      category: "Landing Page",
      technologies: [
         "HTML",
         "Tailwind CSS"
      ],
      period: "Apr 2024 - Jun 2024",
      description: "Responsive landing page to promote Indonesian tourist destinations with complete information about tourist spots, visitor reviews, and attractive photo galleries.",
      overview: "Nusantara Journey is a UKM Computer Club project aimed at promoting tourist destinations in Indonesia through a digital platform. With an attractive and responsive design, this landing page provides complete information about various tourist spots, including descriptions, images, and user reviews to raise awareness of Indonesia's tourism wealth.",
      features: [
         "Responsive Design: Ensures an optimal display across various devices",
         "Complete Information: Provides details about each tourist destination",
         "User Reviews: Displays reviews and ratings from visitors"
      ],
      image: "[PROJECT_IMAGE_PLACEHOLDER]",
      demo: "https://nusantara-journey.netlify.app/",
      repository: "https://github.com/Sir-Wagyu/NusantaraJourneyRemastered",
      status: "Completed"
   }
];

export const certifications = [
   {
      title: "Bootcamp Frontend Development (React.js)",
      issuer: "Sanbercode",
      period: "Jun 2024 - Jul 2024",
      description: "Intensive frontend development bootcamp focusing on React.js and modern web development practices",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Git"],
      credential: "https://drive.google.com/file/d/18BYWym3wlZB3oWUFJG8lDTsmowRxD6vb/view?usp=sharing",
   },
   {
      title: "Tailwind CSS Training",
      issuer: "UKM Computer Club",
      period: "Apr 2024 - Jun 2024",
      description: "Comprehensive training on Tailwind CSS framework and responsive web design",
      skills: ["Tailwind CSS", "Responsive Design", "CSS Utilities"],
      credential: "[CREDENTIAL_LINK_PLACEHOLDER]",
   },
];

export const trainingsAndCertifications = [
   {
      title: "React Js Web Frontend",
      issuer: "Sanbercode",
      period: "August 19th - September 13th, 2024",
      date: "September 2024",
      type: "Bootcamp",
      description: "Intensive bootcamp focusing on React.js development and modern web frontend technologies",
      skills: ["React.js", "JavaScript", "Frontend Development", "Web Development"],
      certificateNumber: "45484/650/SNBR/BOOTCAMP/IX/2024",
      credential: "https://drive.google.com/file/d/18BYWym3wlZB3oWUFJG8lDTsmowRxD6vb/view?usp=sharing",
   },
   {
      title: "Graphic Design Professional Skill",
      issuer: "MySkill - E-Learning",
      period: "September 6, 2023",
      date: "September 2023",
      type: "Professional Course",
      description: "Completed a Full Learning Path with Professional Skill in Graphic Design covering 36 courses",
      skills: ["Graphic Design", "Visual Design", "Creative Design", "Adobe Tools"],
      totalCourses: "36 Courses",
      credential: "https://drive.google.com/file/d/12Nvc4Er-1adw57FVAxWvwx1Pi1WQZRP5/view?usp=sharing",
   },
   {
      title: "Learn JavaScript",
      issuer: "CodePolitan",
      period: "May 9, 2024",
      date: "May 2024",
      type: "Online Course",
      description: "Completed the Learn JavaScript class in the CODEPOLITAN Online Class program",
      skills: ["JavaScript", "Programming Fundamentals", "Web Development"],
      credential: "https://codepolitan.com/c/ALMEIG2",
      validUntil: "May 9, 2027",
   },
   {
      title: "Learn Basic HTML",
      issuer: "CodePolitan",
      period: "January 12, 2024",
      date: "January 2024",
      type: "Online Course",
      description: "Completed the Learn Basic HTML class in the CodePolitan Online Class program",
      skills: ["HTML", "Web Fundamentals", "Frontend Basics"],
      credential: "https://codepolitan.com/c/EGX3BZS",
      validUntil: "January 11, 2027",
   },
   {
      title: "Learn Basic CSS",
      issuer: "CodePolitan",
      period: "January 26, 2024",
      date: "January 2024",
      type: "Online Course",
      description: "Completed the Learn Basic CSS class in the CODEPOLITAN Online Class program",
      skills: ["CSS", "Styling", "Web Design", "Frontend Development"],
      credential: "https://codepolitan.com/c/PIKH016",
      validUntil: "January 25, 2027",
   },
];

export const contact = {
   email: "whyunurhd@gmail.com",
   location: "Perum. Bali Kencana Resort 11",
   github: "https://github.com/Sir-Wagyu",
   linkedin: "https://www.linkedin.com/in/wahyunurh/",
   instagram: "https://www.instagram.com/whyuuunr/",
   whatsapp: "https://wa.me/6288223754172",
   available: true,
   message: "Open to internship opportunities as a Frontend Developer or Fullstack Developer. Let's collaborate!",
};

export const experience = [
   {
      period: "Oct 2024 – Present",
      role: "Lead Full-Stack Developer",
      company: "Bombora Studio (Freelance IT Service)",
      responsibilities: [
         "Lead a 4-person team in designing and developing responsive frontend interfaces and company profiles for over 10 growing SME clients.",
         "Collaborate closely with backend developers to ensure seamless REST API integration, state management, and optimized application performance."
      ]
   },
   {
      period: "Aug 2025 - Jan 2026",
      role: "Web Developer Intern",
      company: "CV Tridatu Solution (Bali)",
      responsibilities: [
         "Conducted comprehensive Quality Assurance (QA) and system testing for an upcoming SaaS product, identifying bugs to ensure optimal functionality prior to launch.",
         "Designed UI/UX wireframes and executed the rapid development of 3 commercial websites utilizing WordPress CMS and Elementor."
      ]
   },
];
