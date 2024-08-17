import { useEffect, useMemo, useState } from "react";

export default function UseMemoEx() {
    const [num, setNum] = useState(0)
    const [dark, setDark] = useState(false)

    const themeStyle = dark ? {backgroundColor : "white", color : 'black'}
                            : {backgroundColor : "black", color : 'white'}

    const slowFunc = (num: number) => {
        console.log('slow function called...');
        
        for (let i = 0; i < 1000000000; i++) { }
        return num * 2;
    }

    // const double = slowFunc(num); // change theme will also became slow becuse of this

    // useMemo
    const double = useMemo(()=> slowFunc(num), [num])


    return (
        <>
            <input type="number" value={num} onChange={(e)=> setNum(parseInt(e.target.value))} />
            <div style={themeStyle}>{double}</div>
            <button onClick={()=> setDark((prev) => !prev)}>Change Theme</button>
        </>
    )
}