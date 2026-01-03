import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PORTFOLIO_DATA } from '../../shared/data';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  profile = PORTFOLIO_DATA.profile;
  currentYear = new Date().getFullYear();
}
