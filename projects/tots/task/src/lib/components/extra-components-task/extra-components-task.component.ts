import { Component, Input } from '@angular/core';
import { TotsComponentTask } from '../../entities/tots-component-task';
import { TotsDetailTaskModalConfig } from '../../entities/tots-detail-task-modal-config';

@Component({
  selector: 'tots-extra-components-task',
  templateUrl: './extra-components-task.component.html',
  styleUrls: ['./extra-components-task.component.css']
})
export class ExtraComponentsTaskComponent {
  @Input() config!: TotsDetailTaskModalConfig;
  @Input() position: 'top' | 'bottom' = 'top';

  getComponents(): Array<TotsComponentTask> {
    return this.config.extraComponents?.filter(c => c.position === this.position) || [];
  }
}
