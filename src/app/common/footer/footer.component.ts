import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  leftLinks = [
  {
    heading: 'About DOOJ',
    items: ['Overview', 'Temple Login', 'Create a Fundraiser', 'Request a Temple']
  },
  {
    heading: 'Quick Links',
    items: ['Explore Temples', 'All Events', 'All Fundraisers', 'Contact us']
  },
  {
    heading: 'Resources',
    items: ['Blog', 'Newsletter', 'Events', 'Help centre']
  }
];

rightLinks = [
  {
    heading: 'Social',
    items: [
      { label: 'Twitter', icon: 'bi bi-twitter' },
      { label: 'LinkedIn', icon: 'bi bi-linkedin' },
      { label: 'Facebook', icon: 'bi bi-facebook' },
      { label: 'Instagram', icon: 'bi bi-instagram' }
    ]
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Terms of Use', icon: "" },
      { label: 'Refund Policy', icon: "" },
      { label: 'Privacy Policy', icon: "" },
      { label: 'Shipping Policy', icon: "" }
    ]
  }
  
];

getAppSection = {
  heading: 'Get the app',
  icons: [
    {
      class: 'bi bi-apple', // Bootstrap Icons
      label: 'App Store',
      subtext: 'Download on the'
    },
    {
      class: 'bi bi-google-play',
      label: 'Google Play',
      subtext: 'Get it on'
    }
  ]
};




}
