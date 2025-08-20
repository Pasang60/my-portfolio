import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface SocialLink {
  icon: any;
  href: string;
  label: string;
}
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() darkMode = false;
  @Output() navigateToSection = new EventEmitter<string>();

  // Font Awesome icons
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;

  socialLinks: SocialLink[] = [
    { icon: this.faGithub, href: '#', label: 'GitHub' },
    { icon: this.faLinkedin, href: '#', label: 'LinkedIn' },
    { icon: this.faEnvelope, href: '#contact', label: 'Email' }
  ];

  navigateToContact() {
    this.navigateToSection.emit('contact');
  }
}
