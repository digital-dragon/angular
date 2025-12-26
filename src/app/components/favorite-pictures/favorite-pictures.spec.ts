import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePictures } from './favorite-pictures';

describe('FavoritePictures', () => {
  let component: FavoritePictures;
  let fixture: ComponentFixture<FavoritePictures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritePictures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePictures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
