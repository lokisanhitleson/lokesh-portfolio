import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
};

export default nextConfig;
