import { ReactNode } from 'react';

export default function Button({ children, className, onClick }: Readonly<{ children?: ReactNode, className?: string, onClick?: () => void }>) {
    
    return (
        <button className={`flex flex-col items-center cursor-pointer scheme-dark rounded-[5] p-2 mt-4 ${className}`} onClick={onClick}>
            { children }
        </button>
    )
}
