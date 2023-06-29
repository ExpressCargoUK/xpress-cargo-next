import ScrollToTop from "@/common/scrollToTop";
import FCWhatsapp from "@/common/FCWhatsapp";
import Layout from "@/Layout";
import "@/styles/reset.scss";
import "@/styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <FCWhatsapp />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
