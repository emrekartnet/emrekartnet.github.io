import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly THEME_KEY = 'portfolio-theme';

    // Signal for reactive theme state
    isDarkMode = signal<boolean>(this.getInitialTheme());

    constructor() {
        // Apply initial theme
        this.applyTheme(this.isDarkMode());
    }

    /**
     * Get initial theme from localStorage or system preference
     */
    private getInitialTheme(): boolean {
        const savedTheme = localStorage.getItem(this.THEME_KEY);

        if (savedTheme) {
            return savedTheme === 'dark';
        }

        // Check system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /**
     * Toggle between dark and light mode
     */
    toggleTheme(): void {
        const newTheme = !this.isDarkMode();
        this.isDarkMode.set(newTheme);
        this.applyTheme(newTheme);
        this.saveTheme(newTheme);
    }

    /**
     * Set specific theme
     */
    setTheme(isDark: boolean): void {
        this.isDarkMode.set(isDark);
        this.applyTheme(isDark);
        this.saveTheme(isDark);
    }

    /**
     * Apply theme to document
     */
    private applyTheme(isDark: boolean): void {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    /**
     * Save theme preference to localStorage
     */
    private saveTheme(isDark: boolean): void {
        localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
    }
}
