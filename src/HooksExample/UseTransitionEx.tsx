import { useState, useTransition } from "react"

export default function UseTransitionEx() {
    const [name, setName] = useState("")
    const [slow, setSlow] = useState("")
    // const [list, setList] = useState(largeList)
    const [isPending, startTransition] = useTransition()

    function handleChange(e: any) {
        setName(e.target.value)
        startTransition(() => {
            for (let i = 0; i < 1000000000; i++) { }
            setSlow(name)
        }
        )
    }

    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            {isPending ? <div>Loading...</div> : <p>Slow: {slow}</p>}

        </>
    )
}