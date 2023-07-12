import Link from "next/link"
import styles from "./styles.module.scss"

const NewsCard = ({ title, description, imgurl }) => {
  return (
    <div className={styles.__wrapper}>
      <Link
        href={`/${title?.toLowerCase().split(" ").join("-")}`}
        className={styles.__content}
      >
        <div className={styles.innerAlignWrapper}>
          <div className={styles.topAligned}>
            <div className={styles.imgWrapper}>
              <img
                loading="lazy"
                width="100%"
                height="200"
                src={imgurl}
                className={styles.attachment__postThumb}
                alt={title}
                decoding="async"
              />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <span className={styles.linkText}>Read More</span>
        </div>
      </Link>
    </div>
  )
}

export default NewsCard
