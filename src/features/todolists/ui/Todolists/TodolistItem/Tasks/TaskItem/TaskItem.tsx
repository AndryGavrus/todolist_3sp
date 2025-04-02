import { ListItem, Checkbox, IconButton } from "@mui/material"
import { EditableSpan } from "../../../../../../../EditableSpan"
import { getListItemSx } from "../../../../../../../TodolistItem.styles"
import { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../../../common/hooks/useAppDispatch"
import { deleteTaskAC, changeTaskStatusAC, changeTaskTitleAC } from "../../../../../../model/tasks-reducer"
import DeleteIcon from "@mui/icons-material/Delete"
import { Task } from "../../../../../../../App"

type Props = {
  task: Task
  todolistId: string
}

export const TaskItem = ({ task, todolistId }: Props) => {
  const dispatch = useAppDispatch()

  const deleteTaskHandler = () => {
    dispatch(deleteTaskAC({ todolistId, taskId: task.id }))
  }

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStatusValue = e.currentTarget.checked
    dispatch(changeTaskStatusAC({ todolistId, taskId: task.id, isDone: newStatusValue }))
  }

  const changeTaskTitleHandler = (title: string) => {
    dispatch(changeTaskTitleAC({ todolistId, taskId: task.id, title }))
  }

  return (
    <ListItem sx={getListItemSx(task.isDone)}>
      <div>
        <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler} />
        <EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
      </div>
      <IconButton onClick={deleteTaskHandler}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}
