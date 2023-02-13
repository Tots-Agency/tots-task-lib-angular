import { TotsTask } from "./task";
import { TotsActionTask } from "./tots-action-task";

export class TotsDetailTaskModalConfig {
    task!: TotsTask;

    disableAssign?: boolean = false;
    extraActions?: Array<TotsActionTask>;
}