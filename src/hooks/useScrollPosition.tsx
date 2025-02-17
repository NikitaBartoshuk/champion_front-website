import { useEffect, useState } from 'react';



const useScrollPosition = (): number => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const updatePosition = () => {
                setScrollPosition(window.pageYOffset)
            }

            window.addEventListener('scroll', updatePosition)
            updatePosition()

            return () => window.removeEventListener('scroll', updatePosition)
        }
    }, [])

    return scrollPosition
}


export default useScrollPosition;
