import { Component, Input } from '@angular/core';
import { TotsTask } from '../../entities/task';
import { TotsDetailTaskModalConfig } from '../../entities/tots-detail-task-modal-config';

@Component({
  selector: 'tots-assign-only-view-task',
  templateUrl: './assign-only-view-task.component.html',
  styleUrls: ['./assign-only-view-task.component.css']
})
export class AssignOnlyViewTaskComponent {
  @Input() config!: TotsDetailTaskModalConfig;
}
