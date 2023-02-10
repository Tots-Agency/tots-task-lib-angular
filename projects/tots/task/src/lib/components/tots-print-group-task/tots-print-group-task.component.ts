import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TotsListResponse } from '@tots/core';
import { DateColumnComponent } from '@tots/date-column';
import { MoreMenuColumnComponent, StringColumnComponent, TotsActionTable, TotsTableComponent, TotsTableConfig } from '@tots/table';
import { of } from 'rxjs';
import { StatusTaskColumnComponent, TagsTaskColumnComponent } from '../../../public-api';
import { TotsTask } from '../../entities/task';

@Component({
  selector: 'tots-print-group-task',
  templateUrl: './tots-print-group-task.component.html',
  styleUrls: ['./tots-print-group-task.component.scss']
})
export class TotsPrintGroupTaskComponent implements OnInit {

  @ViewChild('tableComp') tableComp!: TotsTableComponent;

  @Input() tasks: TotsListResponse<TotsTask> = new TotsListResponse<TotsTask>();

  config = new TotsTableConfig();

  ngOnInit(): void {
    this.loadConfig();
  }

  onTableAction(action: TotsActionTable) {
    console.log(action);
  }

  loadConfig() {
    this.config.id = 'table-example';
    this.config.columns = [
      { key: 'title', component: StringColumnComponent, title: 'Task', field_key: 'title', hasOrder: false },
      { key: 'tags', component: TagsTaskColumnComponent, title: 'Category', hasOrder: false },
      { key: 'status', component: StatusTaskColumnComponent, title: 'Status', hasOrder: false },
      { key: 'created_at', component: DateColumnComponent, title: 'Date', field_key: 'created_at', hasOrder: false, extra: { format_in: 'YYYY-MM-DD', format_out: 'MM/DD/YYYY' } },
      { key: 'more', component: MoreMenuColumnComponent, title: '', extra: { width: '60px', actions: [
        { icon: 'add', title: 'Edit', key: 'edit' },
        { icon: 'add', title: 'Remove', key: 'remove' },
      ]} },
    ];
    this.config.obs = of(this.tasks);
  }
}
