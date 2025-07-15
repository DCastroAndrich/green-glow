import { Eye } from '@phosphor-icons/react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    presentations: { size: string; price: number }[];
    imageUrl: ImageMetadata;
    category: string;
  };
  selectedCategory?: string | null;
}

const ProductCard = ({ product, selectedCategory }: ProductCardProps) => {
  // Siempre usar la ruta /productos/[categoria]/[id] para consistencia
  const categoryForUrl = selectedCategory || product.category;
  const productUrl = `/productos/${categoryForUrl.toLowerCase()}/${product.id}`;

  return (
    <Card className="group relative flex h-[357px] w-[320px] flex-col items-start justify-center gap-2 overflow-hidden rounded-[20px] border-2 border-primary-300 bg-transparent pb-2.5 tablet:h-[267px] tablet:w-[240px] laptop:h-[551px] laptop:w-[406px] laptop:items-center laptop:gap-2.5 laptop:border-none laptop:p-0">
      <CardContent className="relative h-4/5 w-full overflow-hidden p-0 tablet:h-3/5 laptop:h-[477px]">
        <img
          src={product.imageUrl.src || '/placeholder.svg'}
          alt={product.name}
          className="size-full object-cover laptop:rounded-b-xl"
        />
        <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-[20px] rounded-b-lg bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 laptop:group-hover:backdrop-blur laptop:group-hover:backdrop-grayscale">
          <Button
            asChild
            className="hidden w-fit rounded-3xl bg-primary-900 text-primary-500 hover:bg-primary-700/50 laptop:flex"
          >
            <a href={productUrl}>
              {' '}
              <Eye /> Ver producto{' '}
            </a>
          </Button>
          <Button asChild className="size-full laptop:hidden">
            <a href={productUrl}></a>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex h-1/5 w-full flex-row items-center justify-between px-2 pb-5 tablet:h-2/5 tablet:justify-center laptop:h-1/5 laptop:px-3 laptop:pt-3">
        <h3 className="h-fit w-full text-balance font-fredoka text-base font-extralight text-primary-200 laptop:text-lg">
          {product.name}
        </h3>
        <p className="w-fit text-nowrap font-fredoka text-xl font-medium text-primary-500 tablet:text-2xl">
          {product.presentations && product.presentations.length > 0
            ? `$${product.presentations[0].price.toLocaleString('es-AR')}`
            : 'Precio no disponible'}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
