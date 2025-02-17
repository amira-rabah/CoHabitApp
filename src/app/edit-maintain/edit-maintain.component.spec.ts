import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaintainComponent } from './edit-maintain.component';

describe('EditMaintainComponent', () => {
  let component: EditMaintainComponent;
  let fixture: ComponentFixture<EditMaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMaintainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
