import { useState, useDeferredValue, useMemo } from "react"

export default function UseDefferedValueEx() {
    const [name, setName] = useState("")
    const deferredName = useDeferredValue(name)
    const val = useMemo(() => {
        console.log('useMemo called...');
        
      for (let i = 0; i < 100000000; i++) {}
        return name;
    }, [deferredName])
  
    function handleChange(e: any) {
      setName(e.target.value)
    }
  
    return (
      <>
        <input type="text" value={name} onChange={handleChange} />
        <p>Name: {name}</p>
        <p>Deffered: {deferredName}</p>
        <p>Val: {val}</p>
      </>
    )
  }