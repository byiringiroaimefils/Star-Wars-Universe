import Navigation from "./Components/Nav"
import Home from "./Components/Home"
import Films from "./Components/Films"
import Character from "./Components/Character"
import Starship from "./Components/Starships"
import Footer from "./Components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <BrowserRouter>
        <Navigation />
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film" element={<Films />} />
            <Route path="/character" element={<Character />} />
            <Route path="/starship" element={<Starship />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App 
