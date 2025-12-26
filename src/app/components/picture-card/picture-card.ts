import { Component, Input, inject } from '@angular/core';
import { Picture } from '../../types/picture';
import { Store } from '@ngrx/store';
import { FavoritePictureActions } from '../../actions/favorite-picture.actions';

@Component({
  selector: 'app-picture-card',
  imports: [],
  template: `
    <div>
      <div class="picture-poster">
        <img [src]="picture.url" [alt]="picture.title" />
      </div>
      <div>
        <h2>{{ picture!.title }}</h2>
        <h4>{{ picture!.date }}</h4>
      </div>
      <button (click)="addToFavorties()">Add to favorites</button>
    </div>
  `,
  styleUrl: './picture-card.css',
})
export class PictureCard {
  @Input() picture!: Picture;

  private store = inject(Store);

  addToFavorties() {
    this.store.dispatch(
      FavoritePictureActions.addFavoritePictures({
        favoritePicture: this.picture,
      })
    );
  }
}
