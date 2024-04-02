export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <h3>Categories layout</h3>
      {children}
    </div>
  );
}
