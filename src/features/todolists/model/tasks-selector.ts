import {RootState} from "../../../app/store.ts";
import {TasksState} from "@/features/todoLists/model/tasks-reducer.ts";

export const selectTasks = (state: RootState): TasksState => state.tasks