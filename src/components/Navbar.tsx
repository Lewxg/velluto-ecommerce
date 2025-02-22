import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import SearchBar from './SearchBar';
import AuthModal from './AuthModal';
import CartDrawer from './CartDrawer';
import { useCartStore } from '../lib/store';
import { supabase } from '../lib/supabase';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button 
                className="p-2 rounded-md lg:hidden hover:bg-primary-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-primary-600" />
                ) : (
                  <Menu className="h-6 w-6 text-primary-600" />
                )}
              </button>
              <div className="ml-4 flex lg:ml-0">
                <span className="font-serif text-2xl font-bold text-primary-900">Velluto</span>
              </div>
            </div>
            
            <div className="hidden lg:flex lg:space-x-8">
              {['Anéis', 'Brincos', 'Colares', 'Pulseiras'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-primary-700 hover:text-primary-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-6 flex-1 max-w-xs ml-8">
              <SearchBar />
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="p-2 hover:bg-primary-100 rounded-full transition-colors"
              >
                <User className="h-5 w-5 text-primary-600" />
              </button>
              <button className="p-2 hover:bg-primary-100 rounded-full transition-colors">
                <Heart className="h-5 w-5 text-primary-600" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-primary-100 rounded-full transition-colors relative"
              >
                <ShoppingBag className="h-5 w-5 text-primary-600" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-3 space-y-3">
            <div className="mb-4">
              <SearchBar />
            </div>
            {['Anéis', 'Brincos', 'Colares', 'Pulseiras'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-md transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;