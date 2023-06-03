import Counter from './components/Counter';

export default function Home() {
  console.log('server component');

  return (
    <>
      <h1>homepage</h1>
      <Counter />
    </>
  );
}
