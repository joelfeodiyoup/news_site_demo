import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { LoremIpsum, loremIpsum } from 'lorem-ipsum';
import { data } from './data/data';

type PaginatedResponse<T> = {
    data: T[],
    hasMore: any,
}
export type NewsArticle = {
    rubric: string,
    title: string,
    author: string,
    created: string,
    id: number,
    imgUrl: string,
    tags: string[],
    route: string,
}

abstract class PaginatedController {
    abstract newsArticles: NewsArticle[];
    protected pageSize = 5;
    protected initialPageSize = 10;

    paginate(page: number) {
        return {
            data: this.newsArticles.slice(
                (page) * this.pageSize,
                (page + 1) * this.pageSize),
            hasMore: this.newsArticles.length > (page + 1) * this.pageSize
            };
    }
    
    @Get()
    findOne(@Query('page', ParseIntPipe) page: number): PaginatedResponse<NewsArticle> {
        return this.paginate(page);
    }
}

// I subclassed these here.
// Later, I think it could have been better to just have a "get articles" query
// and then a parameter for the categories.
@Controller('news')
export class NewsController extends PaginatedController {
    newsArticles: NewsArticle[];
    constructor() {
        super();
        this.newsArticles = data.filter(item => item.tags.includes("news"));
    }
}

@Controller('shopping')
export class ShoppingController extends PaginatedController {
    newsArticles: NewsArticle[];
    constructor() {
        super();
        this.newsArticles = data.filter(item => item.tags.includes("shopping"));
    }
}

@Controller('technology')
export class TechnologyController extends PaginatedController {
    newsArticles: NewsArticle[];
    constructor() {
        super();
        this.newsArticles = data.filter(item => item.tags.includes("technology"));
    }
}

@Controller('article')
export class ArticleController {
    @Get()
    findOne(@Query('title') title: string): NewsArticle {
        const found = data.find(item => item.route === title);
        return found;
    }
}

/**
 * used by nextjs to generate static dynamic routes for news articles
 * routes could use the article title
 */
@Controller('availableNewsArticles')
export class AvailableNewsArticlesController {
    @Get()
    findOne(): string[] {
        return data.map(item => item.route);
    }
}