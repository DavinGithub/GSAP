import HorizontalScrollSection from "@/component/HorizontalScrollSection";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center px-4">
          Welcome to My Website
        </h1>
      </header>

      <main>
        <HorizontalScrollSection />

        <footer className="py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
            Thank you for visiting!
          </h1>
        </footer>
      </main>
    </div>
  );
}
