import React from 'react';

const products = [
  {
    id: 1,
    name: 'Anel Solitário Prata 925',
    price: 'R$ 299,00',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Colar Gargantilha com Zircônia',
    price: 'R$ 389,00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Brincos Argola Clássicos',
    price: 'R$ 259,00',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8">Destaques</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group card animate-fade-in">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button className="btn btn-primary absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                Ver Detalhes
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-primary-900 mb-1">{product.name}</h3>
              <p className="text-lg font-medium text-accent-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;