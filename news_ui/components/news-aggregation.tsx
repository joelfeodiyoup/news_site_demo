import { useEffect, useState } from "react";
import { InfiniteScroll } from "./infinite-scroll";
import { NewsTile } from "./news-tile";
import axios from "axios";
import { useDataSource } from "@/app/useDataSource";
import Link from "next/link";

export type NewsArticle = {
    rubric: string,
    title: string,
    author: string,
    created: string,
    id: number,
    imgUrl: string,
    route: string,
};

/**
 * A grid of news articles
 * 'target' is an endpoint, e.g. "shopping" "technology"
 * I'd improve the way "target" gets input.
 * @param param0 
 * @returns 
 */
export const NewsAggregation = ({target}: {target: string}) => {
    const [page, setPage] = useState(0);
    const articles = useArticles(page, target);
  
    return (
      <>
      <InfiniteScroll loadMore={() => articles.hasMore && setPage(page + 1)}>
        <section className="newsAggregation" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(30ch, 1fr))',
          gap: '2rem',
          marginTop: '2rem',
          }}>
          {articles.data.map((article, i) => {
            return (
                <Link
                  href={`/article/${article.route}`}
                  key={`article-${article.id}`}
                >
                  <NewsTile newsArticle={article}></NewsTile>
                </Link>
            )})
          }
        </section>
      </InfiniteScroll>
      </>
    )
  }
  
  function useArticles(page: number = 0, target: string) {
    const baseUrl = 'http://localhost:3000';
    const [articles, setArticles] = useState<{data: NewsArticle[], hasMore: boolean}>({data: [], hasMore: true});
    const resource = useDataSource(target);
  
    async function getNews(page: number) {
      return await axios.get(
        `${baseUrl}/${resource}?page=${page}`
      );
    };
  
    useEffect(() => {
      getNews(page).then(
        result => {
          setArticles({
            data: [...articles.data, ...result.data.data],
            hasMore: result.data.hasMore,
          });
  
        }
      )
    }, [page]);
  
    return articles;
  }