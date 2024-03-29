import Link from 'next/link';
import styles from './layout.module.css';

export const metadata = {
  title: 'Create Next App | Entire products',
  description: 'Generated by create next app!!!',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">Women</Link>
        <Link href="/products/man">Man</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
