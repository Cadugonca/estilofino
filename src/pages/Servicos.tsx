export default function Servicos() {
  const servicos = [
    {
      nome: 'Corte Masculino',
      descricao: 'Corte na tesoura ou máquina, com acabamento na navalha.',
    },
    {
      nome: 'Barba na Navalha',
      descricao: 'Barba desenhada, feita na navalha, com toalha quente.',
    },
    {
      nome: 'Corte + Barba',
      descricao: 'Pacote completo: corte e barba na navalha.',
    },
    {
      nome: 'Hidratação Capilar',
      descricao: 'Tratamento para fortalecer e hidratar os fios.',
    },
    {
      nome: 'Sobrancelha na Navalha',
      descricao: 'Limpeza e alinhamento da sobrancelha na navalha.',
    },
    {
      nome: 'Luzes / Platinado',
      descricao: 'Descoloração profissional, com proteção aos fios.',
    },
  ];

  return (
    <section className="bg-black rounded-4xl text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((item) => (
            <div
              key={item.nome}
              className="bg-zinc-900 rounded-xl p-6 shadow-md hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-2">{item.nome}</h3>
              <p className="text-zinc-300 mb-4">{item.descricao}</p>
              <a
                href="https://wa.me/seunumerowhatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition"
              >
                Agendar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
