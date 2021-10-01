export interface CMSContent {
  /** コンテンツのID */
  id: string;
  /** コンテンツの作成日時 */
  createdAt: Date;
  /** コンテンツの更新日時 */
  updatedAt: Date;
  /** コンテンツの公開日時 */
  publishedAt: Date;
  /** コンテンツの改定日時 */
  revisedAt: Date;
}

export interface CMSArticle extends CMSContent {
  body: string;
  title: string;
  publishDate?: Date;
}
