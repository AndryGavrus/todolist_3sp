import { Todolist } from "@/App";
import { RootState } from "@/app/store";

export const selectTodolists = (state: RootState): Todolist[] => state.todolists
