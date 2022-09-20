import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "./config/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: config.corsOrigin,
    methods: "GET,POST",
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
