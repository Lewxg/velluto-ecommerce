import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Velluto</h3>
            <p className="text-gray-400 text-sm">
              Joias em prata 925 com garantia vitalícia.
              Qualidade e elegância em cada detalhe.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Anéis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Brincos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Colares</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pulseiras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Ajuda</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Envio e Entrega</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Trocas e Devoluções</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Garantia Vitalícia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">WhatsApp: (11) 99999-9999</li>
              <li className="text-gray-400 text-sm">Email: contato@velluto.com.br</li>
              <li className="text-gray-400 text-sm">Seg - Sex: 9h às 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Velluto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;