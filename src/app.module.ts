import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, UsersModule],
})
export class AppModule {}
