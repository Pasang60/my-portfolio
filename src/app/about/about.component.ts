import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faCode, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';


interface Stat {
  icon: any;
  number: string;
  label: string;
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() darkMode = false;

  // Font Awesome icons
  faCode = faCode;
  faAward = faAward;
  faUsers = faUsers;
  faGraduationCap = faGraduationCap;

  stats: Stat[] = [
    { icon: this.faCode, number: '15+', label: 'Projects Completed' },
    { icon: this.faAward, number: '5+', label: 'Achievements' },
    { icon: this.faUsers, number: '10+', label: 'Team Projects' },
    { icon: this.faGraduationCap, number: '3rd', label: 'Year Student' }
  ];
}
