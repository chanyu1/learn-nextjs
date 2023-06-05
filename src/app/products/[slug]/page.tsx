import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProducts, getProduct } from '@/app/service/products';

export const revalidate = 3;

type Metadata = {
  title: string;
  description: string;
};

type Props = {
  params: {
    slug: string;
  };
};

// export function generateMetadata({ params }: Props) {
//   return {
//     title: `product name: ${params.slug}`,
//   };
// }
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = params;
  const product = await getProduct(slug);

  return {
    title: `Wonderful Items | ${product?.name.toUpperCase()}`,
    description: `Check our wonderful ${product?.name}!`,
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 보여 줌
  return (
    <>
      <h1>{product.name} page!</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 할 예정, 페이지 미리 생성(SSG: 스타틱 사이트 제너레이트)
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
