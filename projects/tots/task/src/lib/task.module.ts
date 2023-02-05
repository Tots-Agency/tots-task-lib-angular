import { NgModule } from '@angular/core';

/** Tots Libraries */
import { TotsCoreModule } from '@tots/core';
import { TotsTableModule } from '@tots/table';

/** Columns */
import { TagsTaskColumnComponent } from './columns/tags-task-column/tags-task-column.component';
import { AssignTaskColumnComponent } from './columns/assign-task-column/assign-task-column.component';
import { StatusTaskColumnComponent } from './columns/status-task-column/status-task-column.component';

/** Components */
import { TotsPrintGroupTaskComponent } from './components/tots-print-group-task/tots-print-group-task.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    /** Columns */
    TagsTaskColumnComponent,
    AssignTaskColumnComponent,
    StatusTaskColumnComponent,

    /** Components */
    TotsPrintGroupTaskComponent,
  ],
  imports: [
    CommonModule,
    /** Tots Libraries */
    TotsCoreModule,
    TotsTableModule
  ],
  exports: [
    /** Components */
    TotsPrintGroupTaskComponent
  ]
})
export class TotsTaskModule { }
