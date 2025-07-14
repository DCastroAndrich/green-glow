import React, { useState, useEffect } from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
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
        setCurrentPath(window.location.pathname)
    }, [])

    const isActive = (href: string) => {
        return currentPath === href
    }

    const activeClass = "text-primary-400 font-medium border-b border-primary-400"

    return (
        <nav className="relative font-commissioner w-full text-primary-500 bg-black/30 backdrop-blur-md">
            <div className="flex items-center justify-between px-4 py-3 tablet:px-8">
                <a href="/" className="flex items-center space-x-2">
                    <img src="../../../public/favicon-32x32.png" className="h-10 w-10" alt="logo" />
                </a>
                {/* desktop */}
                <div className="hidden tablet:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/about" className={cn("px-3 py-2 transition-colors duration-100", isActive("/about") && activeClass)}>
                                    Conócenos
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>

                                <HowToBuyDialogNavBar />
                            </NavigationMenuItem>

                            <NavigationMenuItem>

                                <NavigationMenuLink href="/products" className={cn("px-3 py-2 transition-colors duration-200", isActive("/products") && activeClass)}>
                                    Productos
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/contacto" className={cn("px-3 py-2 transition-colors duration-200", isActive("/contacto") && activeClass)}>
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
                            <List className="h-8 w-8" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'right'} className='bg-black/30 backdrop-blur-md border-none text-primary-500'>
                        <nav className="flex flex-col gap-8 ">
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
        setCurrentPath(window.location.pathname)
    }, [])

    const isActive = props.href === currentPath
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'hover:text-primary-600  focus:text-primary-600 block select-none space-y-3  border-b border-stone-600 gap-2 pb-1 leading-none no-underline outline-none transition-colors', isActive && 'text-primary-300 font-medium',
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-2 pb-2">
                        <Icon className="h-5 w-5" />
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
