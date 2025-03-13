import { instance } from "@/common/instance/instance"
import { Todolist } from "./todolistsApi.types"
import { BaseResponse } from "@/app/AppHttpRequests"

export const todolistsApi = {
    getTodolists() {
        return instance.get<Todolist[]>('/todo-lists')
    },
    changeTodolistTitle(id: string, title: string) {
        return instance.put<BaseResponse>(`/todo-lists/${id}`, { title })
    },
    createTodolist(title: string) {
        // самостоятельно
    },
    deleteTodolist(id: string) {
        // самостоятельно
    },
}