import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Storefront, Handbag, FlagBannerFold } from "@phosphor-icons/react";

const HowToBuyDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full h-16 bg-primary-900  text-primary-400 font-fredoka font-medium rounded-3xl text-2xl text-center " >¿Cómo comprar?</Button>
            </DialogTrigger>

            <DialogContent title="¿Cómo comprar?" aria-describedby="como-comprar" className="w-10/12 bg-primary-900 rounded-2xl text-primary-300 border-none flex flex-col items-center justify-evenly tablet:gap-8 ">

                <div className="space-y-8 py-4 tablet:p-8 ">
                    <div className="text-center space-y-2 font-fredoka text-primary-400">
                        <h3 className="font-medium text-xl tablet:text-3xl">Paso 1</h3>
                        <p className="font-normal text-xs tablet:text-lg">Explora nuestro catalogo de productos en la web o  en nuestro WhatsApp</p>
                        <Storefront className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-center space-y-2 font-fredoka text-primary-400">
                        <h3 className="font-medium text-xl tablet:text-3xl">Paso 2</h3>
                        <p className="font-normal text-xs tablet:text-lg">Envíame un mensaje con los productos que te gustaron</p>
                        <Handbag className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-center space-y-2 font-fredoka text-primary-400">
                        <h3 className="font-medium text-xl tablet:text-3xl">Paso 3</h3>
                        <p className="font-normal text-xs tablet:text-lg">Preparamos tu pedido y coordinamos la forma de pago y de entrega</p>
                        <FlagBannerFold className="h-8 w-8 mx-auto" />
                    </div>

                </div>

            </DialogContent>

        </Dialog>
    )
}

export default HowToBuyDialog