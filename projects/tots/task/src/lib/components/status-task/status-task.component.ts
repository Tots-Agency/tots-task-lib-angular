import { Component, Input } from '@angular/core';
import { TotsDetailTaskModalConfig } from '../../entities/tots-detail-task-modal-config';

@Component({
  selector: 'tots-status-task',
  templateUrl: './status-task.component.html',
  styleUrls: ['./status-task.component.scss']
})
export class StatusTaskComponent {
  @Input() config!: TotsDetailTaskModalConfig;
}
