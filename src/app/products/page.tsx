import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/app/service/products';
import MeowArticle from '../components/MeowArticle';
import clothesImage from 'public/images/clothes.jpg';

// ISR: 3초 주기로 새 렌더링
// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 보여 줌
  const products = await getProducts();

  // const res = await fetch('https://meowfacts.herokuapp.com', {
  //   // next: { revalidate: 0 }, // SSR이 되고 요청이 올 때마다 HTML을 새로 만들어 렌더링 함
  //   // cache: 'force-cache', // default값은 SSG로 움직임. no-store는 SSR
  //   next: { revalidate: 3 }, // ISR
  // });
  // const data = await res.json();
  // const factText = data.data[0];

  return (
    <>
      <h1>products!</h1>
      {/* priority: 이 이미지를 최우선으로 받아 준다 */}
      <Image src={clothesImage} alt="Clothes" priority />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
