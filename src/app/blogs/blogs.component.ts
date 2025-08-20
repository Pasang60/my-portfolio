import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {faArrowRight, faCalendar, faEye, faUser} from '@fortawesome/free-solid-svg-icons';



interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  @Input() darkMode = false;
  @Output() readMore = new EventEmitter<BlogPost>();
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Modern Web Applications with Angular and Spring Boot',
      excerpt: 'Learn how to create scalable web applications using Angular frontend and Spring Boot backend with best practices and real-world examples.',
      content: `
        <h3>Introduction</h3>
        <p>In today's rapidly evolving web development landscape, choosing the right technology stack is crucial for building robust, scalable, and maintainable applications. The combination of Angular and Spring Boot has become increasingly popular among developers and enterprises for creating full-stack web applications.</p>

        <h3>Why Angular and Spring Boot?</h3>
        <p>Angular, developed by Google, is a powerful frontend framework that offers a comprehensive solution for building dynamic web applications. It provides features like two-way data binding, dependency injection, and a robust CLI that streamlines the development process.</p>

        <p>Spring Boot, on the other hand, is a Java-based framework that simplifies backend development by providing auto-configuration and production-ready features out of the box. Together, they form a powerful full-stack solution.</p>

        <h3>Key Benefits</h3>
        <ul>
          <li><strong>Type Safety:</strong> Both frameworks support TypeScript/Java, providing strong typing and better IDE support</li>
          <li><strong>Scalability:</strong> Both are designed to handle enterprise-level applications</li>
          <li><strong>Community Support:</strong> Large, active communities and extensive documentation</li>
          <li><strong>Testing:</strong> Built-in testing frameworks and tools</li>
          <li><strong>Performance:</strong> Optimized for production environments</li>
        </ul>

        <h3>Architecture Overview</h3>
        <p>A typical Angular-Spring Boot application follows a clear separation of concerns:</p>
        <ul>
          <li><strong>Frontend (Angular):</strong> Handles user interface, routing, and client-side logic</li>
          <li><strong>Backend (Spring Boot):</strong> Manages business logic, data processing, and API endpoints</li>
          <li><strong>Database:</strong> PostgreSQL, MySQL, or other relational databases</li>
          <li><strong>Communication:</strong> RESTful APIs or GraphQL for data exchange</li>
        </ul>

        <h3>Best Practices</h3>
        <p>When building applications with this stack, consider the following best practices:</p>
        <ul>
          <li>Implement proper error handling and validation on both frontend and backend</li>
          <li>Use JWT tokens for secure authentication</li>
          <li>Follow RESTful API design principles</li>
          <li>Implement proper logging and monitoring</li>
          <li>Use environment-specific configurations</li>
          <li>Write comprehensive unit and integration tests</li>
        </ul>

        <h3>Conclusion</h3>
        <p>The Angular and Spring Boot combination provides a solid foundation for building modern web applications. With proper architecture and best practices, you can create applications that are not only functional but also maintainable and scalable for the long term.</p>
      `,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Pasang Gelbu Sherpa',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['Angular', 'Spring Boot', 'Web Development', 'Full Stack']
    },
    {
      id: 2,
      title: 'Database Design Best Practices for Modern Applications',
      excerpt: 'Explore essential database design principles and optimization techniques for building efficient and scalable database systems.',
      content: `
        <h3>Introduction to Database Design</h3>
        <p>Database design is the foundation of any successful application. A well-designed database ensures data integrity, optimal performance, and scalability as your application grows. In this comprehensive guide, we'll explore the essential principles and best practices for modern database design.</p>

        <h3>Fundamental Design Principles</h3>
        <p>Before diving into specific techniques, it's important to understand the core principles that guide effective database design:</p>

        <h4>1. Normalization</h4>
        <p>Normalization is the process of organizing data to minimize redundancy and dependency. The main normal forms include:</p>
        <ul>
          <li><strong>First Normal Form (1NF):</strong> Eliminate repeating groups and ensure atomic values</li>
          <li><strong>Second Normal Form (2NF):</strong> Remove partial dependencies</li>
          <li><strong>Third Normal Form (3NF):</strong> Eliminate transitive dependencies</li>
        </ul>

        <h4>2. Data Integrity</h4>
        <p>Maintain data accuracy and consistency through:</p>
        <ul>
          <li>Primary key constraints</li>
          <li>Foreign key constraints</li>
          <li>Check constraints</li>
          <li>Unique constraints</li>
          <li>Not null constraints</li>
        </ul>

        <h3>Modern Database Technologies</h3>
        <p>Today's applications can choose from various database technologies:</p>

        <h4>Relational Databases</h4>
        <ul>
          <li><strong>PostgreSQL:</strong> Advanced features, strong ACID compliance</li>
          <li><strong>MySQL:</strong> Wide adoption, good performance</li>
          <li><strong>SQLite:</strong> Lightweight, embedded database</li>
        </ul>

        <h4>NoSQL Databases</h4>
        <ul>
          <li><strong>MongoDB:</strong> Document-based, flexible schema</li>
          <li><strong>Redis:</strong> In-memory, high-performance caching</li>
          <li><strong>Elasticsearch:</strong> Full-text search and analytics</li>
        </ul>

        <h3>Performance Optimization</h3>
        <p>Optimizing database performance involves several strategies:</p>

        <h4>Indexing Strategies</h4>
        <ul>
          <li>Create indexes on frequently queried columns</li>
          <li>Use composite indexes for multi-column queries</li>
          <li>Monitor and maintain index usage</li>
          <li>Avoid over-indexing to prevent write performance issues</li>
        </ul>

        <h4>Query Optimization</h4>
        <ul>
          <li>Use EXPLAIN plans to analyze query performance</li>
          <li>Avoid SELECT * statements</li>
          <li>Use appropriate JOIN types</li>
          <li>Implement proper WHERE clause filtering</li>
        </ul>

        <h3>Scalability Considerations</h3>
        <p>As your application grows, consider these scalability options:</p>
        <ul>
          <li><strong>Vertical Scaling:</strong> Increase server resources</li>
          <li><strong>Horizontal Scaling:</strong> Distribute data across multiple servers</li>
          <li><strong>Read Replicas:</strong> Separate read and write operations</li>
          <li><strong>Sharding:</strong> Partition data across multiple databases</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Effective database design is crucial for building robust, scalable applications. By following these best practices and staying updated with modern database technologies, you can create systems that perform well and adapt to changing requirements.</p>
      `,
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Pasang Gelbu Sherpa',
      date: 'March 10, 2024',
      readTime: '12 min read',
      tags: ['Database', 'PostgreSQL', 'Optimization', 'Best Practices']
    },
    {
      id: 3,
      title: 'Mastering Git: Advanced Tips and Tricks for Developers',
      excerpt: 'Discover advanced Git techniques and workflows that will improve your development productivity and collaboration with your team.',
      content: `
        <h3>Beyond Basic Git Commands</h3>
        <p>While most developers are familiar with basic Git commands like add, commit, and push, mastering advanced Git techniques can significantly improve your development workflow and collaboration with team members. This guide will explore powerful Git features that every developer should know.</p>

        <h3>Advanced Branching Strategies</h3>
        <p>Effective branching strategies are crucial for team collaboration and project organization:</p>

        <h4>Git Flow</h4>
        <p>Git Flow is a branching model that defines specific roles for different branches:</p>
        <ul>
          <li><strong>master:</strong> Production-ready code</li>
          <li><strong>develop:</strong> Integration branch for features</li>
          <li><strong>feature:</strong> New feature development</li>
          <li><strong>release:</strong> Prepare for production release</li>
          <li><strong>hotfix:</strong> Quick fixes for production issues</li>
        </ul>

        <h4>GitHub Flow</h4>
        <p>A simpler alternative to Git Flow:</p>
        <ul>
          <li>Create feature branches from main</li>
          <li>Make commits and push regularly</li>
          <li>Open pull request for review</li>
          <li>Merge to main after approval</li>
          <li>Deploy from main branch</li>
        </ul>

        <h3>Powerful Git Commands</h3>
        <p>These advanced commands can save you time and help you work more efficiently:</p>

        <h4>Interactive Rebase</h4>
        <p>Clean up your commit history before merging:</p>
        <pre><code>git rebase -i HEAD~3</code></pre>
        <p>This allows you to:</p>
        <ul>
          <li>Squash multiple commits into one</li>
          <li>Reword commit messages</li>
          <li>Reorder commits</li>
          <li>Drop unwanted commits</li>
        </ul>

        <h4>Cherry Pick</h4>
        <p>Apply specific commits from one branch to another:</p>
        <pre><code>git cherry-pick <commit-hash></code></pre>

        <h4>Bisect</h4>
        <p>Find the commit that introduced a bug using binary search:</p>
        <pre><code>git bisect start
git bisect bad HEAD
git bisect good <known-good-commit></code></pre>

        <h3>Collaboration Best Practices</h3>
        <p>Working effectively with a team requires following established practices:</p>

        <h4>Commit Message Guidelines</h4>
        <ul>
          <li>Use imperative mood in subject line</li>
          <li>Keep subject line under 50 characters</li>
          <li>Include detailed description when necessary</li>
          <li>Reference issue numbers when applicable</li>
        </ul>

        <h4>Pull Request Etiquette</h4>
        <ul>
          <li>Write clear, descriptive titles</li>
          <li>Provide detailed descriptions</li>
          <li>Keep changes focused and small</li>
          <li>Respond promptly to review comments</li>
          <li>Test thoroughly before requesting review</li>
        </ul>

        <h3>Git Hooks and Automation</h3>
        <p>Automate common tasks and enforce standards using Git hooks:</p>

        <h4>Pre-commit Hooks</h4>
        <ul>
          <li>Run linting and formatting tools</li>
          <li>Execute test suites</li>
          <li>Validate commit messages</li>
          <li>Check for security vulnerabilities</li>
        </ul>

        <h4>Pre-push Hooks</h4>
        <ul>
          <li>Run comprehensive test suites</li>
          <li>Perform security scans</li>
          <li>Check code coverage thresholds</li>
        </ul>

        <h3>Troubleshooting Common Issues</h3>
        <p>Every developer encounters Git issues. Here are solutions to common problems:</p>

        <h4>Undoing Changes</h4>
        <ul>
          <li><code>git reset --hard HEAD~1</code> - Remove last commit and changes</li>
          <li><code>git revert <commit></code> - Create new commit that undoes changes</li>
          <li><code>git checkout -- <file></code> - Discard changes to specific file</li>
        </ul>

        <h4>Resolving Merge Conflicts</h4>
        <ul>
          <li>Use visual merge tools like VS Code or GitKraken</li>
          <li>Understand conflict markers (<<<, ===, >>>)</li>
          <li>Test thoroughly after resolving conflicts</li>
          <li>Consider using merge strategies for recurring conflicts</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Mastering advanced Git techniques will make you a more effective developer and better team collaborator. Practice these commands and workflows in safe environments before using them in production projects. Remember that Git's power comes with responsibility – always double-check your actions, especially when rewriting history.</p>
      `,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Pasang Gelbu Sherpa',
      date: 'March 5, 2024',
      readTime: '10 min read',
      tags: ['Git', 'Version Control', 'Development', 'Productivity']
    }
  ];
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEye = faEye;
  protected readonly faCalendar = faCalendar;
  protected readonly faUser = faUser;
}
