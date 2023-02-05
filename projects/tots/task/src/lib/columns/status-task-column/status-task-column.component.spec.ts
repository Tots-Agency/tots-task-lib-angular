import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTaskColumnComponent } from './status-task-column.component';

describe('StatusTaskColumnComponent', () => {
  let component: StatusTaskColumnComponent;
  let fixture: ComponentFixture<StatusTaskColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTaskColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
