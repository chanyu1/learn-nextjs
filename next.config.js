/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true, // 영구적으로 페이지가 이동한 것
        // 308 스테이터스를 주면서 products로 옮겨 갔으니까,
        // 서치 엔진에게 다음에 사용자가 오면 영원히 products로 가도록 캐시해도 된다고 알려주는 것
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false, // 일시적으로 페이지가 이동한 것
      },
    ];
  },
  async rewrites() {
    // URL에 키나 프로젝트 구조 등과 같은 중요한 정보가 노출될 가능성이 있거나,
    // 너무 복잡한 경우, 대체할 수 있도록 하는 것이 rewrites
    // 즐겨찾기 등 외부에서 사용하는 URL도 새 URL로 대체 됨
    return [{ source: '/ellie/:slug', destination: '/products/:slug' }];
  },
};

module.exports = nextConfig;
