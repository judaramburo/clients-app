import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  course: string = 'Spring 5 and Angular 9 course';
  teacher: string = 'Andres Guzman';
}
