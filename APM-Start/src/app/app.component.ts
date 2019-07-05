import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light>
    <a class='navbar-brand'>{{pageTitle}}>/a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link'>Home</a></li>
      <li><a class='nav-link'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  ` 
            /* './app.component.html'
            `<div>
              <h1>{{ pageTitle }}</h1>
              <div> My First Component!</div>
              <pm-products></pm-products>
            </div>` */
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}