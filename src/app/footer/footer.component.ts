import {Component, Input} from '@angular/core';
import {faExternalLink, faHeart} from '@fortawesome/free-solid-svg-icons';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface Link {
  name: string;
  href: string;
}
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() darkMode = false;

  currentYear = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    { icon: 'github', href: '#', label: 'GitHub' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'mail', href: '#contact', label: 'Email' }
  ];

  quickLinks: Link[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];

  resources: Link[] = [
    { name: 'Blog', href: '#blog' },
    { name: 'Teams', href: '#teams' },
    { name: 'Contact', href: '#contact' },
    { name: 'Download CV', href: '#' }
  ];

  technologies = ['Angular', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Java', 'PHP', 'Git', 'Postman'];
 faHeart = faHeart;
  faExternalLink = faExternalLink;

  email : string = "pasang@gmail.com";
}
