import Layout from "@/Layout"
import FCWhatsapp from "@/common/FCWhatsapp"
import ScrollToTop from "@/common/scrollToTop"
import "@/styles/index.scss"
import "@/styles/reset.scss"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <FCWhatsapp />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
