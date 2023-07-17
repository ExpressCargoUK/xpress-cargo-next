/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/help-tracking/how-to-package-your-Items",
        destination: "/help-tracking/how-to-wrap-and-package-your-parcel",
        permanent: true,
      },
      {
        source: "/frequent-asked-question",
        destination: "/frequently-asked-questions",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  transpilePackages: ["react-whatsapp-chat-widget"],
}

module.exports = nextConfig
