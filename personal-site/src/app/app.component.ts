import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>{{title}}</div>
  <nav>
    <a routerLink="/about-me" routerLinkActive="active">About Met</a>
    <a routerLink="/interests" routerLinkActive="active">Interests</a>
  </nav>
  </div>
  <router-outlet></router-outlet>
  `
  //templateUrl: './app.component.html'
  // ,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
