import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'nav.home', target: 'home' },
    { label: 'nav.about', target: 'about' },
    { label: 'nav.skills', target: 'skills' },
    { label: 'nav.experience', target: 'experience' },
    { label: 'nav.projects', target: 'projects' },
    { label: 'nav.contact', target: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  getCurrentLanguageText(): string {
    return this.languageService.currentLanguage() === 'tr' ? 'EN' : 'TR';
  }
}
