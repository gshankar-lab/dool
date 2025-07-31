import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  @Input() templeData: any[] = [];

  ngOnInit(): void {
    console.log('templeData on init:', this.templeData);
  }
}
