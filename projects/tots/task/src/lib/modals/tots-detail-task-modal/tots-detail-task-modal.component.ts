import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TotsActionTask } from '../../entities/tots-action-task';
import { TotsDetailTaskModalConfig } from '../../entities/tots-detail-task-modal-config';

@Component({
  selector: 'tots-detail-task-modal',
  templateUrl: './tots-detail-task-modal.component.html',
  styleUrls: ['./tots-detail-task-modal.component.scss']
})
export class TotsDetailTaskModalComponent {
  isLoading = false;

  actionSubject = new Subject<TotsActionTask>();

  constructor(
    protected dialogRef: MatDialogRef<TotsDetailTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public config: TotsDetailTaskModalConfig,
  ) {
    
  }

  clickAction(action: TotsActionTask) {
    this.actionSubject.next(action);
  }

  onClickClose() {
    this.actionSubject.next({ key: 'close' });
    this.dialogRef.close();
  }
}
