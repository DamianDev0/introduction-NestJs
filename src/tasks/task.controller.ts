import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('Tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() task: TaskDto) {
    return this.taskService.createTask(task);
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    const task = this.taskService.getTaskById(id);
    return task;
  }
  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(task);
  }
}
