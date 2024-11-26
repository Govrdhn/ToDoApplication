import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtasktableComponent } from './newtasktable.component';

describe('NewtasktableComponent', () => {
  let component: NewtasktableComponent;
  let fixture: ComponentFixture<NewtasktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewtasktableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewtasktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
