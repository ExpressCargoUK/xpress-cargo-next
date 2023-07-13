import Layout from "@/Layout"
import FCWhatsapp from "@/common/FCWhatsapp"
import ScrollToTop from "@/common/scrollToTop"
import "@/styles/index.scss"
import "@/styles/reset.scss"
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo"
import Head from "next/head"
import Script from "next/script"
import SEO from "../next-seo.config"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <FCWhatsapp />
      <Layout>
        <DefaultSeo {...SEO} />
        <LocalBusinessJsonLd
          type="LocalBusiness"
          id="https://expresscargouk.co.uk"
          name="Express Cargo UK"
          description="Express Cargo is a UK shipping and Freight forwarding agency offering cargo services to Saudi Arabia, Kuwait, Qatar, UAE, Sudan, Nigeria, India and Pakistan."
          url="https://expresscargouk.co.uk"
          telephone="+441618820666"
          address={{
            streetAddress: "Unit C 88-90 Chorlton Road",
            addressLocality: "Old Trafford",
            addressRegion: "Manchester",
            postalCode: "M15 4AN",
            addressCountry: "UK",
          }}
          geo={{
            latitude: "53.4625929",
            longitude: "-2.3283242",
          }}
          images={["https://expresscargouk.co.uk/assets/images/logo.png"]}
          sameAs={[
            "https://www.expresscargouk.co.uk/",
            "https://www.facebook.com/expresscargo.ecul/",
            "https://twitter.com/expresscargouk",
            "https://instagram.com/expresscargouk",
          ]}
          openingHours={[
            {
              opens: "10:00",
              closes: "18:00",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
            },
          ]}
          action={{
            actionName: "potentialAction",
            actionType: "ConsumeAction",
            target: "https://expresscargouk.co.uk/help-tracking/quotation-form",
          }}
        />

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
        <Component {...pageProps} />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload" id="googleAnalytics">
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
