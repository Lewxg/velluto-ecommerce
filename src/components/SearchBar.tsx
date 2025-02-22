import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
}

const suggestions: SearchSuggestion[] = [
  {
    id: '1',
    name: 'Anel Solitário Prata 925',
    category: 'Anéis',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80',
    price: 'R$ 299,00'
  },
  {
    id: '2',
    name: 'Colar Gargantilha com Zircônia',
    category: 'Colares',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
    price: 'R$ 389,00'
  },
  {
    id: '3',
    name: 'Brincos Argola Clássicos',
    category: 'Brincos',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
    price: 'R$ 259,00'
  },
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchSuggestion[]>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      const filtered = suggestions.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar produtos..."
          className="w-full pl-10 pr-12 py-2 border border-primary-200 rounded-full bg-primary-50/50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-100 rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-primary-500" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-primary-100 overflow-hidden z-50">
          <div className="max-h-96 overflow-y-auto">
            {results.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 hover:bg-primary-50 transition-colors cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-primary-900">{item.name}</p>
                  <p className="text-xs text-primary-500">{item.category}</p>
                  <p className="text-sm font-medium text-accent-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;