import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // 로그인이 필요한 화면은 로그인 화면으로 리다이렉트 하거나 가능
  console.log('running middleware');

  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('middleware - redirect');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

// *: zero or more
// +: one or more

// /products/:path* path가 없거나 또는 있거나(많거나)
// /products/:path+ path가 하나 또는 많거나

// /products/slug 와 같은 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행을 원할 경우,
// /products/:path+ 이렇게 실행

export const config = {
  matcher: ['/products/:path+'],
};
