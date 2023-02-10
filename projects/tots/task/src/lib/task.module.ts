import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Tots Libraries */
import { TotsCoreModule } from '@tots/core';
import { TotsTableModule } from '@tots/table';
import { TotsDateColumnModule } from '@tots/date-column';

/** Columns */
import { TagsTaskColumnComponent } from './columns/tags-task-column/tags-task-column.component';
import { AssignTaskColumnComponent } from './columns/assign-task-column/assign-task-column.component';
import { StatusTaskColumnComponent } from './columns/status-task-column/status-task-column.component';

/** Components */
import { TotsPrintGroupTaskComponent } from './components/tots-print-group-task/tots-print-group-task.component';

/** Modals */
import { TotsDetailTaskModalComponent } from './modals/tots-detail-task-modal/tots-detail-task-modal.component';




@NgModule({
  declarations: [
    /** Columns */
    TagsTaskColumnComponent,
    AssignTaskColumnComponent,
    StatusTaskColumnComponent,

    /** Components */
    TotsPrintGroupTaskComponent,

    /** Modals */
    TotsDetailTaskModalComponent,
  ],
  imports: [
    CommonModule,
    /** Tots Libraries */
    TotsCoreModule,
    TotsTableModule,
    TotsDateColumnModule
  ],
  exports: [
    /** Components */
    TotsPrintGroupTaskComponent,

    /** Modals */
    TotsDetailTaskModalComponent,
  ]
})
export class TotsTaskModule { }
