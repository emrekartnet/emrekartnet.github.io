import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PORTFOLIO_DATA } from '../../shared/data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule, AnimateOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PORTFOLIO_DATA.projects;
  featuredProjects = this.projects.filter(p => p.featured);
  otherProjects = this.projects.filter(p => !p.featured);
}
