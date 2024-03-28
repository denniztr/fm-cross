import Header from "@/components/Header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Header/>
      <div>{children}</div>
    </div>
  );
}
