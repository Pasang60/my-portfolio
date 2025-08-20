import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';


interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  github: string;
  linkedin: string;
  email: string;
  projects: string[];
  experience: string;
  achievements: string[];
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
      name: 'Rajesh Thapa',
      role: 'Full Stack Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experienced full-stack developer with expertise in React and Node.js. Passionate about clean code and user experience.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: '#',
      linkedin: '#',
      email: 'rajesh@example.com',
      projects: ['CollegeHub', 'E-Commerce Dashboard'],
      experience: '3+ years',
      achievements: ['Best Developer Award 2023', 'Open Source Contributor']
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Frontend Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative frontend developer specializing in modern JavaScript frameworks and responsive design. UI/UX enthusiast.',
      skills: ['Angular', 'Vue.js', 'CSS3', 'Figma'],
      github: '#',
      linkedin: '#',
      email: 'priya@example.com',
      projects: ['Project Archiver', 'CollegeHub'],
      experience: '2+ years',
      achievements: ['Design Excellence Award', 'Hackathon Winner']
    },
    {
      id: 3,
      name: 'Amit Gurung',
      role: 'Backend Developer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Backend specialist focused on scalable architectures and database optimization. Expert in Java and Spring ecosystem.',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      github: '#',
      linkedin: '#',
      email: 'amit@example.com',
      projects: ['Cyber Cafe Management', 'Project Archiver'],
      experience: '4+ years',
      achievements: ['System Architecture Award', 'Performance Optimization Expert']
    },
    {
      id: 4,
      name: 'Bikash Rai',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'DevOps specialist focused on CI/CD pipelines, cloud infrastructure, and system automation. AWS and Docker expert.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      github: '#',
      linkedin: '#',
      email: 'bikash@example.com',
      projects: ['Project Archiver', 'Cyber Cafe Management'],
      experience: '3+ years',
      achievements: ['Cloud Architecture Certification', 'Automation Expert']
    }
  ];
  protected readonly faLinkedin = faLinkedin;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faGithub = faGithub;
}
