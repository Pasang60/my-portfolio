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
          <li><strong>Database:</strong> PostgreSQL, MySQL, or MongoDB</li>
          <li><strong>Communication:</strong> RESTful APIs for data exchange</li>
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
      image: 'assets/images/blog.png',
      author: 'Pasang Gelbu Sherpa',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['Angular', 'Spring Boot', 'Web Development', 'Full Stack']
    },
    {
      id: 2,
      title: 'Swagger Implementation and Its Usage Advantages in Spring Boot',
      excerpt: 'Learn about Swagger, its implementation in Spring Boot, and the advantages it offers for API documentation and testing.',
      content: `
    <h3>Introduction to Swagger</h3>
    <p>Swagger is an open-source framework for designing, building, documenting, and consuming RESTful APIs. It provides a user-friendly interface for developers to interact with APIs, making it easier to understand and test their functionality.</p>

    <h3>What is Swagger?</h3>
    <p>Swagger simplifies API development by providing tools to describe the structure of APIs using the OpenAPI Specification (OAS). It generates interactive API documentation that allows developers to test endpoints directly from the browser.</p>

    <h3>How to Use Swagger in Spring Boot</h3>
    <p>Integrating Swagger into a Spring Boot application involves the following steps:</p>
    <ul>
      <li>Add the required dependencies to your project.</li>
      <li>Configure Swagger in your Spring Boot application.</li>
      <li>Annotate your REST controllers to generate API documentation.</li>
    </ul>

    <h3>Dependencies Needed</h3>
    <p>To use Swagger in a Spring Boot application, include the following dependencies in your \`pom.xml\` (for Maven) or \`build.gradle\` (for Gradle):</p>

    <h4>Maven</h4>
    <pre><code>
    &lt;dependency&gt;
      &lt;groupId&gt;io.springfox&lt;/groupId&gt;
      &lt;artifactId&gt;springfox-boot-starter&lt;/artifactId&gt;
      &lt;version&gt;3.0.0&lt;/version&gt;
    &lt;/dependency&gt;
    </code></pre>

    <h4>Gradle</h4>
    <pre><code>
    implementation 'io.springfox:springfox-boot-starter:3.0.0'
    </code></pre>

    <h3>Configuring Swagger</h3>
    <p>Create a configuration class to customize Swagger settings:</p>
    <pre><code>
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import springfox.documentation.builders.PathSelectors;
    import springfox.documentation.builders.RequestHandlerSelectors;
    import springfox.documentation.spi.DocumentationType;
    import springfox.documentation.spring.web.plugins.Docket;

    @Configuration
    public class SwaggerConfig {
        @Bean
        public Docket api() {
            return new Docket(DocumentationType.OAS_30)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
        }
    }
    </code></pre>

    <h3>Annotating REST Controllers</h3>
    <p>Use Swagger annotations to document your API endpoints:</p>
    <pre><code>
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RestController;
    import io.swagger.annotations.ApiOperation;

    @RestController
    public class ExampleController {

        @ApiOperation(value = "Get a greeting message", notes = "This endpoint returns a simple greeting message.")
        @GetMapping("/greet")
        public String greet() {
            return "Hello, Swagger!";
        }
    }
    </code></pre>

    <h3>Advantages of Using Swagger</h3>
    <p>Swagger offers several benefits for API development:</p>
    <ul>
      <li><strong>Interactive Documentation:</strong> Provides a web-based UI to explore and test APIs.</li>
      <li><strong>Standardized Specification:</strong> Ensures consistency in API design using the OpenAPI Specification.</li>
      <li><strong>Ease of Testing:</strong> Allows developers to test endpoints directly from the Swagger UI.</li>
      <li><strong>Improved Collaboration:</strong> Simplifies communication between developers and stakeholders.</li>
      <li><strong>Code Generation:</strong> Generates client SDKs and server stubs in multiple programming languages.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>Swagger is a powerful tool for documenting and testing RESTful APIs. By integrating Swagger into your Spring Boot application, you can improve the development process, enhance collaboration, and ensure your APIs are well-documented and easy to use.</p>
  `,
      image: 'assets/images/swagger-big.png',
      author: 'Pasang Gelbu Sherpa',
      date: 'March 10, 2024',
      readTime: '10 min read',
      tags: ['Swagger', 'Spring Boot', 'API Documentation', 'RESTful APIs']
    },
    {
      id: 3,
      title: 'Mastering Git: Basic Syntax and Operations for Beginners',
      excerpt: 'Learn the basic Git commands like cloning a repository, checking status, adding files, committing changes, pulling, and pushing.',
      content: `
    <h3>Introduction to Git</h3>
    <p>Git is a distributed version control system that helps developers track changes in their code, collaborate with others, and manage their projects efficiently. In this guide, we'll cover the basic Git commands that every developer should know.</p>

    <h3>Cloning a Repository</h3>
    <p>To start working on an existing project, you can clone its repository using the following command:</p>
    <pre><code>git clone <repository-url></code></pre>
    <p>This will create a local copy of the repository on your machine.</p>

    <h3>Checking the Status</h3>
    <p>To check the current status of your repository, including any changes made to files, use:</p>
    <pre><code>git status</code></pre>
    <p>This command shows which files have been modified, added, or deleted.</p>

    <h3>Adding Files</h3>
    <p>To stage changes for commit, use the following command:</p>
    <pre><code>git add <file-name></code></pre>
    <p>To stage all changes, use:</p>
    <pre><code>git add .</code></pre>

    <h3>Committing Changes</h3>
    <p>Once you've staged your changes, you can commit them with a message describing the changes:</p>
    <pre><code>git commit -m "Your commit message here"</code></pre>
    <p>Make sure to write clear and concise commit messages to describe the changes.</p>

    <h3>Pulling Changes</h3>
    <p>To fetch and merge changes from a remote repository, use:</p>
    <pre><code>git pull</code></pre>
    <p>This ensures your local repository is up-to-date with the remote repository.</p>

    <h3>Pushing Changes</h3>
    <p>To upload your local commits to a remote repository, use:</p>
    <pre><code>git push</code></pre>
    <p>This will update the remote repository with your latest changes.</p>

    <h3>Conclusion</h3>
    <p>These basic Git commands are essential for any developer working with version control. By mastering these operations, you can effectively manage your codebase and collaborate with your team.</p>
  `,
      image: 'assets/images/git.png',
      author: 'Pasang Gelbu Sherpa',
      date: 'March 5, 2024',
      readTime: '8 min read',
      tags: ['Git', 'Version Control', 'Development', 'Basics']
    }
  ];
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEye = faEye;
  protected readonly faCalendar = faCalendar;
  protected readonly faUser = faUser;
}
