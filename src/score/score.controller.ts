import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateScoreDto } from "./dto/create-score.dto";
import { ScoreService } from "./score.service";

@Controller("score")
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post("/add")
  create(@Body() body: CreateScoreDto) {
    return this.scoreService.create(body);
  }

  @Get("/")
  findAll() {
    return this.scoreService.findAll();
  }

  @Get("/best")
  findBest10() {
    return this.scoreService.findBest10();
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.scoreService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto) {
  //   return this.scoreService.update(+id, updateScoreDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.scoreService.remove(+id);
  // }
}
