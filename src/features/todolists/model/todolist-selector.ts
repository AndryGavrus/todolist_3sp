import {RootState} from "../../../app/store.ts";
import {Todolist} from "@/features/todoLists/model/todolists-reducer.ts";

export const selectTodoLists = (state: RootState): Todolist[] => state.todolists