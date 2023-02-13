import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignOnlyViewTaskComponent } from './assign-only-view-task.component';

describe('AssignOnlyViewTaskComponent', () => {
  let component: AssignOnlyViewTaskComponent;
  let fixture: ComponentFixture<AssignOnlyViewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignOnlyViewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignOnlyViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
