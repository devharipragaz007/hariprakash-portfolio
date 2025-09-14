/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- crucial for GitHub Pages
  images: { unoptimized: true }, // Next/Image without optimization server
  trailingSlash: true, // helps avoid some index.html issues
};
export default nextConfig;
