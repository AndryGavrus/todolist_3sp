import { instance } from "@/common/instance/instance"
import { Todolist } from "./todolistsApi.types"
import { BaseResponce } from "@/common/types/types"

export const todolistApi = {
    getTodolists() {
        return instance.get<Todolist[]>("/todo-lists")
    },
    changeTodolistTitle(id: string, title: string){
        return instance.put<BaseResponce>(`/todo-lists/${id}`, {title})
    },
    createTodolist(title: string) {
        return instance.post<BaseResponce<{ item: Todolist }>>("/todo-lists", { title })
    },
    deleteTodolist(id: string) {
        return instance.delete<BaseResponce>(`/todo-lists/${id}`)
    },
}