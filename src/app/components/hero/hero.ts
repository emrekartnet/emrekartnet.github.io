import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PORTFOLIO_DATA } from '../../shared/data';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslateModule, TypewriterDirective, AnimateOnScrollDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  profile = PORTFOLIO_DATA.profile;

  typewriterTexts = [
    'Computer Engineer',
    'Full-Stack Developer',
    'Backend Developer',
    '.NET Developer',
  ];
}
