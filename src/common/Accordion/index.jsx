import { Box, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, subTitle, description, color }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.accordionWrapper}>
      <div
        className={[styles.accordionTitle, isOpen ? styles.open : " "].join(
          " "
        )}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
        <span>
          {isOpen ? (
            <img src="/assets/images/minus_icon.png" alt="plus" />
          ) : (
            <img src="/assets/images/plus_icon.png" alt="minus" />
          )}
        </span>
      </div>

      <div
        className={[
          styles.accordionItem,
          !isOpen ? styles.collapsed : " ",
        ].join(" ")}
      >
        <div className={styles.accordionContent}>
          {subTitle && (
            <Typography className={styles["sub-title"]}>{subTitle}</Typography>
          )}

          <Box
            className={styles.description}
            style={{ color: color }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
