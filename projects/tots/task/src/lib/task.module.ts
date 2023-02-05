import { NgModule } from '@angular/core';

/** Tots Libraries */
import { TotsCoreModule } from '@tots/core';
import { TotsTableModule } from '@tots/table';

/** Components */
import { TotsPrintGroupTaskComponent } from './components/tots-print-group-task/tots-print-group-task.component';

@NgModule({
  declarations: [
    
    /** Components */
    TotsPrintGroupTaskComponent
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
