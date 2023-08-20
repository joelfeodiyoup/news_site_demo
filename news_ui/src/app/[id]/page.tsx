"use client";
import { NewsAggregation } from "../../../components/news-aggregation";

export function generateStaticParams() {
    return [{id: "shopping"}, {id: "news"}];
}

/**
 * dynamically show different news pages
 * @param param0 
 * @returns 
 */
export default function Page({params}: {params: {id: string}}) {
    const {id } = params;
    return (
        <>
        <NewsAggregation target={id}></NewsAggregation>
        </>
    )
}