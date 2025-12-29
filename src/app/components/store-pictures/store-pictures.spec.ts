import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePictures } from './store-pictures';

describe('StorePictures', () => {
  let component: StorePictures;
  let fixture: ComponentFixture<StorePictures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorePictures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePictures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
