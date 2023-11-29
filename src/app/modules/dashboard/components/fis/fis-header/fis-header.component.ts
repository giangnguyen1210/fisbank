import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-fis-header',
  templateUrl: './fis-header.component.html',
  styleUrls: ['./fis-header.component.scss']
})
export class FisHeaderComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    // Simulate loading time
    setTimeout(() => {
      this.themeService.isLoading = false;
    }, 2000);
  }
}
