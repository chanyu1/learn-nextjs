import Counter from './components/Counter';
import Image from 'next/image';

export default function Home() {
  console.log('server component');

  return (
    <>
      <h1>homepage</h1>
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
      <Counter />
    </>
  );
}
