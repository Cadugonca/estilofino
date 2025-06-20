import { Link } from 'react-router-dom'
import './index.css'


export default function Header() {
  return (
    <header className="bg-black text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 id="logo" className="text-xl font-black">Barbearia Estilo Fino</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/servicos" className="hover:underline">Serviços</Link>
          <Link to="/contato" className="hover:underline">Contato</Link>
          <Link to="/Galeria" className="hover:underline">Galeria</Link>
        </nav>
      </div>
    </header>
  )
}
