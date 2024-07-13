import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Model/User';
import { Subscription } from 'rxjs';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authService: AuthService = inject(AuthService);
  isLoggedIn: boolean = false;
  private userSubject: Subscription;
  counterService: CounterService= inject(CounterService);

  ngOnInit(){
    this.counterService.increment('headerComponent')
    this.userSubject = this.authService.user.subscribe((user: User) => {
      console.log(user)
      this.isLoggedIn = user ? true : false;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSubject.unsubscribe();
  }
}
