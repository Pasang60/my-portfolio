import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faIcons, faPaperPlane} from '@fortawesome/free-solid-svg-icons';


interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() darkMode = false;

  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'pasang.sherpa@example.com',
      link: 'mailto:pasang.sherpa@example.com'
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+977 98XXXXXXXX',
      link: 'tel:+97798XXXXXXXX'
    },
    {
      icon: 'map-pin',
      title: 'Location',
      value: 'Kathmandu, Nepal',
      link: '#'
    }
  ];

  async handleSubmit() {
    this.isSubmitting = true;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would send the form data to your backend
    // which would then send emails using a service like SendGrid, Mailgun, etc.
    console.log('Form submitted:', this.formData);

    this.isSubmitting = false;
    this.isSubmitted = true;

    // Reset form after submission
    setTimeout(() => {
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.isSubmitted = false;
    }, 3000);
  }

  faPaperPlane = faPaperPlane;
  faCheckCircle = faCheckCircle;
  faIcons = faIcons;
}
