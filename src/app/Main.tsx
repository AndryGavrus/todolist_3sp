import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { CreateItemForm } from "@/CreateItemForm"
import { Todolists } from "@/features/todolists/ui/Todolists/Todolists"
import { createTodolistAC } from "@/features/model/todolists-reducer"
import { Container, Grid } from "@mui/material"

export const Main = () => {
  const createTodolist = (title: string) => {
    dispatch(createTodolistAC(title))
  }

  const dispatch = useAppDispatch()

  return (
    <Container maxWidth={"lg"}>
      <Grid container sx={{ mb: "30px" }}>
        <CreateItemForm onCreateItem={createTodolist} />
      </Grid>
      <Grid container spacing={4}>
        <Todolists />
      </Grid>
    </Container>
  )
}
