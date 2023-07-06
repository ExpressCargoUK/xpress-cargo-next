import Layout from "@/Layout"
import FCWhatsapp from "@/common/FCWhatsapp"
import ScrollToTop from "@/common/scrollToTop"
import "@/styles/index.scss"
import "@/styles/reset.scss"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <FCWhatsapp />
      <Layout>
        <DefaultSeo {...SEO} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
