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
  image: string;
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
    {name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database' },
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
      image: 'assets/images/hackerthon.jpg',
    },
    {
      id: 2,
      title: 'Research Methods In IT : A Hands-On Workshop On Leveraging Generative AI',
      image: 'assets/images/research.jpg',

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
