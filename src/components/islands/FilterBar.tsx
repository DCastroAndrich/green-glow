import * as PhosphorIcons from "@phosphor-icons/react"
import React, { useState } from "react";

interface FilterBarProps {
    categories: Array<{
        name: string
        icon: keyof typeof PhosphorIcons
    }>
    selectedCategory: string | null
}

const FilterBar = ({ categories, selectedCategory }: FilterBarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleCategoryClick = (category: string | null) => {
        if (category === null) {
            window.location.href = '/products'
        } else {
            window.location.href = `/productos/${category.toLowerCase()}`
        }
        setIsMenuOpen(false)
    }

    return (
        <div className="relative mb-4">
            <button className="laptop:hidden flex items-center px-4 rounded-2xl py-2 bg-primary-900 text-primary-300" onClick={toggleMenu}>
                <PhosphorIcons.List className="w-5 h-5 mr-2" />
                Categorias
            </button>

            <div className={`absolute left-0 right-0 z-10 mt-2 p-2 bg-black/20 backdrop-blur-md laptop:bg-transparent rounded-xl border-primary-800 shadow-lg transition-all duration-300 ease-in-out laptop:static laptop:flex laptop:flex-row laptop:flex-wrap laptop:w-full laptop:items-center laptop:h-fit laptop:p-8 laptop:justify-start laptop:gap-4 laptop:mt-0 laptop:border-none laptop:shadow-none ${isMenuOpen ? "h-fit opacity-100" : "max-h-0 opacity-0 laptop:max-h-full laptop:opacity-100"} overflow-hidden`}>

                {/* Botón "Todos los productos" - siempre visible */}
                <button
                    className={`w-full font-fredoka px-4 py-2 mb-2 justify-center laptop:w-fit items-center laptop:mb-0 flex rounded-2xl gap-2 text-xs laptop:text-sm transition-all duration-200 ${selectedCategory === null ? "bg-primary-900 text-primary-300 shadow-lg scale-105" : "bg-primary-300 text-primary-900 hover:bg-primary-400 hover:scale-102"} `}
                    onClick={() => handleCategoryClick(null)}
                >
                    <PhosphorIcons.FlowerLotus className="w-5 h-5 mr-2" />
                    Todos los productos
                </button>

                {/* Todas las categorías - siempre visibles */}
                {categories.map(({ name, icon }) => {
                    const IconComponent = PhosphorIcons[icon] as React.ComponentType<{ className?: string }>
                    const isActive = selectedCategory === name

                    return (
                        <button
                            key={name}
                            className={`w-full font-fredoka px-4 py-2 mb-2 flex items-center justify-center rounded-2xl gap-2 text-xs laptop:w-auto laptop:mb-0 laptop:text-sm transition-all duration-200 ${isActive ? "bg-primary-900 text-primary-300 shadow-lg scale-105" : "bg-primary-300 text-primary-900 hover:bg-primary-400 hover:scale-102"} `}
                            onClick={() => handleCategoryClick(name)}
                        >
                            <IconComponent className="w-5 h-5 mr-2" />
                            {name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default FilterBar