import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => (
  <span className="text-3xl font-light">
    <Link href="/">{title}</Link>
  </span>
);

export default Title;
