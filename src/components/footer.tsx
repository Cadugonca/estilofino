export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Esquerda */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Estilo Fino</h2>
                    <p className="text-sm mt-2">
                        &copy; {new Date().getFullYear()} Estilo Fino Barbearia. <br className="hidden md:block"/>Todos os direitos reservados.
                    </p>
                    <p className="text-xs mt-2">
                        Desenvolvido por Carlos Santos
                    </p>
                </div>

                {/* Meio */}
                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">Contato</h3>
                    <p className="text-sm">📍 Rua Exemplo, 123 - São Paulo</p>
                    <p className="text-sm">📞 (11) 91234-5678</p>
                    <p className="text-sm">🕐 Seg a Sáb: 9h - 20h</p>
                </div>

                {/* Direita */}
                <div className="text-center md:text-right">
                    <h3 className="font-semibold mb-2 text-left">Siga-nos</h3>
                    <div className="flex justify-center md:justify-end gap-4">
                        <a href="https://instagram.com/seuperfil" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
                        </a>
                        <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer">
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 hover:scale-110 transition" />
                        </a>
                        <a href="https://facebook.com/seuperfil" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
