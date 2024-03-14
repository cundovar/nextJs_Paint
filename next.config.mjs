/** @type {import('next').NextConfig} */
const nextConfig = {
    // Define your custom routes
    async rewrites() {
      return [
        {
          source: '/app/:path*',
          destination: '/src/app/page', // Adjust this path as needed
        },
      ]
    },
  };
  
  export default nextConfig;