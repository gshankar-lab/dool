import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedCity: string = 'Chennai';
  selectedCurrency: string = 'GBP';
  TopHeaders = [
    {
      name: "Fundraisers"
    },
    {
      name: "Events"
    },
    {
      name: "Favorites"
    },
    {
      name: "English"
    }
  ]


  selectCity(city: string): void {
    this.selectedCity = city;
  }
  selectCurrency(currency: string): void {
    this.selectedCurrency = currency;
  }
}
