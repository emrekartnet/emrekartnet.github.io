import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PORTFOLIO_DATA } from '../../shared/data';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, TranslateModule, AnimateOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = PORTFOLIO_DATA.experience;
}
