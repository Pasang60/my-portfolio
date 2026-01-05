import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGlobe, faLaptop, faTools, faTrophy} from '@fortawesome/free-solid-svg-icons';

interface TechnicalSkill {
  name: string;
  icon: string; // SVG URL from Devicon
  category: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  details: string;
  technologies: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() darkMode = false;

  activeTab: 'skills' | 'achievements' = 'skills';
  selectedCategory = 'All';
  selectedAchievement: Achievement | null = null;

  categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  technicalSkills: TechnicalSkill[] = [
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'Frontend' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'Backend' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'Backend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Backend' },
    { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'Tools' }
  ];

  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Ambition HackFest Social Impact Winner',
      description: 'Won the Social Impact Award at Ambition HackFest 2025 for developing an innovative solution.',
      date: 'March 2025',
      image: 'assets/certificates/ambition-hackfest.jpg',
      details: 'Led a team to create a comprehensive social impact platform using Angular and Spring Boot. The solution featured real-time collaboration, community engagement tools, and impact analytics. Our innovative approach to solving social challenges impressed the judges and secured us the Social Impact Award among 50+ competing teams.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'WebSocket']
    },
    {
      id: 2,
      title: '1st Position in Aadim Hackathon',
      description: 'Secured 1st place in Aadim Hackathon 2025 for developing an innovative educational platform.',
      date: 'March 2025',
      image: 'assets/certificates/aadim-hackathon.jpg',
      details: 'Successfully developed a cutting-edge educational management platform that revolutionized student-teacher interaction. The platform included features for assignment tracking, real-time communication, and performance analytics. Our solution stood out among all participants for its user-centric design and technical excellence.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      id: 3,
      title: 'AI and Emerging Technology',
      description: 'Completed advanced certification in AI and Emerging Technology from CAN ICT Education.',
      date: 'April 2025',
      image: 'assets/certificates/ai-emerging-tech.jpg',
      details: 'Earned certification in AI and Emerging Technology after completing rigorous coursework covering machine learning, deep learning, and AI applications. Built multiple AI-powered applications demonstrating mastery of modern AI technologies and their practical applications in real-world scenarios.',
      technologies: ['Python', 'TensorFlow', 'Machine Learning', 'AI', 'Deep Learning']
    }
  ];

  get filteredSkills(): TechnicalSkill[] {
    return this.selectedCategory === 'All'
      ? this.technicalSkills
      : this.technicalSkills.filter(skill => skill.category === this.selectedCategory);
  }
  protected readonly faTrophy = faTrophy;
  protected readonly faLaptop = faLaptop;
}
