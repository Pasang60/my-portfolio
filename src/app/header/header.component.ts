import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload, faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  id: string;
  label: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, FontAwesomeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() darkMode = false;
  @Input() currentView = 'portfolio';
  @Output() toggleDarkMode = new EventEmitter<void>();
  @Output() navigateToSection = new EventEmitter<string>();

  // Font Awesome icons
  faDownload = faDownload;
  faBars = faBars;
  faTimes = faTimes;
  faSun = faSun;
  faMoon = faMoon;

  isMenuOpen = false;
  activeSection = 'home';
  isScrolled = false;

  navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'teams', label: 'Teams' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = this.navItems.map(item => document.getElementById(item.id));
    const scrollPos = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPos) {
        this.activeSection = this.navItems[i].id;
        break;
      }
    }
  }

  scrollToSection(sectionId: string) {
    // If we're in blog detail view, emit navigation event to parent
    if (this.currentView === 'blog-detail') {
      this.navigateToSection.emit(sectionId);
    } else {
      this.performScroll(sectionId);
    }
    this.isMenuOpen = false;
  }

  private performScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV() {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '#'; // In a real app, this would be the path to your CV
    link.download = 'Pasang_Gelbu_Sherpa_CV.pdf';
    link.click();
  }
}
