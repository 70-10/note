import dayjs from "dayjs";
import { Content } from "./content";

export class Article extends Content {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
    revisedAt: Date,
    public body: string,
    public title: string,
    private publishDate?: Date
  ) {
    super(id, createdAt, updatedAt, publishedAt, revisedAt);
  }

  get path() {
    return `/${this.publishAtString}/${this.id}`;
  }

  get publishAt() {
    return this.publishDate ? this.publishDate : this.publishedAt;
  }

  get publishAtString() {
    return dayjs(this.publishAt).format("YYYY/MM/DD");
  }
}
