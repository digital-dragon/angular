import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Picture } from '../types/picture';

export const NASA_API_KEY = 'NyUQfQpUxIA4WZGwHPp8rAKi2pvQHZJgq3iwksZI';
export const NASA_BASE_URL = 'https://api.nasa.gov';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);

  getPictures() {
    return this.http.get<Picture[]>(
      `${NASA_BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}&count=20`
    );
  }
}
