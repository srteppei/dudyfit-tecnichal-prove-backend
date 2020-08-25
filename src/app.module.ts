import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainerModule } from './trainer/trainer.module';

@Module({
  imports: [TrainerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
