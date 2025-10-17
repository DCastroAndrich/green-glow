import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Heart, HandsClapping, WarningCircle } from '@phosphor-icons/react';
import type { Product, Variant } from '@/data/products-data';

interface ProductDetailTabsProps {
  product: Product;
}

const ProductDetailTabs = ({ product }: ProductDetailTabsProps) => {
  const hasVariants = product.variants && product.variants.length > 0;

  // Determina la tab por defecto
  const defaultTab = hasVariants ? 'variedades' : 'aplicacion';

  return (
    <Tabs
      defaultValue={defaultTab}
      className="flex w-full flex-col bg-transparent font-fredoka desktop:h-[669px]"
    >
      <TabsList className="flex items-center bg-transparent">
        {hasVariants && (
          <TabsTrigger
            value="variedades"
            className="flex w-full items-center gap-1 rounded-3xl text-xs font-normal text-primary-400 data-[state=active]:bg-primary-900 data-[state=active]:text-primary-400 tablet:text-base"
          >
            <Heart /> Variedades
          </TabsTrigger>
        )}
        <TabsTrigger
          value="aplicacion"
          className="flex w-full items-center gap-1 rounded-3xl text-xs font-normal text-primary-400 data-[state=active]:bg-primary-900 data-[state=active]:text-primary-400 tablet:text-base"
        >
          <HandsClapping /> Aplicación
        </TabsTrigger>
        <TabsTrigger
          value="precauciones"
          className="flex w-full items-center gap-1 rounded-3xl text-xs font-normal text-primary-400 data-[state=active]:bg-primary-900 data-[state=active]:text-primary-400 tablet:text-base"
        >
          <WarningCircle /> Precauciones
        </TabsTrigger>
      </TabsList>

      {hasVariants && (
        <TabsContent value="variedades">
          <div className="flex h-[400px] w-full flex-col items-start gap-4 p-3 backdrop-blur-md">
            <h4 className="font-fredoka text-base font-medium text-primary-500 tablet:text-2xl">
              Variedades
            </h4>
            <ul className="scrollbar-thumb-rounded-full flex w-full flex-1 flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-track-primary-900 scrollbar-thumb-primary-500 scrollbar-hover:scrollbar-thumb-primary-600">
              {product.variants!.map((variant: Variant, idx: number) => (
                <li key={idx} className="font-fredoka text-primary-400">
                  <h5 className="pb-2 text-sm tablet:text-lg laptop:text-2xl">
                    {variant.name}
                  </h5>
                  <p className="text-balance text-xs font-light tablet:text-pretty tablet:text-sm laptop:text-xl">
                    {variant.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      )}

      <TabsContent value="aplicacion">
        <div className="flex h-[400px] w-full flex-col items-start gap-4 p-3 backdrop-blur-md">
          <h4 className="font-fredoka text-base font-medium text-primary-500 tablet:text-2xl">
            Aplicación
          </h4>
          <ul className="flex flex-col gap-3">
            {product.howToUse.map((item: string, idx: number) => (
              <li key={idx} className="font-fredoka text-primary-400">
                <p className="text-balance text-xs font-light tablet:text-pretty tablet:text-sm laptop:text-xl">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="precauciones">
        <div className="flex h-[400px] w-full flex-col items-start gap-4 p-3 backdrop-blur-md">
          <h4 className="font-fredoka text-base font-medium text-primary-500 tablet:text-2xl">
            Precauciones
          </h4>
          <ul className="flex flex-col gap-3">
            {product.precautions.map((item: string, idx: number) => (
              <li key={idx} className="font-fredoka text-primary-400">
                <p className="text-balance text-xs font-light tablet:text-pretty tablet:text-sm laptop:text-xl">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductDetailTabs;
