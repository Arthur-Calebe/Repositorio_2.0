import { Header } from "./components/Header"
import { Sobre } from "./pages/Sobre"
import "./App.css"

export const App = () => {
  return (
    <main className="Principal">
      <Header />
      <section className="content-shell">
        <h1>Meu portfólio</h1>
        <Sobre />
      </section>
    </main>
  )
}