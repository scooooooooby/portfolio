import React from "react";
import styles from "./Header.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export interface HeaderProps {
  classNames?: string;
}

export default function Header(props: React.PropsWithChildren<HeaderProps>) {
  const { classNames } = props;

  return <div className={"header"}>{props.children}</div>;
}
