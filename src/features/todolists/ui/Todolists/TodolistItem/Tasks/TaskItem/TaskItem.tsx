import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {EditableSpan} from '@/common/components/EditableSpan/EditableSpan'
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from '@/features/todolists/model/tasks-reducer'
import {getListItemSx} from './TaskItem.styles'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import type {ChangeEvent} from 'react'
import { Task } from '../Tasks'

type Props = {
  task: Task
  todolistId: string
}

export const TaskItem = ({task, todolistId}: Props) => {
  const dispatch = useAppDispatch()

  const deleteTaskHandler = () => {
    dispatch(deleteTaskAC({todolistId, taskId: task.id}))
  }

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStatusValue = e.currentTarget.checked
    dispatch(changeTaskStatusAC({todolistId, taskId: task.id, isDone: newStatusValue}))
  }

  const changeTaskTitleHandler = (title: string) => {
    dispatch(changeTaskTitleAC({todolistId, taskId: task.id, title}))
  }

  return (
      <ListItem sx={getListItemSx(task.isDone)}>
        <div>
          <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
          <EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
        </div>
        <IconButton onClick={deleteTaskHandler}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
  )
}