export default async function Home({ params: { categoryName } }: { params: { categoryName: string} }) {
  return (
    <main>
      <div>Страница категории {categoryName}</div>
    </main>
  );
}
