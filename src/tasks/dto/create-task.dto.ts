import { IsString, IsNumber } from 'class-validator';

export class TaskDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  priority: number;
  id?: number;
}
