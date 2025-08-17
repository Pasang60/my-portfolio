import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';


interface Stat {
  icon: string;
  number: string;
  label: string;
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() darkMode = false;

  stats: Stat[] = [
    { icon: 'code', number: '15+', label: 'Projects Completed' },
    { icon: 'award', number: '5+', label: 'Achievements' },
    { icon: 'users', number: '10+', label: 'Team Projects' },
    { icon: 'graduation-cap', number: '3rd', label: 'Year Student' }
  ];

  getFontAwesomeIcon(icon: string) {
    return `fa-${icon}`;
  }
}
