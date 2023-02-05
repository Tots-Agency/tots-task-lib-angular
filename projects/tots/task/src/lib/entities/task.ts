import { TotsTaskTag } from "./tag";

export class TotsTask {
    id?: number;
    title: string = '';
    group_id: number = 0;
    caption: string = '';
    deadline?: string;
    status_id: number = 0;
    priority: number = 0;
    item_id?: number;
    type: number = 0;
    is_archived: number = 0;
    data: any;
    created_at?: string;
    updated_at?: string;

    tags?: Array<TotsTaskTag>
}