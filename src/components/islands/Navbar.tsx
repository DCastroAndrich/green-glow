import React, { useState, useEffect } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import {
  List,
  Drop,
  Coin,
  HandSoap,
  FlowerLotus,
  MarkerCircle,
  JarLabel,
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import HowToBuyDialogNavBar from './HowToBuyDialogNavBar';
import logoIcon from '@/assets/Logo.webp';

const items = [
  { nombre: 'Todos los productos', href: '/products', icon: FlowerLotus },
  { nombre: 'Aceites', href: '/productos/aceites', icon: Drop },
  { nombre: 'Cosmeticos', href: '/productos/cosmeticos', icon: MarkerCircle },
  { nombre: 'Cremas', href: '/productos/cremas', icon: Coin },
  { nombre: 'Geles', href: '/productos/geles', icon: HandSoap },
  { nombre: 'Ungüentos', href: '/productos/unguentos', icon: JarLabel },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href: string) => {
    return currentPath === href;
  };

  const activeClass =
    'text-primary-400 font-medium border-b border-primary-400';

  return (
    <nav className="relative w-full bg-black/30 font-commissioner text-primary-500 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 tablet:px-8">
        <a href="/" className="flex items-center space-x-2">
          <img src={logoIcon.src} className="size-10" alt="logo" />
        </a>
        {/* desktop */}
        <div className="hidden tablet:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={cn(
                    'px-3 py-2 transition-colors duration-100',
                    isActive('/about') && activeClass
                  )}
                >
                  Conócenos
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <HowToBuyDialogNavBar />
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/productos"
                  className={cn(
                    'px-3 py-2 transition-colors duration-200',
                    isActive('/products') && activeClass
                  )}
                >
                  Productos
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contacto"
                  className={cn(
                    'px-3 py-2 transition-colors duration-200',
                    isActive('/contacto') && activeClass
                  )}
                >
                  Contacto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={'ghost'} size={'icon'} className="tablet:hidden">
              <List className="size-8" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side={'right'}
            className="border-none bg-black/30 text-primary-500 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-8">
              <a
                href="/about"
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                Conócenos
              </a>
              <HowToBuyDialogNavBar />
              <a
                href="/products"
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                Productos
              </a>

              <a
                href="/contacto"
                className="text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ComponentRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = props.href === currentPath;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none gap-2 space-y-3 border-b border-stone-600 pb-1 leading-none no-underline outline-none transition-colors hover:text-primary-600 focus:text-primary-600',
            isActive && 'font-medium text-primary-300',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 pb-2">
            <Icon className="size-5" />
            <div className="font-fredoka text-sm font-medium leading-none">
              {title}
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
