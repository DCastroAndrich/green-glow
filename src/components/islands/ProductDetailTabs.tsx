import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Plant, Heart, HandsClapping, WarningCircle } from "@phosphor-icons/react";
import type { Product } from "@/data/products-data";

interface ProductDetailTabsProps {
  product: Product;
}

const ProductDetailTabs = ({ product }: ProductDetailTabsProps) => {
  const hasVariants = product.variants && product.variants.length > 0;

  // Determina la tab por defecto
  const defaultTab = hasVariants ? "variedades" : "aplicacion";

  return (
    <Tabs
      defaultValue={defaultTab}
      className="w-full desktop:h-[669px] flex flex-col bg-transparent font-fredoka"
    >
      <TabsList className="flex items-center bg-transparent">
        {hasVariants && (
          <TabsTrigger
            value="variedades"
            className="flex w-full items-center gap-1 rounded-3xl data-[state=active]:bg-primary-900 text-primary-400 data-[state=active]:text-primary-400 text-xs tablet:text-base font-normal"
          >
            <Heart /> Variedades
          </TabsTrigger>
        )}
        <TabsTrigger
          value="aplicacion"
          className="flex w-full items-center gap-1 rounded-3xl data-[state=active]:bg-primary-900 text-primary-400 data-[state=active]:text-primary-400 text-xs tablet:text-base font-normal"
        >
          <HandsClapping /> Aplicación
        </TabsTrigger>
        <TabsTrigger
          value="precauciones"
          className="flex w-full items-center gap-1 rounded-3xl data-[state=active]:bg-primary-900 text-primary-400 data-[state=active]:text-primary-400 text-xs tablet:text-base font-normal"
        >
          <WarningCircle /> Precauciones
        </TabsTrigger>
      </TabsList>

      {hasVariants && (
        <TabsContent value="variedades">
          <div className="backdrop-blur-md w-full h-[400px] p-3 flex flex-col items-start gap-4">
            <h4 className="font-fredoka font-medium text-base tablet:text-2xl text-primary-500">
              Variedades
            </h4>
            <ul className="flex flex-col gap-3 w-full overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-hover:scrollbar-thumb-primary-600 scrollbar-thumb-primary-500  scrollbar-track-primary-900">
              {product.variants!.map((variant, idx) => (
                <li key={idx} className="font-fredoka text-primary-400">
                  <h5 className="text-sm tablet:text-lg laptop:text-2xl pb-2">
                    {variant.name}
                  </h5>
                  <p className="text-xs tablet:text-sm laptop:text-xl font-light text-balance tablet:text-pretty">
                    {variant.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      )}

      <TabsContent value="aplicacion">
        <div className="backdrop-blur-md w-full h-[400px] p-3 flex flex-col items-start gap-4">
          <h4 className="font-fredoka font-medium text-base tablet:text-2xl text-primary-500">
            Aplicación
          </h4>
          <ul className="flex flex-col gap-3">
            {product.howToUse.map((item, idx) => (
              <li key={idx} className="font-fredoka text-primary-400">
                <p className="text-xs tablet:text-sm laptop:text-xl font-light text-balance tablet:text-pretty">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="precauciones">
        <div className="backdrop-blur-md w-full h-[400px] p-3 flex flex-col items-start gap-4">
          <h4 className="font-fredoka font-medium text-base tablet:text-2xl text-primary-500">
            Precauciones
          </h4>
          <ul className="flex flex-col gap-3">
            {product.precautions.map((item, idx) => (
              <li key={idx} className="font-fredoka text-primary-400">
                <p className="text-xs tablet:text-sm laptop:text-xl font-light text-balance tablet:text-pretty">
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