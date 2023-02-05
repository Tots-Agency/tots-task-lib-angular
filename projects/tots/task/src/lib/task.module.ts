import { NgModule } from '@angular/core';

/** Tots Libraries */
import { TotsCoreModule } from '@tots/core';
import { TotsTableModule } from '@tots/table';

/** Components */
import { TotsPrintGroupTaskComponent } from './components/tots-print-group-task/tots-print-group-task.component';
import { TagsTaskColumnComponent } from './columns/tags-task-column/tags-task-column.component';
import { AssignTaskColumnComponent } from './columns/assign-task-column/assign-task-column.component';
import { StatusTaskColumnComponent } from './columns/status-task-column/status-task-column.component';

@NgModule({
  declarations: [
    
    /** Components */
    TotsPrintGroupTaskComponent,
         TagsTaskColumnComponent,
         AssignTaskColumnComponent,
         StatusTaskColumnComponent
  ],
  imports: [
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
