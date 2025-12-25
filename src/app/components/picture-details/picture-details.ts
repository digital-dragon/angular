import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-picture-details',
  imports: [],
  template: ` <article></article> `,
  styleUrl: './picture-details.css',
})
export class PictureDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  api: Api = inject(Api);
}
