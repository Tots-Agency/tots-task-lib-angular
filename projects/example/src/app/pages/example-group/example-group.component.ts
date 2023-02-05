import { Component, OnInit } from '@angular/core';
import { TotsListResponse } from '@tots/core';

@Component({
  selector: 'app-example-group',
  templateUrl: './example-group.component.html',
  styleUrls: ['./example-group.component.scss']
})
export class ExampleGroupComponent implements OnInit {
  
    tasks = new TotsListResponse<any>();

    constructor() { }
  
    ngOnInit(): void {
      this.loadMockData();
    }

    loadMockData() {
      this.tasks.data = [
        { title: 'Design requested for the [project_title] ', active: 1, subtitle: 'AB232' },
        { title: 'Item 2', active: 1, subtitle: 'AB232', status: { title: 'Pending', color: 'gray' } },
        { title: 'Item 3', active: 0, subtitle: 'AB232', tags: [{ tag_id: 1, tag: { title: 'Tag 1', color: 'red' } }] },
        { title: 'Item 4', active: 0, subtitle: 'AB232' },
        { title: 'Item 5', active: 1, subtitle: 'AB232' },
      ]
    }
}
