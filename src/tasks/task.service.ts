import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  getAllTasks(): TaskDto[] {
    return this.tasks;
  }
  getTaskById(id: number): TaskDto {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: TaskDto): TaskDto {
    const newTask: TaskDto = {
      ...task,
      id: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'actualizando tarea';
  }
}
