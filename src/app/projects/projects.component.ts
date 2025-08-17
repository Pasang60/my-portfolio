import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoLink: string;
  githubLink: string;
  details: {
    overview: string;
    features: string[];
    challenges: string;
    outcome: string;
  };
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() darkMode = false;
  @Output() readMore = new EventEmitter<any>();

  selectedCategory = 'All';
  selectedProject: Project | null = null;

  categories = ['All', 'Web Application', 'Social Platform', 'Management System', 'Analytics Dashboard'];

  projects: Project[] = [
    {
      id: 1,
      title: 'Project Archiver',
      description: 'A comprehensive project management and archival system for organizing and tracking development projects.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
      category: 'Web Application',
      demoLink: '#',
      githubLink: '#',
      details: {
        overview: 'Project Archiver is a sophisticated project management solution designed to help development teams organize, track, and archive their projects efficiently. The application provides comprehensive project lifecycle management from initiation to completion.',
        features: [
          'Project creation and management with detailed metadata',
          'Version control integration for tracking project changes',
          'Team collaboration tools with role-based access control',
          'Advanced search and filtering capabilities',
          'Automated project archival based on completion status',
          'Real-time notifications and progress tracking',
          'Comprehensive reporting and analytics dashboard',
          'File management system with secure cloud storage'
        ],
        challenges: 'The main challenges included implementing efficient search algorithms for large datasets, designing a scalable architecture to handle concurrent users, and creating an intuitive user interface that caters to both technical and non-technical users.',
        outcome: 'The project has been successfully deployed and is being used by multiple development teams, resulting in 40% improved project organization and 25% faster project completion times.'
      }
    },
    {
      id: 2,
      title: 'CollegeHub',
      description: 'A social platform connecting college students with features for academic collaboration and campus events.',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'Social Platform',
      demoLink: 'https://collegehubnepal.com/',
      githubLink: '#',
      details: {
        overview: 'CollegeHub is a comprehensive social networking platform specifically designed for college students to enhance their academic experience through collaboration, event management, and community building.',
        features: [
          'Student profile management with academic interests',
          'Study group formation and collaboration tools',
          'Campus event creation and management system',
          'Real-time messaging and video chat functionality',
          'Academic resource sharing and peer tutoring',
          'Club and organization management features',
          'Campus news and announcements feed',
          'Integration with college academic systems'
        ],
        challenges: 'Key challenges included implementing real-time communication features, ensuring data privacy and security for student information, and creating a scalable architecture to handle the entire college population.',
        outcome: 'The platform has been adopted by over 2,000 students and has facilitated the formation of 150+ study groups, significantly improving student engagement and academic collaboration.'
      }
    },
    {
      id: 3,
      title: 'Cyber Cafe Management',
      description: 'Complete management system for cyber cafes including billing, user management, and computer monitoring.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      category: 'Management System',
      demoLink: '#',
      githubLink: '#',
      details: {
        overview: 'A comprehensive cyber cafe management system that streamlines operations, manages customer billing, monitors computer usage, and provides detailed analytics for business optimization.',
        features: [
          'Customer registration and profile management',
          'Real-time computer status monitoring and control',
          'Automated billing system with flexible pricing models',
          'Time-based session management with automatic logout',
          'Inventory management for cafe equipment and supplies',
          'Daily, weekly, and monthly revenue reports',
          'Customer usage analytics and behavior insights',
          'Multi-location support for cafe chains'
        ],
        challenges: 'The primary challenges involved creating a reliable computer monitoring system, implementing accurate time-tracking mechanisms, and designing an intuitive interface for cafe operators with varying technical skills.',
        outcome: 'The system has been deployed in 5 cyber cafes, resulting in 30% improvement in operational efficiency and 20% increase in revenue through optimized resource utilization.'
      }
    },
    {
      id: 4,
      title: 'E-Commerce Dashboard',
      description: 'Advanced analytics dashboard for e-commerce businesses with real-time sales tracking and inventory management.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Chart.js'],
      category: 'Analytics Dashboard',
      demoLink: '#',
      githubLink: '#',
      details: {
        overview: 'A sophisticated e-commerce analytics dashboard that provides comprehensive business insights through real-time data visualization, sales tracking, and predictive analytics for informed decision making.',
        features: [
          'Real-time sales and revenue tracking with live updates',
          'Advanced inventory management with low-stock alerts',
          'Customer behavior analysis and segmentation',
          'Product performance metrics and recommendations',
          'Financial reporting with profit/loss analysis',
          'Marketing campaign effectiveness tracking',
          'Predictive analytics for demand forecasting',
          'Multi-store management and comparison tools'
        ],
        challenges: 'Major challenges included processing large volumes of real-time data efficiently, creating meaningful visualizations for complex business metrics, and ensuring the dashboard remains responsive with growing data sets.',
        outcome: 'The dashboard has helped businesses increase their revenue by 35% through data-driven decisions and has reduced inventory costs by 25% through optimized stock management.'
      }
    }
  ];

  // Add icons to the component
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;

  get filteredProjects(): Project[] {
    return this.selectedCategory === 'All'
      ? this.projects
      : this.projects.filter(project => project.category === this.selectedCategory);
  }

  // Method to close project modal
  closeProject(): void {
    this.selectedProject = null;
  }
}
