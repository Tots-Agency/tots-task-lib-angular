export class TotsTag {
    id?: number;
    title: string = '';
    color: string = '';
    type: number = 0;
    created_at?: string;
    updated_at?: string;
}

export class TotsTaskTag {
    id?: number;
    task_id: number = 0;
    tag_id: number = 0;

    tag?: TotsTag;
}