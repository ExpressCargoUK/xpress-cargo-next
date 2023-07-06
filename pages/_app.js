import Layout from "@/Layout"
import FCWhatsapp from "@/common/FCWhatsapp"
import ScrollToTop from "@/common/scrollToTop"
import "@/styles/index.scss"
import "@/styles/reset.scss"
import { DefaultSeo } from "next-seo"
import { Plus_Jakarta_Sans } from "next/font/google"
import Head from "next/head"
import Script from "next/script"
import SEO from "../next-seo.config"

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <FCWhatsapp />
      <Layout>
        <DefaultSeo {...SEO} />

        <Head>
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
        </Head>
        <main className={pjs.className}>
          <Component {...pageProps} />
        </main>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
      </Layout>
    </>
  )
}
