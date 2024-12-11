import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMultipleImagesComponent } from './toggle-multiple-images.component';

describe('ToggleMultipleImagesComponent', () => {
  let component: ToggleMultipleImagesComponent;
  let fixture: ComponentFixture<ToggleMultipleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleMultipleImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleMultipleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
