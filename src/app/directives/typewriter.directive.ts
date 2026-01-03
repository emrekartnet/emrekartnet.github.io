import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[appTypewriter]',
    standalone: true
})
export class TypewriterDirective implements OnInit, OnDestroy {
    @Input() appTypewriter: string[] = [];
    @Input() typingSpeed = 100;
    @Input() deletingSpeed = 50;
    @Input() pauseDuration = 2000;

    private translate = inject(TranslateService);
    private currentTextIndex = 0;
    private currentCharIndex = 0;
    private isDeleting = false;
    private translatedTexts: string[] = [];
    private langChangeSubscription?: Subscription;

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        // Subscribe to language changes
        this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
            this.loadTranslations();
        });

        this.loadTranslations();
    }

    ngOnDestroy(): void {
        this.langChangeSubscription?.unsubscribe();
    }

    private loadTranslations(): void {
        if (this.appTypewriter.length > 0) {
            // Translate all texts
            this.translatedTexts = this.appTypewriter.map(key =>
                this.translate.instant(key)
            );

            // Reset animation
            this.currentTextIndex = 0;
            this.currentCharIndex = 0;
            this.isDeleting = false;
            this.el.nativeElement.textContent = '';

            // Start typing
            this.type();
        }
    }

    private type(): void {
        if (this.translatedTexts.length === 0) return;

        const currentText = this.translatedTexts[this.currentTextIndex];

        if (this.isDeleting) {
            this.el.nativeElement.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;

            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.translatedTexts.length;
                setTimeout(() => this.type(), 500);
                return;
            }

            setTimeout(() => this.type(), this.deletingSpeed);
        } else {
            this.el.nativeElement.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;

            if (this.currentCharIndex === currentText.length) {
                this.isDeleting = true;
                setTimeout(() => this.type(), this.pauseDuration);
                return;
            }

            setTimeout(() => this.type(), this.typingSpeed);
        }
    }
}
