import { Component, OnInit, ViewChild } from '@angular/core';
import { TotsListResponse } from '@tots/core';
import { StringColumnComponent, TotsActionTable, TotsTableComponent, TotsTableConfig } from '@tots/table';
import { of } from 'rxjs';

@Component({
  selector: 'tots-print-group-task',
  templateUrl: './tots-print-group-task.component.html',
  styleUrls: ['./tots-print-group-task.component.scss']
})
export class TotsPrintGroupTaskComponent implements OnInit {

  @ViewChild('tableComp') tableComp!: TotsTableComponent;

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
      /*{ key: 'subtitle', component: TwoStringColumnComponent, title: 'Titulo', field_key: 'title', hasOrder: false, extra: { field_subtitle_key: 'subtitle' } },
      { key: 'include', component: BooleanColumnComponent, title: 'Activo', field_key: 'active', hasOrder: false },
      { key: 'home', component: IconButtonColumnComponent, title: 'asd', field_key: 'active', hasOrder: false, extra: { icon: 'home', action: 'click-home' } },
      { key: 'more', component: MoreMenuColumnComponent, title: '', extra: { width: '60px', actions: [
        { icon: 'add', title: 'Editar', key: 'edit' },
        { icon: 'add', title: 'Eliminar', key: 'remove' },
      ]} },*/
    ];
  }

  loadMockData() {
    let data = new TotsListResponse();
    data.data = [
      { title: 'Design requested for the [project_title] ', active: 1, subtitle: 'AB232' },
      { title: 'Item 2', active: 1, subtitle: 'AB232' },
      { title: 'Item 3', active: 0, subtitle: 'AB232' },
      { title: 'Item 4', active: 0, subtitle: 'AB232' },
      { title: 'Item 5', active: 1, subtitle: 'AB232' },
    ]

    this.config.obs = of(data);
  }
}
