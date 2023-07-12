import Link from "next/link"
import styles from "./styles.module.scss"

const ServiceCard = ({ title, icon, description, serviceType, link }) => {
  return (
    <div className={styles.__wrapper}>
      <Link href={link} className={styles.__content}>
        <div className={styles.innerAlignWrapper}>
          <div className={styles.topAligned}>
            <h4>
              <span className={styles.textWrapper}>{title}</span>
              <span className={styles.svgWrapper}>{icon}</span>
            </h4>
            <p>{description}</p>
          </div>
          <div className={styles.ctaWrapper}>
            <strong>
              {/* Find out more about our {serviceType}{" "}
              {serviceType === "Supply Chain" ? "" : "Freight"} services */}
              Find out more about our {serviceType} services
            </strong>
            <span className={styles.plusIndicator}>+</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard
