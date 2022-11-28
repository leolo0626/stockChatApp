import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleDarkTheme(event: MatSlideToggleChange) {
    this.themeService.setDarkTheme(event.checked);
  }
  
  onLogout() {
    this.userService.logout();
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

}
