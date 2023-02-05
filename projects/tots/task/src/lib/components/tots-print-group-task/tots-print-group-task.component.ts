import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TotsListResponse } from '@tots/core';
import { StringColumnComponent, TotsActionTable, TotsTableComponent, TotsTableConfig } from '@tots/table';
import { of } from 'rxjs';
import { TagsTaskColumnComponent } from '../../../public-api';
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
      { key: 'title', component: StringColumnComponent, title: 'Titulo', field_key: 'title', hasOrder: false },
      { key: 'tags', component: TagsTaskColumnComponent, title: 'Category', hasOrder: false },
      /*{ key: 'include', component: BooleanColumnComponent, title: 'Activo', field_key: 'active', hasOrder: false },
      { key: 'home', component: IconButtonColumnComponent, title: 'asd', field_key: 'active', hasOrder: false, extra: { icon: 'home', action: 'click-home' } },
      { key: 'more', component: MoreMenuColumnComponent, title: '', extra: { width: '60px', actions: [
        { icon: 'add', title: 'Editar', key: 'edit' },
        { icon: 'add', title: 'Eliminar', key: 'remove' },
      ]} },*/
    ];
    this.config.obs = of(this.tasks);
  }
}
