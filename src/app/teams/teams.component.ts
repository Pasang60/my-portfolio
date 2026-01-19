import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';


interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  github: string;
  linkedin: string;
  portfolio: string;
  projects: string[];
}
@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  @Input() darkMode = false;

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Utsab Dahal',
      role: 'Backend Developer',
      image: 'assets/images/utsab.jpg',
      bio: 'Backend developer experienced in building secure and scalable applications using Java and Spring Boot. Skilled in PostgreSQL database design, REST API development, and API testing with Postman. Focused on clean architecture and performance optimization.',
      skills: ['Java', 'Spring Boot', 'Postgres', 'Postman'],
      github: 'https://github.com/dahalutsab',
      linkedin: '#',
      portfolio: 'https://www.dahalutsab.com.np/',
      projects: ['CollegeHub', 'E-Commerce Dashboard']
    },
    {
      id: 2,
      name: 'Chitra Prasad Acharya',
      role: 'Frontend Developer',
      image: 'assets/images/guley.jpg',
      bio: 'Frontend developer specializing in Angular and responsive web design. Experienced in creating clean, user-friendly interfaces using CSS and converting Figma designs into functional web applications. Familiar with PHP for dynamic frontend-backend integration.',
      skills: ['Angular', 'PHP', 'CSS', 'Figma'],
      github: '#',
      linkedin: '#',
      portfolio: 'priya@example.com',
      projects: ['Project Archiver', 'CollegeHub']
    },
    {
      id: 3,
      name: 'Pasang Gelbu Sherpa',
      role: 'Backend Developer',
      image: 'assets/images/photo.png',
      bio: 'Backend developer with strong expertise in Java and Spring Boot, focused on building scalable REST APIs and optimized database solutions using PostgreSQL. Proficient in API testing and debugging with Postman and maintaining clean service-layer design.',
      skills: ['Java', 'Spring Boot', 'Postgres', 'Postman'],
      github: 'https://github.com/Pasang60',
      linkedin: 'https://www.linkedin.com/in/pasang-sherpa-a55a93319/',
      portfolio: 'amit@example.com',
      projects: ['Cyber Cafe Management', 'Project Archiver']
    },
    {
      id: 4,
      name: 'Dhiraj Jirel',
      role: 'Backend Developer',
      image: 'assets/images/devu.jpg',
      bio: 'Backend developer experienced in developing robust server-side applications using Java and Spring Boot. Skilled in PostgreSQL database management and API testing with Postman, with a focus on security, validation, and maintainable code.',
      skills: ['Java', 'Spring Boot', 'Postgres', 'Postman'],
      github: '#',
      linkedin: '#',
      portfolio: 'bikash@example.com',
      projects: ['Project Archiver', 'Cyber Cafe Management']
    }
  ];

  protected readonly faLinkedin = faLinkedin;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faGithub = faGithub;
  protected readonly faGlobe = faGlobe;
}
