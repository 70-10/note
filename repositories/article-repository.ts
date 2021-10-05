import { createClient } from "microcms-js-sdk";
import { GetRequest } from "microcms-js-sdk/dist/cjs/types";
import { CMSArticle } from "../models/api/articles";

export interface IArticleRepository {
  getArticles: () => Promise<CMSArticle[]>;
  getArticleById: (contentId: string) => Promise<CMSArticle>;
}

class ArticleRepository implements IArticleRepository {
  public client: {
    get: <T>({
      endpoint,
      contentId,
      queries,
      useGlobalDraftKey,
    }: GetRequest) => Promise<T>;
  };

  constructor() {
    this.client = createClient({
      serviceDomain: "7010-note",
      apiKey: process.env.API_KEY as string,
      globalDraftKey: process.env.DRAFT_KEY as string,
    });
  }

  async getArticles() {
    const data = await this.client.get<{ contents: CMSArticle[] }>({
      endpoint: "articles",
    });
    return data.contents;
  }

  async getArticleById(contentId: string) {
    return await this.client.get<CMSArticle>({
      endpoint: "articles",
      contentId,
    });
  }
}

export const createArticleRepository = (): IArticleRepository =>
  new ArticleRepository();
