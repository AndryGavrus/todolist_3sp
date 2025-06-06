import { instance } from "@/common/instance"
import type { BaseResponse } from "@/common/types"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  createTask(todolistId: string, title: string) {
    return instance.post<BaseResponse<{ item: DomainTask }>>(`/todo-lists/${todolistId}/tasks`, { title })
  },
  changeTaskStatus(payload: { todolistId: string; taskId: string; model: UpdateTaskModel }) {
    const { todolistId, taskId, model } = payload

    return instance.put<BaseResponse<{ item: DomainTask }>>(`/todo-lists/${todolistId}/tasks/${taskId}`, model)
  },
  //   createTodolist(title: string) {
  //     return instance.post<BaseResponse<{ item: Todolist }>>("/todo-lists", { title })
  //   },
  //   deleteTodolist(id: string) {
  //     return instance.delete<BaseResponse>(`/todo-lists/${id}`)
  //   },
}
