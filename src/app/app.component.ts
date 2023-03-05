import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName="Duda";

  userData  = {
    email:'joaquim@gmail.com',
    role : 'Admin'
  }

  title = 'Curso Angular';
}
