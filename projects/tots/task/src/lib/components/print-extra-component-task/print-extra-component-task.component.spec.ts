import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintExtraComponentTaskComponent } from './print-extra-component-task.component';

describe('PrintExtraComponentTaskComponent', () => {
  let component: PrintExtraComponentTaskComponent;
  let fixture: ComponentFixture<PrintExtraComponentTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintExtraComponentTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintExtraComponentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
