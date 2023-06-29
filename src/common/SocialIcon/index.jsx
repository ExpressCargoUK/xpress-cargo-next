import styles from "./styles.module.scss";

const SocialIcon = ({ children }) => {
  return <div className={styles.icon}>{children}</div>;
};

export default SocialIcon;
