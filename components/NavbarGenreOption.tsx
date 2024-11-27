'use client';
import { useRef, useEffect, SetStateAction } from "react";

export default function NavbarGenreOption({setShowNavbar , setShowOptions} : {setShowNavbar: React.Dispatch<SetStateAction<boolean>>, setShowOptions: React.Dispatch<SetStateAction<boolean>>}) {

    const menuRef = useRef<HTMLDivElement>(null);

    // Abre y cierra el menú cuando se hace clic en el botón
    const handleToggleOptions = (event: React.MouseEvent) => {
        event.stopPropagation(); // Evita que el clic se propague al listener global
        setShowOptions((prev) => !prev);
        setShowNavbar(false);
    };

    // Función que maneja el clic fuera del menú
    const handleOutsideClick = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowOptions(false);
        }
    };

    // Escucha los clics fuera del menú
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div 
            ref={menuRef}
            >
                <button
                    onClick={handleToggleOptions}
                    className="headerLink text-lg md:text-sm lg:text-lg md:font-light text-shadow"
                >
                    Genres
                </button>
            </div>
        </>
    );
}
