export default function Error({ message }: Readonly<{ message: string}>) {
    
    return (
        <article className={`flex items-center justify-center`}>
            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 9V13" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                    <path d="M12 17.0195V17" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </g>
            </svg>
            <div className={`flex flex-col items-start p-3 text-[#a3a3a3]`}>
                <h2>Error</h2>
                <p>{message}</p>
                <p>Tente novamente, por favor.</p>
            </div>
        </article> 
    )
}