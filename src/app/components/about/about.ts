import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PORTFOLIO_DATA } from '../../shared/data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule, AnimateOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  profile = PORTFOLIO_DATA.profile;
  education = PORTFOLIO_DATA.education;
}
