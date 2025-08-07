/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 2592000, // 30 days
    qualities: [75],
  },
  /**
   * Description
   * @author elia
   * @description proxy the google analytics script to a url on our site to avoid adblockers' detection.
   */
  async rewrites() {
    return [
      {
        source: "/adblockerbypass",
        destination: `https://www.google-analytics.com/g/collect`,
      },
    ];
  },
};

export default nextConfig;
