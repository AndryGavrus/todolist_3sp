import { TasksState } from "@/App";
import { RootState } from "@/app/store";

export const selectTasks = (state: RootState): TasksState => state.tasks
