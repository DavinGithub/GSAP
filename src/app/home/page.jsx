import HorizontalScrollSection from "@/component/HorizontalScrollSection";  

export default function Home() {
  return (
    <>
      <div className="font-sans">
        <header className="h-[500px]">
          <h1 className="text-6xl text-center">Welcome to My Website</h1>
          <h1 className="text-6xl text-center">Welcome to My Website</h1>
          <h1 className="text-6xl text-center">Welcome to My Website</h1>
          <h1 className="text-6xl text-center">Welcome to My Website</h1>
        </header>

        <main>
          <HorizontalScrollSection />

          <footer>
            <h1 className="text-6xl text-center">Welcome to My Website</h1>
            <h1 className="text-6xl text-center">Welcome to My Website</h1>
            <h1 className="text-6xl text-center">Welcome to My Website</h1>
            <h1 className="text-6xl text-center">Welcome to My Website</h1>
          </footer>
        </main>
      </div>
    </>
  );
}
