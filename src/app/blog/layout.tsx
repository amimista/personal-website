export default function Layout ({children}: {children: React.ReactNode}) {
  return <main className="flex justify-center pt-3">
    <section className="w-full max-w-[700px] prose prose-invert">
      {children}
    </section>
  </main>
}