import { useEffect, useState } from "react";
import { NewsArticle } from "../../components/news-aggregation";
import axios from "axios";

export const useNewsArticle = (id: string) => {
    const baseUrl = 'http://localhost:3000';
    const [article, setArticle] = useState<null | NewsArticle>(null);
  
    async function getNewsArticle(id: string) {
      return await axios.get(
        `${baseUrl}/article?title=${id}`
      );
    };
  
    useEffect(() => {
      getNewsArticle(id).then(
        result => {
          setArticle(result.data);
        }
      )
    }, [id]);
  
    return article;
  }