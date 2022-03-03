import React from "react";
// import styles from "./Header.module.css";

export interface CardProps {
  classNames?: string;
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const { classNames } = props;

  return <div>{props.children}</div>;
}
