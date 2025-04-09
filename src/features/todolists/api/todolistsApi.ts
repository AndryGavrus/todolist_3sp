import { instance } from "@/common/instance/instance"
import { Todolist } from "./todolistsApi.types"
import { BaseResponce } from "@/common/types/types"

export const todolistApi = {
    getTodolists() {
        return instance.get<Todolist[]>("/todo-lists")
    },
    changeTodolistTitle(id: string, title: string){
        return instance.put<BaseResponce>(`/todo-lists/${id}`, {title})
    }
}