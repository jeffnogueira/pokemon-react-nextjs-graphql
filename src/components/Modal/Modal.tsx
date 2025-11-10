import { useAppSelector } from "@/hooks";
import { modalValue } from "@/slice";
import { ReactNode, useEffect, useRef } from "react";
import Button from "../Button";

export default function Modal({ children, onClose }: Readonly<{ children: ReactNode, onClose: () => void }>) {

    const modal = useAppSelector(modalValue);

    useEffect(() => {
        if (modal.open)
            document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [modal.open, onClose]);

    const modalRef: any = useRef(null);

    const handleClickOutside = (e: Event) => {
      if (modalRef.current && !modalRef.current.contains(e.target))
        onClose();
    };
    
    return (
        modal.open &&
            <div className="fixed flex items-center justify-center align-center top-0 z-[4] h-full w-full bg-[#00000080] text-black">
                <div className="flex flex-col justify-between min-w-48 min-h-48 bg-white p-3 rounded-[10]" ref={modalRef}>
                    <section className="flex flex-row justify-between">
                        <h2>{ modal.title }</h2>
                        <span className="cursor-pointer" onClick={onClose}>X</span>
                    </section>
                    <section>
                        { children }
                    </section>
                    <section className="flex flex-row justify-end">
                        <Button className="p-[0_5_0_5] border" onClick={onClose}>
                            <span>Close</span>
                        </Button>
                    </section>
                </div>
            </div>
    )
}