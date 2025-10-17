import * as PhosphorIcons from '@phosphor-icons/react';
import React, { useState } from 'react';

interface FilterBarProps {
  categories: Array<{
    name: string;
    icon: keyof typeof PhosphorIcons;
  }>;
  selectedCategory: string | null;
}

const FilterBar = ({ categories, selectedCategory }: FilterBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category: string | null) => {
    if (category === null) {
      window.location.href = '/products';
    } else {
      window.location.href = `/productos/${category.toLowerCase()}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative mb-4">
      <button
        className="flex items-center rounded-2xl bg-primary-900 px-4 py-2 text-primary-300 laptop:hidden"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="category-menu"
      >
        <PhosphorIcons.List className="mr-2 size-5" />
        Categorias
      </button>

      <div
        id="category-menu"
        role="menu"
        className={`absolute inset-x-0 z-10 mt-2 rounded-xl border-primary-800 bg-black/20 p-2 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out laptop:static laptop:mt-0 laptop:flex laptop:h-fit laptop:w-full laptop:flex-row laptop:flex-wrap laptop:items-center laptop:justify-start laptop:gap-4 laptop:border-none laptop:bg-transparent laptop:p-8 laptop:shadow-none ${isMenuOpen ? 'h-fit opacity-100' : 'max-h-0 opacity-0 laptop:max-h-full laptop:opacity-100'} overflow-hidden`}
      >
        {/* Botón "Todos los productos" - siempre visible */}
        <button
          className={`mb-2 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2 font-fredoka text-xs transition-all duration-200 laptop:mb-0 laptop:w-fit laptop:text-sm ${selectedCategory === null ? 'scale-105 bg-primary-900 text-primary-300 shadow-lg' : 'hover:scale-102 bg-primary-300 text-primary-900 hover:bg-primary-400'} `}
          onClick={() => handleCategoryClick(null)}
        >
          <PhosphorIcons.FlowerLotus className="mr-2 size-5" />
          Todos los productos
        </button>

        {/* Todas las categorías - siempre visibles */}
        {categories.map(({ name, icon }) => {
          const IconComponent = PhosphorIcons[icon] as React.ComponentType<{
            className?: string;
          }>;
          const isActive = selectedCategory === name;

          return (
            <button
              role="menuitem"
              key={name}
              className={`mb-2 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2 font-fredoka text-xs transition-all duration-200 laptop:mb-0 laptop:w-auto laptop:text-sm ${isActive ? 'scale-105 bg-primary-900 text-primary-300 shadow-lg' : 'hover:scale-102 bg-primary-300 text-primary-900 hover:bg-primary-400'} `}
              onClick={() => handleCategoryClick(name)}
            >
              <IconComponent className="mr-2 size-5" />
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
