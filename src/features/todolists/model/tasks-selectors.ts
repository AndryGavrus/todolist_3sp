import type {RootState} from '../../../app/store'
import { TasksState } from '../ui/Todolists/TodolistItem/Tasks/Tasks'

export const selectTasks = (state: RootState): TasksState => state.tasks
