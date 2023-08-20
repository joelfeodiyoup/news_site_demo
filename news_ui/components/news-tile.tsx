import { NewsArticle } from "./news-aggregation"

export const NewsTile = ({newsArticle}: {newsArticle: NewsArticle}) => {
    return (
        <>
        <section>
            <img
                style={{width: '100%'}}
                src={newsArticle.imgUrl}
                alt={newsArticle.title}
            ></img>
            <h3>{newsArticle.rubric}</h3>
            <h2>{newsArticle.title}</h2>
            <p>{newsArticle.author}</p>
            <p>{newsArticle.created}</p>
        </section>
        </>
    )
}