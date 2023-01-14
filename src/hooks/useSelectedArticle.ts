import {Article} from "../interfaces";

export const useSelectedArticle = (articles: Article[], id: string | undefined) => {
    if (articles && id) return articles.filter((article: Article) => Number(article.id) === Number(id));
}