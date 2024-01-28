import "../globals.css";

export default function Layout ({children}: {children: React.ReactNode}) {
  return <main className="flex justify-center align-top">
    <section className="w-full max-w-md">
      {children}
    </section>
  </main>
}