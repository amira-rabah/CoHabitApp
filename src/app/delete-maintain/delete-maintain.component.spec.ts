import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMaintainComponent } from './delete-maintain.component';

describe('DeleteMaintainComponent', () => {
  let component: DeleteMaintainComponent;
  let fixture: ComponentFixture<DeleteMaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteMaintainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
