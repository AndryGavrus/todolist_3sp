import TextField from '@mui/material/TextField'
import {type ChangeEvent, useState, KeyboardEvent} from 'react'

type Props = {
  value: string
  onChange: (title: string) => void
}

export const EditableSpan = ({ value, onChange }: Props) => {
  const [title, setTitle] = useState(value)
  const [isEditMode, setIsEditMode] = useState(false)

  const turnOnEditMode = () => {
    setIsEditMode(true)
  }

  const turnOffEditMode = () => {
    setIsEditMode(false)
    onChange(title)
  }

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

    const createItemOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        turnOffEditMode()
      }
    }

  return (
      <>
        {isEditMode ? (
            <TextField variant={'outlined'}
                       value={title}
                       size={'small'}
                       onChange={changeTitle}
                       onBlur={turnOffEditMode}
                       onKeyDown={createItemOnEnterHandler}
                       autoFocus/>
        ) : (
            <span onDoubleClick={turnOnEditMode}>{value}</span>
        )}
      </>
  )
}