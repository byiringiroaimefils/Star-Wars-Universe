import Navigation from "./Components/Nav"
import Home from "./Components/Home"
import Films from "./Components/Films"
import Character from "./Components/Character"
import Footer from "./Components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film" element={<Films />} />
          <Route path="/character" element={<Character />} />
        </Routes>
        {/* <Films />
        <Character /> */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App 
