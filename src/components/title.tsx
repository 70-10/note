import React, { FC } from "react";
import { Link } from "gatsby";

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => (
  <div className="prose prose-green">
    <Link to="/">
      <h1>{title}</h1>
    </Link>
  </div>
);

export default Title;
