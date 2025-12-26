import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NasaPicturesActions } from './actions/nasa-pictures.actions';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  store = inject(Store);

  protected title = 'angular-fe';
  greeting = 'Hello Nasa!';

  ngOnInit(): void {
    this.store.dispatch(NasaPicturesActions.loadNasaPictures());
  }
}
