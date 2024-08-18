import { useState, useEffect, useRef } from "react"

export function State() {
    const [rerenderCount, setRerenderCount] = useState(0)

    useEffect(() => {
        setRerenderCount(prevCount => prevCount + 1)
    })

    return <div>{rerenderCount}</div>
}
export function Ref() {
    const rerenderCount = useRef(0)
    const [count, setCount] = useState(0)
    // increasing count will re render the component
    useEffect(() => {
        rerenderCount.current = rerenderCount.current + 1
    })

    return (
        <>
            <div>{rerenderCount.current}</div>
            <div>{count}</div>
            <button onClick={() => setCount((count) => count +1)}>inc count</button>
        </>
    )
}