// import {Component, EventEmitter, Input, Output} from '@angular/core';
// import {CommonModule} from '@angular/common';
// import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
//
//
// interface Project {
//   status: string;
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   category: string;
//   demoLink: string;
//   githubLink: string;
//   details: {
//     overview: string;
//     features: string[];
//     challenges: string;
//     outcome: string;
//   };
// }
// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [CommonModule, FontAwesomeModule],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.scss'
// })
// export class ProjectsComponent {
//   @Input() darkMode = false;
//   @Output() readMore = new EventEmitter<any>();
//
//   selectedCategory = 'All';
//   selectedProject: Project | null = null;
//
//   categories = ['All', 'Web Application', 'Social Platform', 'Management System', 'Analytics Dashboard'];
//
//   projects: Project[] = [
//     {
//       id: 1,
//       status: 'Completed',
//       title: 'Project Archiver',
//       description: 'A comprehensive project management and archival system for organizing and tracking development projects.',
//       image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
//       technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
//       category: 'Web Application',
//       demoLink: '#',
//       githubLink: '#',
//       details: {
//         overview: 'Project Archiver is a sophisticated project management solution designed to help development teams organize, track, and archive their projects efficiently. The application provides comprehensive project lifecycle management from initiation to completion.',
//         features: [
//           'Project creation and management with detailed metadata',
//           'Version control integration for tracking project changes',
//           'Team collaboration tools with role-based access control',
//           'Advanced search and filtering capabilities',
//           'Automated project archival based on completion status',
//           'Real-time notifications and progress tracking',
//           'Comprehensive reporting and analytics dashboard',
//           'File management system with secure cloud storage'
//         ],
//         challenges: 'The main challenges included implementing efficient search algorithms for large datasets, designing a scalable architecture to handle concurrent users, and creating an intuitive user interface that caters to both technical and non-technical users.',
//         outcome: 'The project has been successfully deployed and is being used by multiple development teams, resulting in 40% improved project organization and 25% faster project completion times.'
//       }
//     },
//     {
//       id: 2,
//       status: 'In Progress',
//       title: 'CollegeHub',
//       description: 'A social platform connecting college students with features for academic collaboration and campus events.',
//       image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
//       technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
//       category: 'Social Platform',
//       demoLink: 'https://collegehubnepal.com/',
//       githubLink: '#',
//       details: {
//         overview: 'CollegeHub is a comprehensive social networking platform specifically designed for college students to enhance their academic experience through collaboration, event management, and community building.',
//         features: [
//           'Student profile management with academic interests',
//           'Study group formation and collaboration tools',
//           'Campus event creation and management system',
//           'Real-time messaging and video chat functionality',
//           'Academic resource sharing and peer tutoring',
//           'Club and organization management features',
//           'Campus news and announcements feed',
//           'Integration with college academic systems'
//         ],
//         challenges: 'Key challenges included implementing real-time communication features, ensuring data privacy and security for student information, and creating a scalable architecture to handle the entire college population.',
//         outcome: 'The platform has been adopted by over 2,000 students and has facilitated the formation of 150+ study groups, significantly improving student engagement and academic collaboration.'
//       }
//     },
//     {
//       id: 3,
//       status: 'Completed',
//       title: 'Cyber Cafe Management',
//       description: 'Complete management system for cyber cafes including billing, user management, and computer monitoring.',
//       image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
//       technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
//       category: 'Management System',
//       demoLink: '#',
//       githubLink: '#',
//       details: {
//         overview: 'A comprehensive cyber cafe management system that streamlines operations, manages customer billing, monitors computer usage, and provides detailed analytics for business optimization.',
//         features: [
//           'Customer registration and profile management',
//           'Real-time computer status monitoring and control',
//           'Automated billing system with flexible pricing models',
//           'Time-based session management with automatic logout',
//           'Inventory management for cafe equipment and supplies',
//           'Daily, weekly, and monthly revenue reports',
//           'Customer usage analytics and behavior insights',
//           'Multi-location support for cafe chains'
//         ],
//         challenges: 'The primary challenges involved creating a reliable computer monitoring system, implementing accurate time-tracking mechanisms, and designing an intuitive interface for cafe operators with varying technical skills.',
//         outcome: 'The system has been deployed in 5 cyber cafes, resulting in 30% improvement in operational efficiency and 20% increase in revenue through optimized resource utilization.'
//       }
//     },
//     {
//       id: 4,
//       status: 'In Progress',
//       title: 'E-Commerce Dashboard',
//       description: 'Advanced analytics dashboard for e-commerce businesses with real-time sales tracking and inventory management.',
//       image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpg?auto=compress&cs=tinysrgb&w=600',
//       technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Chart.js'],
//       category: 'Analytics Dashboard',
//       demoLink: '#',
//       githubLink: '#',
//       details: {
//         overview: 'A sophisticated e-commerce analytics dashboard that provides comprehensive business insights through real-time data visualization, sales tracking, and predictive analytics for informed decision making.',
//         features: [
//           'Real-time sales and revenue tracking with live updates',
//           'Advanced inventory management with low-stock alerts',
//           'Customer behavior analysis and segmentation',
//           'Product performance metrics and recommendations',
//           'Financial reporting with profit/loss analysis',
//           'Marketing campaign effectiveness tracking',
//           'Predictive analytics for demand forecasting',
//           'Multi-store management and comparison tools'
//         ],
//         challenges: 'Major challenges included processing large volumes of real-time data efficiently, creating meaningful visualizations for complex business metrics, and ensuring the dashboard remains responsive with growing data sets.',
//         outcome: 'The dashboard has helped businesses increase their revenue by 35% through data-driven decisions and has reduced inventory costs by 25% through optimized stock management.'
//       }
//     }
//   ];
//
//   // Add icons to the component
//   faGithub = faGithub;
//   faExternalLinkAlt = faExternalLinkAlt;
//
//   get filteredProjects(): Project[] {
//     return this.selectedCategory === 'All'
//       ? this.projects
//       : this.projects.filter(project => project.category === this.selectedCategory);
//   }
//
//   // Method to close project modal
//   closeProject(): void {
//     this.selectedProject = null;
//   }
//
//   selectProject(project: Project) {
//     this.selectedProject = project;
//   }
//
// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  status: 'LIVE' | 'PRODUCTION' | 'COMPLETED' | 'IN-DEVELOPMENT';
  image?: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  details: {
    overview?: string;
    features: string[];
    challenges?: string;
    outcome?: string;
  };
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() darkMode = false;

  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      title: 'CollegeHub Nepal',
      subtitle: 'College Listing and Management Platform',
      description: 'A comprehensive platform for college listings, student management, and educational resources in Nepal.',
      category: 'Web Platform',
      status: 'LIVE',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Bootstrap'],
      demoLink: 'https://collegehub.com.np',
      githubLink: 'https://github.com/yourusername/collegehub',
      details: {
        overview: 'CollegeHub Nepal is a comprehensive platform designed to help students find and compare colleges across Nepal. It features detailed college profiles, admission information, course details, and student reviews.',
        features: [
          'Real-time college search and filtering',
          'Detailed college profiles with photos and videos',
          'Student admission tracking system',
          'Course comparison tools',
          'Interactive campus maps'
        ],
        challenges: 'One of the main challenges was aggregating data from multiple sources and ensuring data accuracy. We implemented a verification system and partnered with educational institutions to maintain data quality.',
        outcome: 'Successfully launched with 500+ colleges listed and 10,000+ active users. The platform has helped thousands of students make informed decisions about their education.'
      }
    },
    {
      title: 'Sajilo Yatra',
      subtitle: 'Tour and Travel Platform',
      description: 'sajilo Yatra is a tour and travel platform built using PHP, HTML, CSS, Bootstrap, and MySQL...',
      category: 'Web Platform',
      status: 'PRODUCTION',
      technologies: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
      demoLink: 'https://sajiloyatra.com',
      githubLink: 'https://github.com/yourusername/sajiloyatra',
      details: {
        overview: 'Sajilo Yatra is an innovative tour and travel booking platform that makes planning trips across Nepal simple and convenient.',
        features: [
          'Real-time tour booking',
          'Custom travel itineraries',
          'Customer support chat',
          'Payment integration',
          'Travel destination guides'
        ],
        challenges: 'Integrating multiple payment gateways and ensuring secure transactions while maintaining a smooth user experience was challenging. We implemented robust security measures and testing protocols.',
        outcome: 'The platform has facilitated over 1,000 bookings and has been well-received by both tourists and travel agencies.'
      }
    },
    {
      title: 'ExamSeat',
      subtitle: 'Exam Arrangement System',
      description: 'An automated system for arranging exam seats and managing examination logistics for educational institutions.',
      category: 'Web Platform',
      status: 'PRODUCTION',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
      demoLink: 'https://examseat.com',
      githubLink: 'https://github.com/yourusername/examseat',
      details: {
        overview: 'ExamSeat automates the complex process of exam seat allocation, reducing manual work and minimizing errors in educational institutions.',
        features: [
          'Automated seat allocation algorithm',
          'Conflict detection and resolution',
          'PDF report generation',
          'Real-time seat availability tracking',
          'Multi-center exam management'
        ],
        challenges: 'Developing an efficient algorithm that could handle various constraints like student conflicts, room capacity, and exam schedules was technically challenging.',
        outcome: 'Reduced exam arrangement time from days to hours, currently used by 5+ educational institutions managing 10,000+ students per semester.'
      }
    },
    {
      title: 'OpenMicHub',
      subtitle: 'Artist Collaboration Platform',
      description: 'A platform connecting artists, musicians, and performers for collaborative projects and events.',
      category: 'Web Platform',
      status: 'COMPLETED',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoLink: 'https://openmichub.com',
      githubLink: 'https://github.com/yourusername/openmichub',
      details: {
        overview: 'OpenMicHub brings together artists from various disciplines to collaborate, share work, and organize open mic events.',
        features: [
          'Artist profile management',
          'Event creation and management',
          'Real-time collaboration tools',
          'Portfolio showcase',
          'Community forums'
        ],
        challenges: 'Building a real-time collaboration system that works seamlessly across different devices and network conditions required extensive testing and optimization.',
        outcome: 'Successfully connected 500+ artists and facilitated 50+ collaborative events in the first year.'
      }
    },
    {
      title: 'CMS (Content Management System)',
      subtitle: 'Dynamic School/College Website & Management',
      description: 'A comprehensive content management system for educational institutions to manage their websites and administrative tasks.',
      category: 'Web Platform',
      status: 'IN-DEVELOPMENT',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'AWS S3'],
      githubLink: 'https://github.com/yourusername/edu-cms',
      details: {
        overview: 'A modern CMS specifically designed for educational institutions, offering both website management and administrative tools in one platform.',
        features: [
          'Dynamic website builder',
          'Student information system',
          'Faculty management',
          'Course and curriculum management',
          'Attendance tracking',
          'Grade management',
          'Parent portal'
        ],
        challenges: 'Creating a system flexible enough to accommodate different types of educational institutions while maintaining ease of use.',
        outcome: 'Currently in beta testing with 3 pilot schools. Expected to launch fully in Q2 2025.'
      }
    },
    {
      title: 'E-Commerce Platform',
      subtitle: 'Online Shopping Solution',
      description: 'A full-featured e-commerce platform with advanced inventory management and payment integration.',
      category: 'Web Platform',
      status: 'PRODUCTION',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Stripe', 'Redis'],
      demoLink: 'https://yourshop.com',
      githubLink: 'https://github.com/yourusername/ecommerce',
      details: {
        overview: 'A scalable e-commerce solution with features for both customers and vendors, including multi-vendor support and advanced analytics.',
        features: [
          'Multi-vendor marketplace',
          'Advanced search and filtering',
          'Real-time inventory management',
          'Multiple payment gateway integration',
          'Order tracking system',
          'Customer reviews and ratings',
          'Wishlist and cart functionality'
        ],
        challenges: 'Implementing a scalable architecture that could handle high traffic during sale events while maintaining fast response times.',
        outcome: 'Processing 1000+ daily transactions with 99.9% uptime. Supporting 100+ vendors and 50,000+ products.'
      }
    }
  ];

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  get filteredProjects(): Project[] {
    return this.projects;
  }
}
