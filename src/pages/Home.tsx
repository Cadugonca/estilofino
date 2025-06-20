import './index.css'; 

export default function Home() {
  return (
    <section id="hero" className="relative h-screen">
      
      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Seu estilo começa aqui.</h1>
        <p className="mt-4 text-lg md:text-xl">
          Agende seu horário com os melhores barbeiros da cidade.
        </p>
        <a
          href="https://wa.me/seu_numero_aqui"
          className="mt-6 bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
