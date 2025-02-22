import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterSection {
  title: string;
  options: {
    id: string;
    label: string;
    count: number;
  }[];
}

const filters: FilterSection[] = [
  {
    title: 'Material',
    options: [
      { id: 'prata-925', label: 'Prata 925', count: 156 },
      { id: 'prata-pedras', label: 'Prata com Pedras', count: 89 },
      { id: 'prata-zirconia', label: 'Prata com Zircônia', count: 47 },
    ],
  },
  {
    title: 'Preço',
    options: [
      { id: 'ate-100', label: 'Até R$ 100', count: 42 },
      { id: '100-300', label: 'R$ 100 - R$ 300', count: 128 },
      { id: '300-500', label: 'R$ 300 - R$ 500', count: 96 },
      { id: 'acima-500', label: 'Acima de R$ 500', count: 34 },
    ],
  },
  {
    title: 'Ocasião',
    options: [
      { id: 'casual', label: 'Casual', count: 183 },
      { id: 'festa', label: 'Festa', count: 92 },
      { id: 'casamento', label: 'Casamento', count: 45 },
    ],
  },
];

const ProductFilters = () => {
  const [openSections, setOpenSections] = useState<string[]>(['Material']);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="space-y-4">
      {filters.map((section) => (
        <div key={section.title} className="border-b border-primary-200 pb-4">
          <button
            className="flex items-center justify-between w-full py-2 text-sm font-medium text-primary-900"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
            <ChevronDown
              className={`h-4 w-4 text-primary-500 transition-transform ${
                openSections.includes(section.title) ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openSections.includes(section.title) && (
            <div className="mt-2 space-y-2">
              {section.options.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option.id)}
                    onChange={() => toggleFilter(option.id)}
                    className="h-4 w-4 rounded border-primary-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-primary-700">{option.label}</span>
                  <span className="text-primary-400 text-xs">({option.count})</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {selectedFilters.length > 0 && (
        <button
          onClick={() => setSelectedFilters([])}
          className="text-sm text-primary-600 hover:text-primary-800 font-medium"
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
};

export default ProductFilters;