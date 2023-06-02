import React from 'react';
import Link from 'next/link';

const products = ['skirt', 'shoes'];

export default function ProductsPage() {
  return (
    <>
      <h1>products</h1>
      {products.map((product, index) => (
        <li key={index}>
          <Link href={`products/${product}`}>{product}</Link>
        </li>
      ))}
    </>
  );
}
