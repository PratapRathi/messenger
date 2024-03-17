/** @type {import('next').NextConfig} */

const nextConfig = {
    // experimental: {
    //     swcPlugins: [
    //         ["next-superjson-plugin", {}]
    //     ]
    // },
    images: {
        remotePatterns: [
            { hostname: 'res.cloudinary.com' },
            { hostname: 'avatars.githubusercontent.com' },
            { hostname: 'lh3.googleusercontent.com' },
        ]
    }
}

export default nextConfig;
