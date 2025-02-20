import Hero from "./pages/hero.tsx";
import { About } from "./pages/about.tsx";
import { Portfolio } from "./pages/portfolio.tsx";
import { Stack } from "./pages/stack.tsx";
import { Footer } from "./components/footer.tsx";
function App() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer/>
    </>
  )
}

export default App