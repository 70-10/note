import dayjs from "dayjs";
import Link from "next/link";
import { FC } from "react";
import styles from "./timeline.module.css";

interface Props {
  events: TimelineItem[];
}

export interface TimelineItem {
  id: string;
  text: string;
  path: string;
  date: Date;
}

const Timeline: FC<Props> = ({ events }) => {
  return (
    <ol className="p-4">
      {events.map((event) => (
        <li className={styles.feed_item} key={event.id}>
          <Link href={event.path}>
            <a className={styles.link}>
              <time className={styles.time} dateTime="9-25">
                {dayjs(event.date).format("YYYY-MM-DD")}
              </time>
              <span className={styles.text}>{event.text}</span>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
