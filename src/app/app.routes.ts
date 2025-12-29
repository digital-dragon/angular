import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { FavoritePictures } from './components/favorite-pictures/favorite-pictures';
import { StorePictures } from './components/store-pictures/store-pictures';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'favorites',
    component: FavoritePictures,
    title: 'Favorite Page',
  },
  {
    path: 'Store Pictures',
    component: StorePictures,
    title: 'Store Pictures',
  },
];
