import { Component } from '@angular/core';

@Component({
  selector: 'tots-detail-task-modal',
  templateUrl: './tots-detail-task-modal.component.html',
  styleUrls: ['./tots-detail-task-modal.component.scss']
})
export class TotsDetailTaskModalComponent {
  isLoading = false;

  /*constructor(
    protected dialogRef: MatDialogRef<TotsDetailTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    this.task = data.task;
  }*/
}
