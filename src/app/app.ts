import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-fe';
  greeting = 'Hello Nasa!';
}
