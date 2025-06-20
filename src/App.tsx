import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Contato from './pages/Contato'
import Footer from './components/footer'


export default function App() {
  return (
    <Router>
      <Header />
      <main className="p-4 container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />

        </Routes>
      </main>
       <Footer />
    </Router>
   
  )
}

