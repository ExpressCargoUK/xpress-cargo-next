import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.__wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
