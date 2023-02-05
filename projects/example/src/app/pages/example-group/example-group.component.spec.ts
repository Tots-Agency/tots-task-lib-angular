import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleGroupComponent } from './example-group.component';

describe('ExampleGroupComponent', () => {
  let component: ExampleGroupComponent;
  let fixture: ComponentFixture<ExampleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
