export type DomainTask = {
  description: string | null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string | null
  deadline: string | null
  id: string
  todoListId: string
  order: number
  addedDate: string
}

export type GetTasksResponse = {
  items: DomainTask[]
  totalCount: number
  error: string | null
}

export type UpdateTaskModel = {
  description: string | null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string | null
  deadline: string | null
}

export enum TaskStatus {
  New,
  InProgress,
  Completed,
  Draft,
}

export enum TaskPriority {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}