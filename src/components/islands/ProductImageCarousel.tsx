/* eslint-disable */
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

type Props = {
    images: string[];
    alt: string;
    className?: string;
};


export default function ProductImageCarousel({
    images,
    alt,
    className,
}: Props) {
    const [index, setIndex] = useState(0);
    const total = images.length;

    const go = (delta: number) => setIndex((i) => (i + delta + total) % total)
    const set = (i: number) => setIndex(((i % total) + total) % total)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') go(-1)
            if (e.key === 'ArrowRight') go(1)
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [total])

    if (!total) return null

    return (
        <div className={className}>
            <div className='relative w-full'>
                <div className='relative mx-auto w-full overflow-hidden rounded-3xl bg-black/10' style={{ aspectRatio: '4/3', maxHeight: '70vh' }}>

                    <img
                        src={images[index]}
                        alt={alt}
                        className='size-full object-cover'
                        loading='lazy'
                    />
                </div>
                {/* flechas laterales */}
                {total > 1 && (
                    <>
                        <Button
                            variant="secondary"
                            type='button'
                            size={'icon'}
                            className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-800/80 px-2 py-2 text-primary-400 backdrop-blur-sm hover:bg-primary-800'
                            aria-label='Anterior'
                            onClick={() => go(-1)}
                        >
                            <CaretLeft size={16} />
                        </Button>
                        <Button
                            variant="secondary"
                            size={'icon'}
                            type='button'
                            className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-800/80 px-2 py-2 text-primary-400 backdrop-blur-sm hover:bg-primary-800'
                            aria-label='Siguiente'
                            onClick={() => go(1)}
                        >
                            <CaretRight size={16} />
                        </Button>
                    </>
                )}
                {/* indicadores para desktop */}
                {total > 1 && (
                    <div className='hidden items-center justify-center gap-2 pt-3 tablet:flex' aria-label='Indicadores'>
                        {images.map((_, i) => (
                            <Button
                                key={i}
                                type='button'
                                aria-label={`Ir a imagen ${i + 1}`}
                                className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary-700' : 'bg-primary-700/30'}`}
                                onClick={() => set(i)}
                            />
                        ))}
                    </div>

                )}
            </div>
        </div>
    )
}
