import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { config } from "./config/config";
import { ScoreModule } from "./score/score.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: config.dbHost,
      port: 3306,
      username: config.dbUser,
      password: config.dbPassword,
      database: config.dbDatabase,
      entities: ["dist/**/**.entity{.ts,.js}"],
      bigNumberStrings: false,
      logging: true,
      synchronize: true,
    }),
    ScoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
