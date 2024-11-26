import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetableComponent } from './updatetable.component';

describe('UpdatetableComponent', () => {
  let component: UpdatetableComponent;
  let fixture: ComponentFixture<UpdatetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatetableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
