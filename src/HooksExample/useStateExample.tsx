// https://blog.webdevsimplified.com/2020-04/use-state/

import { useState } from "react"

const UseStateFunctionExample = () => {

    const [counter, setCounter] = useState(0);
    // if initialisation is slow then, do it via function so that react won't re-initialise it on every render

    function changeCount(val: any) {

        setCounter((prev) => prev + val)
    }

    function resetCount() {
        setCounter(0)
    }

    return (
        <>
            <span> {counter}</span>
            <button onClick={() => changeCount(1)}>+</button>
            <button onClick={() => changeCount(-1)}>-</button>
            <button onClick={() => resetCount()}>Reset</button>
        </>
    )
}

export default UseStateFunctionExample