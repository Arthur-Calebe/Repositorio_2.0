import { Header } from "./components/Header"
import { Sobre } from "./pages/Sobre"
import "./App.css"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Projetos } from "./pages/Projetos"

export const App = () => {
  return (
    <main className="Principal">
      <Header />
      <section className="content-shell">
        <Home />
        <Sobre />
        <Projetos />
      </section>
      <Footer />
    </main>
  )
}