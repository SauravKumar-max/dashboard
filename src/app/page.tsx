import { Main, Sidebar } from "@/components";

export default function Home() {
  return (
    <main className="flex items-start">
      <Sidebar />
      <Main />
    </main>
  );
}
