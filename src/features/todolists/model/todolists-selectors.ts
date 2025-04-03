import type {RootState} from '../../../app/store'
import { Todolist } from '../ui/Todolists/Todolists'

export const selectTodolists = (state: RootState): Todolist[] => state.todolists
