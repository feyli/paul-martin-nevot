import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
        turbopack: {
            root: path.resolve(__dirname)
        },
        experimental: {
            optimizeCss: true
        },
        reactStrictMode: true,
        output: 'standalone',
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'www.mickael-martin-nevot.com',
                    port: '',
                    pathname: '/_assets/images/**',
                },
            ],
        }
    }
;

export default nextConfig;
