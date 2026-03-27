import { services } from "@/data/services";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-brand-blue">Corteq Solutions LLC</h1>
        <p className="mt-2 text-brand-text-secondary">{services.length} services loaded</p>
      </div>
    </main>
  );
}
