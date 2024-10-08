import { useEffect, useState } from "react";

export default function UseEffectFunctionEx() {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [])

    return (
        <>
            Width: {width}
        </>
    )
}
