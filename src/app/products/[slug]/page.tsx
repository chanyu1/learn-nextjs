import React from 'react';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `product name: ${params.slug}`,
  };
}

export default function PantsPage({ params }: Props) {
  if (params.slug === 'notthing') {
    notFound();
  }

  return <>{params.slug} page!</>;
}

// 페이지 미리 생성: ssg 스타틱 사이트 제너레이트
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
