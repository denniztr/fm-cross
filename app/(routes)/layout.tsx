export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col justify-center content-center items-center">
      <h2>(routes root)</h2>
      <div>{children}</div>
    </div>
  );
}
