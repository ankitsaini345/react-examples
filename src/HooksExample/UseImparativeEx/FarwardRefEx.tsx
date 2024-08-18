import * as React from "react"
import { useState, useRef, useImperativeHandle } from "react"

function CustomInput(props: any, ref:any) {
    useImperativeHandle(
      ref,
      () => {
        return { alertValue: () => alert(props.value) }
      },
      [props.value]
    )
  
    return <input ref={ref} style={{ backgroundColor: "red" }} {...props} />
  }
  
  const WrappedCustomInput =  React.forwardRef(CustomInput)

export default function ForwardRefEx() {
    const [value, setValue] = useState("")
    const inputRef = useRef<any>()
  
    return (
      <>
        <WrappedCustomInput
          ref={inputRef}
          value={value}
          onChange={(e:any) => setValue(e.target.value)}
        />
        <button onClick={() => inputRef.current.alertValue()}>Alert</button>
      </>
    )
  }
