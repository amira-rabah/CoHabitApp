import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaintainComponent } from './view-maintain.component';

describe('ViewMaintainComponent', () => {
  let component: ViewMaintainComponent;
  let fixture: ComponentFixture<ViewMaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMaintainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
