import { CMSArticle } from "../models/api/articles";
import { Article } from "../models/article";

export const factory = (content: CMSArticle): Article =>
  new Article(
    content.id,
    content.createdAt,
    content.updatedAt,
    content.publishedAt,
    content.revisedAt,
    content.body,
    content.title,
    content.publishDate
  );
