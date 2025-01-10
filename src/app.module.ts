import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardGamesModule } from './board-games/board-games.module';

@Module({
  imports: [BoardGamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
