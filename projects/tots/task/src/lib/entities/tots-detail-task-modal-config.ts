import { TotsTask } from "./task";
import { TotsActionTask } from "./tots-action-task";
import { TotsComponentTask } from "./tots-component-task";

export class TotsDetailTaskModalConfig {
    task!: TotsTask;

    disableAssign?: boolean = false;
    extraActions?: Array<TotsActionTask>;
    extraComponents?: Array<TotsComponentTask>;
}