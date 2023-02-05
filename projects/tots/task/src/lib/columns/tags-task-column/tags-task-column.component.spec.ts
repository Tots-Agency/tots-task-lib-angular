import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsTaskColumnComponent } from './tags-task-column.component';

describe('TagsTaskColumnComponent', () => {
  let component: TagsTaskColumnComponent;
  let fixture: ComponentFixture<TagsTaskColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsTaskColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsTaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
