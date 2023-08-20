"use client";

import axios from "axios";
import { NewsArticle } from "../../../../components/news-aggregation";
import { useNewsArticle } from "@/app/useNewsArticle";

export async function generateStaticParams() {
    /**
     * I haven't done a lot with dynamic routes.
     * But, I think this gets executed at build time, and allows the user to
     * enter a specific url like "articles/elon-musk-launched-rocket-again".
     * I'm making an async query to the server because the articles which exist can be updated all the time.
     * 
     * But, in real world I think this could need a better solution,
     * since there might be new articles created all the time, and you wouldn't want a new build for each.
     */
    return ((
        (await axios.get("http://localhost:3000/availableNewsArticles"))
        .data) as string[])
        .map(item => ({id: item}));
}

export default function Page({params}: {params: {id: string}}) {
    const {id } = params;
    const article = useNewsArticle(id);
    return (
        <>
        {article && <Article article={article}></Article>}
        </>
    )
}

const Article = ({article}: {article: NewsArticle}) => {
    return (
        <>
        <h1>{article.title}</h1>
        <p>{article.author}</p>
        <img
            src={article.imgUrl}
            style={{width: '50%'}}
        ></img>
        <p>This page made a request to back end for this specific article.</p>
        <p>This response would include extra stuff for the article, like more text. I.e. the request for all articles, from news listing page, would only return titles etc, to minimise unnecessary network transfer size. The request for a specific article would return more.</p>
        </>
    )
}