import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AboutComponent} from './about/about.component';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './hero/hero.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {TeamsComponent} from './teams/teams.component';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, CommonModule, HeroComponent, SkillsComponent, ProjectsComponent, TeamsComponent, BlogsComponent, BlogDetailComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  darkMode = true;
  currentView = 'portfolio';
  selectedBlogArticle: any = null;

  ngOnInit() {
    // Set dark mode as default
    this.darkMode = true;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
  handleBlogReadMore(article: any) {
    this.selectedBlogArticle = article;
    this.currentView = 'blog-detail';

    // Scroll to the top of the page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }

  handleProjectReadMore(project: any) {
    // Handle project read more if needed
    console.log('Project read more:', project);
  }

  handleBackToBlog() {
    this.currentView = 'portfolio'; // Switch back to the portfolio view
    this.selectedBlogArticle = null;

    // Scroll to the blog section
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  handleNavigateToSection(sectionId: string) {
    // Switch back to portfolio view first
    this.currentView = 'portfolio';
    this.selectedBlogArticle = null;

    // Wait for view change then scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
