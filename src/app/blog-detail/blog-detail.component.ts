import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faArrowLeft, faCalendar, faClock, faTag, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  @Input() article: any;
  @Input() darkMode = false;
  @Output() back = new EventEmitter<void>();

  faClock = faClock;
 faCalendar = faCalendar;
  faUser = faUser;
  faTag = faTag;
 faArrowLeft = faArrowLeft;
}
