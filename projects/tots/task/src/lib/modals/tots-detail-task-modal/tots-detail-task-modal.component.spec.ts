import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsDetailTaskModalComponent } from './tots-detail-task-modal.component';

describe('TotsDetailTaskModalComponent', () => {
  let component: TotsDetailTaskModalComponent;
  let fixture: ComponentFixture<TotsDetailTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsDetailTaskModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsDetailTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
