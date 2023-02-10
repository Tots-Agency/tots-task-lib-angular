import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TotsDetailTaskModalConfig } from '../../entities/tots-detail-task-modal-config';

@Component({
  selector: 'tots-detail-task-modal',
  templateUrl: './tots-detail-task-modal.component.html',
  styleUrls: ['./tots-detail-task-modal.component.scss']
})
export class TotsDetailTaskModalComponent {
  isLoading = false;

  constructor(
    protected dialogRef: MatDialogRef<TotsDetailTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public config: TotsDetailTaskModalConfig,
  ) {
    
  }
}
