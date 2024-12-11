import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleImageComponent } from './toggle-image.component';

describe('ToggleImageComponent', () => {
  let component: ToggleImageComponent;
  let fixture: ComponentFixture<ToggleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
