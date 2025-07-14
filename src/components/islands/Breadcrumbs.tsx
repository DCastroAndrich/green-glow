import React from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { Dot } from "@phosphor-icons/react";

interface BreadcrumbsProps {
    productName: string
    categoryName?: string
    categorySlug?: string
}

const Breadcrumbs = ({ productName, categoryName, categorySlug }: BreadcrumbsProps) => {
    // Caso especial: página de todos los productos
    const isAllProducts = !categoryName && (productName.toLowerCase() === "productos" || productName.toLowerCase() === "todos los productos");

    // Definir los segmentos y sus rutas
    const segments = [
        { label: "Home", href: "/" },
    ];
    if (isAllProducts) {
        segments.push({ label: "Todos los productos", href: "" });
    } else {
        segments.push({ label: "Productos", href: "/products" });
        if (categoryName && categorySlug) {
            segments.push({ label: categoryName, href: `/productos/${categorySlug}` });
        }
        // Solo agregar el producto si es distinto de la categoría
        if (!categoryName || productName !== categoryName) {
            segments.push({ label: productName, href: "" });
        }
    }

    return (
        <Breadcrumb className="w-full h-fit items-center justify-start gap-1 pl-5 tablet:pl-8 font-fredoka opacity-70 hover:opacity-100 transition-opacity duration-300">
            <BreadcrumbList>
                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1;
                    return (
                        <React.Fragment key={segment.label}>
                            <BreadcrumbItem>
                                {isLast || !segment.href ? (
                                    <BreadcrumbPage className="font-light text-xs tablet:text-sm desktop:text-base text-primary-200">{segment.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink className="font-extralight text-xs tablet:text-sm desktop:text-base text-primary-300 hover:text-primary-200 transition-colors duration-200" href={segment.href}>{segment.label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator><Dot className="text-primary-400 text-xs" /> </BreadcrumbSeparator>}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default Breadcrumbs