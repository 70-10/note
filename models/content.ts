export class Content {
  constructor(
    /** コンテンツのID */
    public id: string,
    /** コンテンツの作成日時 */
    public createdAt: Date,
    /** コンテンツの更新日時 */
    public updatedAt: Date,
    /** コンテンツの公開日時 */
    public publishedAt: Date,
    /** コンテンツの改定日時 */
    public revisedAt: Date
  ) {}
}
