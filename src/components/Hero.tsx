import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80"
          alt="Joias de prata"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Joias que Contam<br />Histórias
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl font-light leading-relaxed">
            Descubra nossa coleção exclusiva de joias em prata com garantia vitalícia.
            Peças únicas que combinam elegância atemporal com artesanato excepcional.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#" className="btn btn-primary">
              Explorar Coleção
            </a>
            <a href="#" className="btn btn-outline text-white border-white/30 hover:bg-white/10">
              Sobre Nós
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;