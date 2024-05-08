import Header from "./components/Header"
import './assets/fonts.css'
import Hero from "./components/Hero"
import Clients from './components/Clients'
import Community from './components/Community'
import Unlock from "./components/Unlock"

const App = () => {
  return (
    <>
      <main className="px-[48.08px]">
        <Header />
        <Hero />
        <Clients />
        <Community />
        <Unlock />
      </main>
    </>
  )
}

export default App