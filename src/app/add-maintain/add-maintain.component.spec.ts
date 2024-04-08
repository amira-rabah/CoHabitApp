import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintainComponent } from './add-maintain.component';

describe('AddMaintainComponent', () => {
  let component: AddMaintainComponent;
  let fixture: ComponentFixture<AddMaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMaintainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
