import * as React from "react"
import { useRef, useImperativeHandle, useState } from "react"

function CustomModal({ open, onClose } : any, ref: any) {
    const closeRef = useRef<any>()
    const confirmRef = useRef<any>()
    const denyRef = useRef<any>()
  
    useImperativeHandle(ref, () => {
      return {
        closeBtn: closeRef.current,
        confirmBtn: confirmRef.current,
        denyBtn: denyRef.current,
      }
    })
  
    if (!open) return null
  
    return (
      <div>
        <button ref={closeRef} onClick={onClose}>
          &times;
        </button>
        <h1>Title</h1>
        <div>
          <button ref={confirmRef}>Confirm</button>
          <button ref={denyRef}>Deny</button>
        </div>
      </div>
    )
  }
  
  const WrappedCustomModel = React.forwardRef(CustomModal)


export default function UseImparativeEx() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef<any>()
  
    return (
      <>
        <button onClick={() => setOpen(true)}>Open</button>
        <button onClick={() => modalRef.current.closeBtn.focus()}>
          Focus Close Btn
        </button>
        <button onClick={() => modalRef.current.confirmBtn.focus()}>
          Focus Confirm Btn
        </button>
        <button onClick={() => modalRef.current.denyBtn.focus()}>
          Focus Deny Btn
        </button>
        <WrappedCustomModel ref={modalRef} open={open} onClose={() => setOpen(false)} />
      </>
    )
  }