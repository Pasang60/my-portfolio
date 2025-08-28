// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCode, faAward, faExternalLink } from '@fortawesome/free-solid-svg-icons';
// import { IconProp } from '@fortawesome/fontawesome-svg-core';
//
// interface TechnicalSkill {
//   name: string;
//   level: number;
//   icon: string; // Font Awesome class names (e.g., 'fab fa-angular')
//   category: string;
// }
//
// interface Achievement {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   image: string;
//   details: string;
//   technologies: string[];
// }
//
// @Component({
//   selector: 'app-skills',
//   standalone: true,
//   imports: [CommonModule, FontAwesomeModule],
//   templateUrl: './skills.component.html',
//   styleUrls: ['./skills.component.scss']
// })
// export class SkillsComponent {
//   @Input() darkMode = false;
//
//   // Font Awesome icons
//   faCode = faCode;
//   faAward = faAward;
//   faExternalLink = faExternalLink;
//
//   activeTab: 'skills' | 'achievements' = 'skills';
//   selectedCategory = 'All';
//   selectedAchievement: Achievement | null = null;
//
//   categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
//
//   technicalSkills: TechnicalSkill[] = [
//     { name: 'Angular', level: 90, icon: '🅰️', category: 'Frontend' },
//     { name: 'Spring Boot', level: 85, icon: '🍃', category: 'Backend' },
//     { name: 'PostgreSQL', level: 80, icon: '🐘', category: 'Database' },
//     { name: 'PHP', level: 75, icon: '🐘', category: 'Backend' },
//     { name: 'JavaScript', level: 88, icon: '📜', category: 'Frontend' },
//     { name: 'TypeScript', level: 85, icon: '📘', category: 'Frontend' },
//     { name: 'Java', level: 82, icon: '☕', category: 'Backend' },
//     { name: 'HTML/CSS', level: 95, icon: '🎨', category: 'Frontend' },
//     { name: 'Git', level: 90, icon: '📚', category: 'Tools' },
//     { name: 'Postman', level: 85, icon: '📮', category: 'Tools' }
//   ];
//
//   achievements: Achievement[] = [
//     {
//       id: 1,
//       title: '1st Place - College Hackathon 2024',
//       description: 'Won first place in the annual college hackathon for developing an innovative project management solution.',
//       date: 'March 2024',
//       image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
//       details: 'Led a team of 4 developers to create a comprehensive project management platform using Angular and Spring Boot. The solution featured real-time collaboration, task tracking, and advanced analytics. Our innovative approach to solving project management challenges impressed the judges and secured us the top position among 50+ competing teams.',
//       technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'WebSocket']
//     },
//     {
//       id: 2,
//       title: 'Full Stack Development Certificate',
//       description: 'Completed intensive full-stack development training program.',
//       date: 'January 2024',
//       image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
//       details: 'Successfully completed a comprehensive 6-month full-stack development program covering modern web technologies. The program included hands-on projects, code reviews, and industry best practices. Gained expertise in frontend frameworks, backend APIs, database design, and deployment strategies.',
//       technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
//     },
//     {
//       id: 3,
//       title: 'Angular Advanced Certification',
//       description: 'Advanced certification in Angular framework development.',
//       date: 'November 2023',
//       image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600',
//       details: 'Earned advanced certification in Angular development after completing rigorous coursework covering advanced concepts like RxJS, state management, performance optimization, and testing strategies. Built multiple complex applications demonstrating mastery of Angular ecosystem.',
//       technologies: ['Angular', 'RxJS', 'NgRx', 'Jasmine', 'Karma']
//     },
//     {
//       id: 4,
//       title: 'Database Design Workshop',
//       description: 'Completed advanced database design and optimization workshop.',
//       date: 'September 2023',
//       image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
//       details: 'Participated in an intensive workshop focusing on database design principles, normalization, query optimization, and performance tuning. Worked on real-world scenarios involving large-scale database systems and learned advanced PostgreSQL features.',
//       technologies: ['PostgreSQL', 'SQL', 'Database Design', 'Performance Tuning']
//     }
//   ];
//
//   get filteredSkills(): TechnicalSkill[] {
//     return this.selectedCategory === 'All'
//       ? this.technicalSkills
//       : this.technicalSkills.filter(skill => skill.category === this.selectedCategory);
//   }
// }



import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faAward, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TechnicalSkill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  experience: string; // Context like years of experience or projects
  icon: string;
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

  faCode = faCode;
  faAward = faAward;
  faExternalLink = faExternalLink;

  activeTab: 'skills' | 'achievements' = 'skills';
  selectedCategory = 'All';
  selectedAchievement: Achievement | null = null;

  categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  technicalSkills: TechnicalSkill[] = [
    { name: 'Angular', level: 'Expert', experience: '2+ years, built 3 production apps', icon: '🅰️', category: 'Frontend' },
    { name: 'Spring Boot', level: 'Advanced', experience: '2 years, used in 2 enterprise projects', icon: '🍃', category: 'Backend' },
    { name: 'PostgreSQL', level: 'Advanced',  experience: '2 years, used in 2 projects', icon: '🐘', category: 'Database' },
    { name: 'PHP', level: 'Intermediate',  experience: '1.5 years, used in 1 project', icon: '🐘', category: 'Backend' },
    { name: 'JavaScript', level: 'Expert',  experience: '3+ years, multiple web apps', icon: '📜', category: 'Frontend' },
    { name: 'TypeScript', level: 'Advanced', experience: '2 years, used in 3 projects', icon: '📘', category: 'Frontend' },
    { name: 'Java', level: 'Advanced', experience: '2 years, backend development', icon: '☕', category: 'Backend' },
    { name: 'HTML/CSS', level: 'Expert',  experience: '4+ years, multiple responsive UIs', icon: '🎨', category: 'Frontend' },
    { name: 'Git', level: 'Expert',  experience: '3+ years, daily use in projects', icon: '📚', category: 'Tools' },
    { name: 'Postman', level: 'Advanced', experience: '2 years, API testing', icon: '📮', category: 'Tools' }
  ];

  achievements: Achievement[] = [
    {
      id: 1,
      title: '1st Place - College Hackathon 2024',
      description: 'Won first place in the annual college hackathon for developing an innovative project management solution.',
      date: 'March 2024',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Led a team of 4 developers to create a comprehensive project management platform using Angular and Spring Boot. The solution featured real-time collaboration, task tracking, and advanced analytics. Our innovative approach to solving project management challenges impressed the judges and secured us the top position among 50+ competing teams.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'WebSocket']
    },
    {
      id: 2,
      title: 'Full Stack Development Certificate',
      description: 'Completed intensive full-stack development training program.',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Successfully completed a comprehensive 6-month full-stack development program covering modern web technologies. The program included hands-on projects, code reviews, and industry best practices. Gained expertise in frontend frameworks, backend APIs, database design, and deployment strategies.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      id: 3,
      title: 'Angular Advanced Certification',
      description: 'Advanced certification in Angular framework development.',
      date: 'November 2023',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600',
      details: 'Earned advanced certification in Angular development after completing rigorous coursework covering advanced concepts like RxJS, state management, performance optimization, and testing strategies. Built multiple complex applications demonstrating mastery of Angular ecosystem.',
      technologies: ['Angular', 'RxJS', 'NgRx', 'Jasmine', 'Karma']
    },
    {
      id: 4,
      title: 'Database Design Workshop',
      description: 'Completed advanced database design and optimization workshop.',
      date: 'September 2023',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Participated in an intensive workshop focusing on database design principles, normalization, query optimization, and performance tuning. Worked on real-world scenarios involving large-scale database systems and learned advanced PostgreSQL features.',
      technologies: ['PostgreSQL', 'SQL', 'Database Design', 'Performance Tuning']
    }
  ];

  get filteredSkills(): TechnicalSkill[] {
    return this.selectedCategory === 'All'
      ? this.technicalSkills
      : this.technicalSkills.filter(skill => skill.category === this.selectedCategory);
  }
}
