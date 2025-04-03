import {useAppDispatch} from '@/common/hooks/useAppDispatch'
import {changeTodolistFilterAC} from '@/features/todolists/model/todolists-reducer'
import Button from '@mui/material/Button'
import { FilterValues } from '../FilterButtons'

type Props = {
  filter: FilterValues
  currentFilter: FilterValues
  id: string
}

export const FilterButton = ({filter, currentFilter, id}: Props) => {
  const dispatch = useAppDispatch()

  const changeFilterHandler = () => {
    dispatch(changeTodolistFilterAC({id, filter}))
  }

  return (
      <Button variant={currentFilter === filter ? 'outlined' : 'text'}
              color={'inherit'}
              onClick={changeFilterHandler}>
        {filter}
      </Button>
  )
}