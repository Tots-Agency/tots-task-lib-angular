import { Component, Input } from '@angular/core';
import { TotsBaseColumnComponent } from '@tots/table';
import { TotsTask } from '../../entities/task';

@Component({
  selector: 'tots-tags-task-column',
  templateUrl: './tags-task-column.component.html',
  styleUrls: ['./tags-task-column.component.css']
})
export class TagsTaskColumnComponent extends TotsBaseColumnComponent {

  @Input() override item!: TotsTask;

}
