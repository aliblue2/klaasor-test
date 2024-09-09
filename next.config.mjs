/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "avatar.iran.liara.run",
        protocol : "https" ,
        
      },
    ],
  },
};

export default nextConfig;
