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
    public publishDate?: Date
  ) {
    super(id, createdAt, updatedAt, publishedAt, revisedAt);
  }

  get path() {
    const publishDate = dayjs(this.publishDate);
    return `/${publishDate.year()}/${String(publishDate.month() + 1).padStart(
      2,
      "0"
    )}/${String(publishDate.date()).padStart(2, "0")}/${this.id}`;
  }

  get publishAtString() {
    if (this.publishDate) {
      return dayjs(this.publishDate).format("YYYY/MM/DD");
    }

    return dayjs(this.publishedAt).format("YYYY/MM/DD");
  }
}
