import { useEffect, useState, useRef} from "react";

export default function Dropdown(children: any, title: String) {
    useEffect(() => {
        const handler = (e: Event) => {
            if(!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        window.addEventListener("mousedown", handler);
        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

    let menuRef = useRef<any>();

    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(open)}>{title}</button>
            {open ?
                <div ref={menuRef}>
                    <ul>{children}</ul>
                </div>
                :
                null
            }
        </div>
    )
}