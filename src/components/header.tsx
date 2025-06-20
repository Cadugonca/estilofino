import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <Link
            to="/"
            className="relative text-white hover:text-white 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 hover:after:w-full after:h-[2px] after:bg-indigo-400 
              after:transition-all after:duration-300"
          >
            Barbearia Estilo Fino
          </Link>
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          {[
            { name: 'Início', to: '/' },
            { name: 'Serviços', to: '/servicos' },
            { name: 'Galeria', to: '/galeria' },
            { name: 'Contato', to: '/contato' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="relative hover:text-indigo-400 transition 
                after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:w-0 hover:after:w-full after:h-[2px] after:bg-indigo-400 
                after:transition-all after:duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botão Hamburguer Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center gap-8 text-2xl">
          {[
            { name: 'Início', to: '/' },
            { name: 'Serviços', to: '/servicos' },
            { name: 'Galeria', to: '/galeria' },
            { name: 'Contato', to: '/contato' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={toggleMenu}
              className="hover:text-indigo-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-3xl hover:text-indigo-400"
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
}
