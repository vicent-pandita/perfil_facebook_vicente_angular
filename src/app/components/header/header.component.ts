import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLight = false;
  ngOnInit(): void {
    // initialize theme based on prefers-color-scheme or default dark
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    this.isLight = prefersLight;
    this.applyTheme();
  }
  toggleTheme() {
    this.isLight = !this.isLight;
    this.applyTheme();
  }
  applyTheme() {
    if (this.isLight) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }
}
