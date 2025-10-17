import React from 'react';
import FilterBar from '@/components/islands/FilterBar';
import ProductCard from '@/components/islands/ProductCard';
import type { Product } from '@/data/products-data';

/* interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  presentations: { size: string; price: number }[];
  imageUrl: string;
} */

interface ProductDisplayProps {
  products: Product[];
  selectedCategory?: string | null;
  allProducts?: Product[]; // Para obtener todas las categorías disponibles
}

const categoryIcons = {
  Aceites: 'Drop',
  Cremas: 'Coin',
  Cosméticos: 'MarkerCircle',
  Geles: 'HandSoap',
  Unguentos: 'JarLabel',
} as const;

type CategoryIcon = keyof typeof categoryIcons;

const ProductDisplay = ({
  products,
  selectedCategory,
  allProducts,
}: ProductDisplayProps) => {
  // Usar allProducts si está disponible, sino usar products
  const productsForCategories = allProducts || products;

  const categories = Array.from(
    new Set(productsForCategories.map((product) => product.category))
  ).map((category) => ({
    name: category,
    icon: categoryIcons[category as CategoryIcon] || 'Question',
  }));

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex w-full flex-col items-center">
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory ?? null}
      />
      <div className="flex h-fit w-11/12 flex-col flex-wrap items-center justify-center gap-4 tablet:flex-row">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            selectedCategory={selectedCategory}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
