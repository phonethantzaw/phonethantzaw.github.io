import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";

function App() {
  return (
    <main className="bg-black min-h-screen text-[#DEDBC8] font-sans selection:bg-[#DEDBC8]/30 selection:text-white overflow-hidden">
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
