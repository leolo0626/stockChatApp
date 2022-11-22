import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
    
  }
  
  onLogout() {
    this.userService.logout();
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

}
