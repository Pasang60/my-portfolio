import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faPaperPlane,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faIcons
} from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() darkMode = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  isSubmitted = false;

  // Contact Information
  contactInfo: ContactInfo[] = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'pasanggelbu@gmail.com',
      link: 'mailto:pasanggelbu@gmail.com',
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+977 9840757252',
      link: 'tel:+9779840757252',
    },
    {
      icon: 'map-pin',
      title: 'Location',
      value: 'Kathmandu, Nepal',
      link: '#',
    },
  ];

  // Icon mapping
  contactIcons = {
    mail: faEnvelope,
    phone: faPhone,
    'map-pin': faMapMarkerAlt,
  };

  faPaperPlane = faPaperPlane;
  faCheckCircle = faCheckCircle;
  faIcons = faIcons;

  async handleSubmit() {
    this.isSubmitting = true;

    const serviceId = 'service_swgz77p';
    const contactTemplateId = 'template_ueabj5s'; // Template for sending to YOU
    const autoReplyTemplateId = 'template_oh9O4ow'; // Template for replying to USER
    const publicKey = 'xRvAt2KT8qVsgosnI';

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
    };

    try {
      // Send to your inbox
      await emailjs.send(serviceId, contactTemplateId, templateParams, publicKey);

      // Send auto-reply
      const autoReplyParams = {
        name: this.formData.name, // Matches {{name}} in the template
        title: this.formData.subject, // Matches {{title}} in the template
        to_email: this.formData.email, // Ensure this matches the recipient field in the template
      };
      console.log('Auto-reply params:', autoReplyParams); // Debugging
      await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);

      this.isSubmitted = true;
      this.formData = {name: '', email: '', subject: '', message: ''};

    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
