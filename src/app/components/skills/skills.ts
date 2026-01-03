import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PORTFOLIO_DATA } from '../../shared/data';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule, AnimateOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories = PORTFOLIO_DATA.skillCategories;
}
