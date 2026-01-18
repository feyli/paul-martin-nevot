import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
        turbopack: {
            root: path.resolve(__dirname)
        },
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
