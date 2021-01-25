import React, { FC } from "react";
import { Link } from "gatsby";

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => (
  <Link to="/" className="text-3xl font-light">
    {title}
  </Link>
);

export default Title;
