import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTaskColumnComponent } from './assign-task-column.component';

describe('AssignTaskColumnComponent', () => {
  let component: AssignTaskColumnComponent;
  let fixture: ComponentFixture<AssignTaskColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTaskColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
