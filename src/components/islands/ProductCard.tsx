import { Eye } from "@phosphor-icons/react";

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
    product: {
        id: number
        name: string
        presentations: { size: string; price: number }[]
        imageUrl: string
        category: string
    }
    selectedCategory?: string | null
}

const ProductCard = ({ product, selectedCategory }: ProductCardProps) => {
    // Siempre usar la ruta /productos/[categoria]/[id] para consistencia
    const categoryForUrl = selectedCategory || product.category
    const productUrl = `/productos/${categoryForUrl.toLowerCase()}/${product.id}`

    return (
        <Card className="flex flex-col items-start laptop:items-center justify-center gap-2 laptop:gap-2.5 w-[320px] tablet:w-[240px] laptop:w-[406px] h-[357px] tablet:h-[267px] laptop:h-[551px] pb-2.5 laptop:p-0 rounded-[20px] bg-transparent border-2 laptop:border-none border-primary-300 overflow-hidden group relative">
            <CardContent className="p-0 w-full h-4/5 tablet:h-3/5 laptop:h-[477px] overflow-hidden relative">
                <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} className="w-full h-full laptop:rounded-b-xl object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 laptop:group-hover:backdrop-blur laptop:group-hover:backdrop-grayscale rounded-[20px] rounded-b-lg cursor-pointer ">
                    <Button asChild className="hidden laptop:flex w-fit text-primary-500 hover:bg-primary-700/50 rounded-3xl bg-primary-900">
                        <a href={productUrl}> <Eye />  Ver producto </a>
                    </Button>
                    <Button asChild className="laptop:hidden w-full h-full">
                        <a href={productUrl}></a>
                    </Button>

                </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center justify-between tablet:justify-center w-full h-1/5 tablet:h-2/5 laptop:h-1/5 px-2 laptop:px-3 laptop:pt-3 pb-5 ">
                <h3 className="w-full h-fit text-base laptop:text-lg font-extralight font-fredoka text-primary-200 text-balance ">{product.name}</h3>
                <p className="font-fredoka font-medium text-xl tablet:text-2xl text-primary-500 w-fit text-nowrap ">
                    {product.presentations && product.presentations.length > 0
                        ? `$${product.presentations[0].price.toLocaleString('es-AR')}`
                        : "Precio no disponible"}
                </p>
            </CardFooter>
        </Card>
    )
}

export default ProductCard