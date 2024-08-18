import { useEffect, useRef, useState } from "react";
// import { State, Ref } from "./renderCountEx";

export default function UseREfEx() {
    const inputRef = useRef<any>(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    const [name, setName] = useState("Ankit")
    const previousName = useRef<any>(null)

    useEffect(() => {
        previousName.current = name
    }, [name])

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
            <br />
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>
                 Current Input: {name} <br />
                 Prev Input: {previousName.current} 
            </div>
        </>
    )
}