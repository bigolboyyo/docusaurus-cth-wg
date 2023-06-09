import clsx from "clsx";
import React, { CSSProperties } from "react";
import Link from "@docusaurus/Link";
import styles from "./HomeCard.module.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const HomeCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
}) => {
  return (
    <div className={clsx("container", styles.cardContainer)}>
      <img className={clsx(styles.cardImg)} src={imageUrl} alt={title} />
      <div className={clsx(styles.cardText)}>
        <h2>{title}</h2>
        <p className={clsx(styles.cardDescription)}>{description}</p>
        <Link
          to={linkUrl}
          className={clsx(
            styles.buttonMain, "button button--secondary button--lg cthLink_src-components-HomepageHeader-HomePage-module"
          )}
        >
          Show me
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
