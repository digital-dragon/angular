import {
  AfterViewInit,
  Component,
  OnInit,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { Api } from '../../services/api';
import { Picture } from '../../types/picture';
import { PictureCard } from '../picture-card/picture-card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [PictureCard, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  api = inject(Api);
  cdf = inject(ChangeDetectorRef);
  pictures: Picture[] = [];
  filteredPictures: Picture[] = [];

  data = this.api.getPictures();

  ngOnInit(): void {
    this.api.getPictures().subscribe((pictures) => {
      this.pictures = pictures;
      this.filteredPictures = pictures;
      this.cdf.detectChanges();
    });
  }

  filterResults(filterValue: string) {
    if (!filterValue) this.filteredPictures = this.pictures;
    this.filteredPictures = this.pictures.filter((picture: any) =>
      picture?.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
