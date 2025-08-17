import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AboutComponent} from './about/about.component';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './hero/hero.component';
import {SkillsComponent} from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, CommonModule, HeroComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  darkMode = false;
  currentView = 'portfolio';
  selectedBlogArticle: any = null;

  ngOnInit() {
    // Check for user's preferred color scheme
    this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  handleBlogReadMore(article: any) {
    this.selectedBlogArticle = article;
    this.currentView = 'blog-detail';
  }

  handleProjectReadMore(project: any) {
    // Handle project read more if needed
    console.log('Project read more:', project);
  }

  handleBackToBlog() {
    this.currentView = 'portfolio';
    this.selectedBlogArticle = null;
  }
}
