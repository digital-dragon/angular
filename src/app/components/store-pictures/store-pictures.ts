import { Component, inject } from '@angular/core';

import { Picture } from '../../types/picture';
import { PictureCard } from '../picture-card/picture-card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { PicturesStore } from '../../services/pictures.store';

@Component({
  selector: 'app-store-pictures',
  imports: [PictureCard, CommonModule, RouterModule],
  templateUrl: './store-pictures.html',
  styleUrl: './store-pictures.css',
})
export class StorePictures {
  store = inject(Store);
  pictures = inject(PicturesStore).pictures;
}
