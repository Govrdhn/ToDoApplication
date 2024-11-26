import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadspinnerComponent } from './loadspinner.component';

describe('LoadspinnerComponent', () => {
  let component: LoadspinnerComponent;
  let fixture: ComponentFixture<LoadspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadspinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
