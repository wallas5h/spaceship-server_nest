import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ScoreItem } from "./entities/scoreItem.entity";
import { ScoreController } from "./score.controller";
import { ScoreService } from "./score.service";

@Module({
  imports: [TypeOrmModule.forFeature([ScoreItem])],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
