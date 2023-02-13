import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraActionsTaskComponent } from './extra-actions-task.component';

describe('ExtraActionsTaskComponent', () => {
  let component: ExtraActionsTaskComponent;
  let fixture: ComponentFixture<ExtraActionsTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraActionsTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraActionsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
