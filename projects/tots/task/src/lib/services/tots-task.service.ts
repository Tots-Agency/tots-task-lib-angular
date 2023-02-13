import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TotsDetailTaskModalComponent } from '../modals/tots-detail-task-modal/tots-detail-task-modal.component';
import { TotsTask } from '../entities/task';
import { TotsDetailTaskModalConfig } from '../entities/tots-detail-task-modal-config';
import { TotsActionTask } from '../entities/tots-action-task';

@Injectable({
  providedIn: 'root'
})
export class TotsTaskService {

  constructor(
    protected dialog: MatDialog
  ) { }
  
  openDetailModal(task: TotsTask): Observable<TotsActionTask> {
    let config = new TotsDetailTaskModalConfig();
    config.disableAssign = true;
    config.task = task;

    return this.dialog.open(TotsDetailTaskModalComponent, {
        data: config
    }).componentInstance.actionSubject;
  }
}
