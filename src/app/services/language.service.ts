import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private readonly LANGUAGE_KEY = 'portfolio-language';

    // Signal for reactive language state
    currentLanguage = signal<string>(this.getInitialLanguage());

    // Available languages
    availableLanguages = [
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' }
    ];

    constructor(private translate: TranslateService) {
        this.initializeLanguage();
    }

    /**
     * Initialize translation service with saved or default language
     */
    private initializeLanguage(): void {
        const language = this.currentLanguage();
        this.translate.setDefaultLang('tr');
        this.translate.use(language);
    }

    /**
     * Get initial language from localStorage or default to Turkish
     */
    private getInitialLanguage(): string {
        const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY);
        return savedLanguage || 'tr';
    }

    /**
     * Switch to a specific language
     */
    setLanguage(language: string): void {
        if (this.availableLanguages.some(lang => lang.code === language)) {
            this.currentLanguage.set(language);
            this.translate.use(language);
            this.saveLanguage(language);
        }
    }

    /**
     * Toggle between Turkish and English
     */
    toggleLanguage(): void {
        const newLanguage = this.currentLanguage() === 'tr' ? 'en' : 'tr';
        this.setLanguage(newLanguage);
    }

    /**
     * Save language preference to localStorage
     */
    private saveLanguage(language: string): void {
        localStorage.setItem(this.LANGUAGE_KEY, language);
    }

    /**
     * Get current language name
     */
    getCurrentLanguageName(): string {
        const lang = this.availableLanguages.find(l => l.code === this.currentLanguage());
        return lang ? lang.name : 'Türkçe';
    }
}
