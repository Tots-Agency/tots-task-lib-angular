import { Component, Input, ViewContainerRef } from '@angular/core';
import { TotsComponentTask } from '../../entities/tots-component-task';
import { TotsDetailTaskModalConfig } from '../../entities/tots-detail-task-modal-config';

@Component({
  selector: 'tots-print-extra-component-task',
  templateUrl: './print-extra-component-task.component.html',
  styleUrls: ['./print-extra-component-task.component.css']
})
export class PrintExtraComponentTaskComponent {
  @Input() config!: TotsDetailTaskModalConfig;
  @Input() component!: TotsComponentTask;

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.component.component);
    (<any>view.instance).config = this.config;
    (<any>view.instance).component = this.component;
  }
}
