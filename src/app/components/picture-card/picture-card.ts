import { Component, Input } from '@angular/core';
import { Picture } from '../../types/picture';

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
    </div>
  `,
  styleUrl: './picture-card.css',
})
export class PictureCard {
  @Input() picture!: Picture;
}
