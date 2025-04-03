import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {FilterButtons} from './FilterButtons/FilterButtons'
import {createTaskAC} from '@/features/todolists/model/tasks-reducer'
import {Tasks} from './Tasks/Tasks'
import {TodolistTitle} from './TodolistTitle/TodolistTitle'
import {CreateItemForm} from '@/common/components/CreateItemForm/CreateItemForm'
import { Todolist } from '../Todolists'

type Props = {
  todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {
  const dispatch = useAppDispatch()

  const createTaskHandler = (title: string) => {
    dispatch(createTaskAC({todolistId: todolist.id, title}))
  }

  return (
      <div>
        <TodolistTitle todolist={todolist}/>
        <CreateItemForm onCreateItem={createTaskHandler}/>
        <Tasks todolist={todolist}/>
        <FilterButtons todolist={todolist}/>
      </div>
  )
}
