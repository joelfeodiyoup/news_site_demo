import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController, AvailableNewsArticlesController, NewsController, ShoppingController, TechnologyController } from './news.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    NewsController,
    ShoppingController,
    TechnologyController,
    ArticleController,
    AvailableNewsArticlesController
  ],
  providers: [AppService],
})
export class AppModule {}
