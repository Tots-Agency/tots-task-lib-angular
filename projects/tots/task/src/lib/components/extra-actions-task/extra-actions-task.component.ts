import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TotsActionTask } from '../../entities/tots-action-task';
import { TotsDetailTaskModalConfig } from '../../entities/tots-detail-task-modal-config';

@Component({
  selector: 'tots-extra-actions-task',
  templateUrl: './extra-actions-task.component.html',
  styleUrls: ['./extra-actions-task.component.scss']
})
export class ExtraActionsTaskComponent {
  @Input() config!: TotsDetailTaskModalConfig;

  @Output() clickAction: EventEmitter<TotsActionTask> = new EventEmitter<TotsActionTask>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickAction(action: TotsActionTask) {
    this.clickAction.emit(action);
  }
}
