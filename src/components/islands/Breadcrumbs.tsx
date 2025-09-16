import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Dot } from '@phosphor-icons/react';

interface BreadcrumbsProps {
  productName: string;
  categoryName?: string;
  categorySlug?: string;
}

const Breadcrumbs = ({
  productName,
  categoryName,
  categorySlug,
}: BreadcrumbsProps) => {
  // Caso especial: página de todos los productos
  const isAllProducts =
    !categoryName &&
    (productName.toLowerCase() === 'productos' ||
      productName.toLowerCase() === 'todos los productos');

  // Definir los segmentos y sus rutas
  const segments = [{ label: 'Home', href: '/' }];
  if (isAllProducts) {
    segments.push({ label: 'Todos los productos', href: '' });
  } else {
    segments.push({ label: 'Productos', href: '/productos' });
    if (categoryName && categorySlug) {
      segments.push({
        label: categoryName,
        href: `/productos/${categorySlug}`,
      });
    }
    // Solo agregar el producto si es distinto de la categoría
    if (!categoryName || productName !== categoryName) {
      segments.push({ label: productName, href: '' });
    }
  }

  return (
    <Breadcrumb
      aria-label="breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      className="h-fit w-full items-center justify-start gap-1 pl-5 font-fredoka opacity-70 transition-opacity duration-300 hover:opacity-100 tablet:pl-8"
    >
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          return (
            <React.Fragment key={segment.label}>
              <BreadcrumbItem
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                {...(isLast ? { 'aria-current': 'page' } : {})}
              >
                {isLast || !segment.href ? (
                  <>
                    <BreadcrumbPage
                      itemProp="name"
                      aria-current="page"
                      className="text-xs font-light text-primary-200 tablet:text-sm desktop:text-base"
                    >
                      {segment.label}
                    </BreadcrumbPage>
                    <meta itemProp="position" content={`${index + 1}`} />
                  </>
                ) : (
                  <>
                    <BreadcrumbLink
                      className="text-xs font-extralight text-primary-300 transition-colors duration-200 hover:text-primary-200 tablet:text-sm desktop:text-base"
                      href={segment.href}
                      itemProp="item"
                    >
                      <span itemProp="name">{segment.label}</span>
                    </BreadcrumbLink>
                    <meta itemProp="position" content={`${index + 1}`} />
                  </>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator>
                  <Dot className="text-xs text-primary-400" />{' '}
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
