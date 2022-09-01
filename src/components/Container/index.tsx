import { Fragment, useEffect } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Fragment>{children}</Fragment>;
}
