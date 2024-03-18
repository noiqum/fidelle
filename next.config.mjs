/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/',
                headers: [
                    {
                        key: 'x-custom-header',
                        value: 'Fidelle',
                    },
                ],
            },

            {
                source: '/About',
                headers: [
                    {
                        key: 'x-custom-header',
                        value: 'Fidelle Story',
                    },
                ],
            },
        ];
    },


};


export default nextConfig;
