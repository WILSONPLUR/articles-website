export interface Article {
    title: string,
    id: number,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    updatedAt: string,
    featured: boolean,
    launches: [],
    events: [],
}

export interface Articles {
    articles: Article[],
}