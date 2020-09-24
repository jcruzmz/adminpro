import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linktheme = document.querySelector('#theme');
  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linktheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linktheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach(link => {
      link.classList.remove('working');
      const bntTheme = link.getAttribute('data-theme');
      const bntThemeUrl = `./assets/css/colors/${bntTheme}.css`;
      const currentTheme = this.linktheme.getAttribute('href');
      if (bntThemeUrl === currentTheme) {
        link.classList.add('working');
      }
    });
  }
}
