import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Input() sidebardata: any[] = [];
  @Output() filtersChanged = new EventEmitter<{ [key: string]: string[] }>();

  selectedFilters: { [key: string]: string[] } = {};
  showAllMap: { [key: string]: boolean } = {};
  deitySearch: string = '';

  toggleFilterSelection(filterHeading: string, name: string) {
    if (!this.selectedFilters[filterHeading]) {
      this.selectedFilters[filterHeading] = [];
    }

    const index = this.selectedFilters[filterHeading].indexOf(name);
    if (index === -1) {
      this.selectedFilters[filterHeading].push(name);
    } else {
      this.selectedFilters[filterHeading].splice(index, 1);
    }

    // Emit updated filters
    this.filtersChanged.emit(this.selectedFilters);
  }

  isChecked(filterHeading: string, name: string): boolean {
    return this.selectedFilters[filterHeading]?.includes(name);
  }

  toggleShowAll(filter: any) {
    this.showAllMap[filter.heading] = !this.showAllMap[filter.heading];
  }

  getVisibleNames(filter: any): string[] {
    let names = filter.names;

    if (filter.heading === 'Deity' && this.deitySearch.trim()) {
      names = names.filter((name: string) =>
        name.toLowerCase().includes(this.deitySearch.toLowerCase())
      );
    }

    if (!this.showAllMap[filter.heading]) {
      return names.slice(0, 5);
    }

    return names;
  }
}
