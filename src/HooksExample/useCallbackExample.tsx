import { useCallback, useMemo } from "react"

export default function UseCallback() {
    const a = 1;
    const b = 2;
    const callback = useCallback(() => {
        return a + b
      }, [a, b])
      
     const memo = useMemo(() => {
        return a + b
      }, [a, b])

      console.log('callback ', callback); // return function
      console.log('memo ', memo); // return value
      
      return <></>
}