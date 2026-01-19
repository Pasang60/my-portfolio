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
      title: 'Project Archiver',
      subtitle: 'Project Management and Archival System',
      description: 'A comprehensive project management and archival system for organizing and tracking development projects.',
      category: 'Web Application',
      status: 'COMPLETED',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
      demoLink: '#',
      githubLink: 'https://github.com/Pasang60/project-archiver-ui',
      details: {
        overview: 'Project Archiver is a sophisticated project management solution designed to help development teams organize, track, and archive their projects efficiently. The application provides comprehensive project lifecycle management from initiation to completion.',
        features: [
          'Project creation and management with detailed metadata',
          'Version control integration for tracking project changes',
          'Comprehensive reporting and analytics dashboard',
          'File management system with secure cloud storage'
        ],
        challenges: 'The main challenges included implementing efficient search algorithms for large datasets, designing a scalable architecture to handle concurrent users, and creating an intuitive user interface that caters to both technical and non-technical users.',
        outcome: 'The project has been successfully deployed and is being used by multiple development teams, resulting in 40% improved project organization and 25% faster project completion times.'
      }
    },
    {
      title: 'Cyber Cafe',
      subtitle: 'Comprehensive Cyber Cafe Management System',
      description: 'Complete management system for cyber cafes including billing, user management, and computer monitoring.',
      category: 'Management System',
      status: 'COMPLETED',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      demoLink: '#',
      githubLink: 'https://github.com/Pasang60/CyberCafe',
      details: {
        overview: 'A comprehensive cyber cafe management system that streamlines operations, manages customer billing, monitors computer usage, and provides detailed analytics for business optimization.',
        features: [
          'Customer registration and profile management',
          'Real-time computer status monitoring and control',
          'Automated billing system with flexible pricing models',
          'Daily, weekly, and monthly revenue reports',
          'Customer usage analytics and behavior insights',
        ],
        challenges: 'The primary challenges involved creating a reliable computer monitoring system, implementing accurate time-tracking mechanisms, and designing an intuitive interface for cafe operators with varying technical skills.',
        outcome: 'The system has been deployed in 5 cyber cafes, resulting in 30% improvement in operational efficiency and 20% increase in revenue through optimized resource utilization.'
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
    }
  ];

  ngOnInit() {
    // Set the first project as selected by default
    this.selectedProject = this.projects[0];
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  }

  get filteredProjects(): Project[] {
    return this.projects;
  }
}
