import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Storefront, Handbag, FlagBannerFold } from '@phosphor-icons/react';

const HowToBuyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-16 w-full rounded-3xl bg-primary-900 text-center font-fredoka text-2xl font-medium text-primary-400">
          ¿Cómo comprar?
        </Button>
      </DialogTrigger>

      <DialogContent
        title="¿Cómo comprar?"
        aria-describedby="como-comprar"
        className="flex w-10/12 flex-col items-center justify-evenly rounded-2xl border-none bg-primary-900 text-primary-300 tablet:gap-8"
      >
        <div className="space-y-8 py-4 tablet:p-8">
          <div className="space-y-2 text-center font-fredoka text-primary-400">
            <h3 className="text-xl font-medium tablet:text-3xl">Paso 1</h3>
            <p className="text-xs font-normal tablet:text-lg">
              Explora nuestro catalogo de productos en la web o en nuestro
              WhatsApp
            </p>
            <Storefront className="mx-auto size-8" />
          </div>
          <div className="space-y-2 text-center font-fredoka text-primary-400">
            <h3 className="text-xl font-medium tablet:text-3xl">Paso 2</h3>
            <p className="text-xs font-normal tablet:text-lg">
              Envíame un mensaje con los productos que te gustaron
            </p>
            <Handbag className="mx-auto size-8" />
          </div>
          <div className="space-y-2 text-center font-fredoka text-primary-400">
            <h3 className="text-xl font-medium tablet:text-3xl">Paso 3</h3>
            <p className="text-xs font-normal tablet:text-lg">
              Preparamos tu pedido y coordinamos la forma de pago y de entrega
            </p>
            <FlagBannerFold className="mx-auto size-8" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HowToBuyDialog;
