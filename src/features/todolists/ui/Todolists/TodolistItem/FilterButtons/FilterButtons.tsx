import {containerSx} from '@/common/styles/container.styles'
import {FilterButton} from '@/features/todolists/ui/Todolists/TodolistItem/FilterButtons/FilterButton/FilterButton'
import Box from '@mui/material/Box'
import { Todolist } from '../../Todolists'

export type FilterValues = 'all' | 'active' | 'completed'

const buttons: FilterValues[] = ['all', 'active', 'completed']

type Props = {
  todolist: Todolist
}

export const FilterButtons = ({todolist}: Props) => {
  const {id, filter} = todolist

  return (
      <Box sx={containerSx}>
        {buttons.map(el => (
            <FilterButton key={el} filter={el} currentFilter={filter} id={id}/>
        ))}
      </Box>
  )
}