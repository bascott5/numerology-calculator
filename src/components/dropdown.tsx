import { useEffect, useRef, useState } from "react";

export default function Dropdown(children: JSX.Element, title: String) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            if(e.target) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler)
    })

    return (
        <div>
            <button onClick={() => setOpen(open)}>{title}</button>
            {
                open ?
                <div>
                    {children}
                </div>
                :
                null
            }
        </div>
    )
}