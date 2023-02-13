import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraComponentsTaskComponent } from './extra-components-task.component';

describe('ExtraComponentsTaskComponent', () => {
  let component: ExtraComponentsTaskComponent;
  let fixture: ComponentFixture<ExtraComponentsTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraComponentsTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraComponentsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
