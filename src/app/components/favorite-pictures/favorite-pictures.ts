import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCard } from '../picture-card/picture-card';
import { Picture } from '../../types/picture';
import { Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite-pictures',
  imports: [CommonModule, PictureCard, RouterModule],
  templateUrl: './favorite-pictures.html',
  styleUrl: './favorite-pictures.css',
})
export class FavoritePictures implements OnInit {
  pictures: Picture[] = [];
  store = inject(Store);

  ngOnInit(): void {
    this.store
      .select((state) => state.favoritePicture)
      .subscribe((pictures) => (this.pictures = pictures));
  }
}
