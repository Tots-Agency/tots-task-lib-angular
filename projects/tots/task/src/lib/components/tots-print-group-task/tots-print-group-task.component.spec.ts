import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsPrintGroupTaskComponent } from './tots-print-group-task.component';

describe('TotsPrintGroupTaskComponent', () => {
  let component: TotsPrintGroupTaskComponent;
  let fixture: ComponentFixture<TotsPrintGroupTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsPrintGroupTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsPrintGroupTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
