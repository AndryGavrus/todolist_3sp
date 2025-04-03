import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {EditableSpan} from '@/common/components/EditableSpan/EditableSpan'
import {changeTodolistTitleAC, deleteTodolistAC} from '@/features/todolists/model/todolists-reducer'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import styles from './TodolistTitle.module.css'
import { Todolist } from '../../Todolists'

type Props = {
  todolist: Todolist
}

export const TodolistTitle = ({todolist}: Props) => {
  const {id, title} = todolist

  const dispatch = useAppDispatch()

  const deleteTodolistHandler = () => {
    dispatch(deleteTodolistAC({id}))
  }

  const changeTodolistTitleHandler = (title: string) => {
    dispatch(changeTodolistTitleAC({id, title}))
  }

  return (
      <div className={styles.container}>
        <h3>
          <EditableSpan value={title} onChange={changeTodolistTitleHandler}/>
        </h3>
        <IconButton onClick={deleteTodolistHandler}>
          <DeleteIcon/>
        </IconButton>
      </div>
  )
}