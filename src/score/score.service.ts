import { Injectable } from "@nestjs/common";
import { CreateScoreDto } from "./dto/create-score.dto";
import { ScoreItem } from "./entities/scoreItem.entity";

@Injectable()
export class ScoreService {
  async create(body: CreateScoreDto) {
    const newScore = new ScoreItem();
    newScore.name = body.name;
    newScore.score = body.score;

    await newScore.save();
    return newScore;
  }

  async findBest10(): Promise<ScoreItem[]> {
    return await ScoreItem.find({
      order: {
        score: "DESC",
      },
      take: 10,
    });
  }

  async findAll(): Promise<ScoreItem[]> {
    return await ScoreItem.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} score`;
  // }

  // update(id: number, updateScoreDto: UpdateScoreDto) {
  //   return `This action updates a #${id} score`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} score`;
  // }
}
