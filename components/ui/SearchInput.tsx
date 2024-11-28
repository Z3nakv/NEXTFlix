'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    // Estado del input inicializado con el valor actual de los searchParams
    const [searchTerm, setSearchTerm] = useState(searchParams?.get("query") || "");
    const [showInput, setShowInput] = useState(false);
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    // Realiza la búsqueda con debounce solo si el input cambia
    const handleSearch = (search: string) => {
        const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
        if (search) {
            params.set("query", search);
        } else {
            params.delete("query");
        }

        // Actualiza la URL solo si hay un cambio en el valor del input
        if (search !== '') {
            replace(`/search?${params.toString()}`);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    // Detecta clics fuera del input para cerrarlo
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setShowInput(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Actualiza la URL solo después de 300ms de inactividad al escribir
    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            handleSearch(searchTerm);
        }, 300);

        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, [searchTerm]);

    // Resetear el valor del input al cambiar de página
    useEffect(() => {
        setSearchTerm(searchParams?.get("query") || "");
    }, [searchParams]);

    return (
        <form
            ref={formRef}
            className="relative flex items-center gap-2"
            onSubmit={handleSubmit}
        >
            <button
                className="text-white text-xl hover:text-gray-400 transition-all"
                type="button"
                aria-label="Enviar búsqueda"
                onClick={() => setShowInput(!showInput)}
            >
                <FaSearch />
            </button>
            <div
                className={`rounded-md border border-white transition-all duration-300 ease-in-out overflow-hidden absolute bottom-[-50px] right-0 ${showInput ? "w-[250px] opacity-100" : "w-0 opacity-0"
                    }`}
            >
                <input
                    type="text"
                    className={`w-full bg-[#141414] text-white px-4 py-2 rounded-md border border-transparent placeholder-gray-500 transition-all`}
                    aria-label="Buscar"
                    placeholder="Títulos, géneros, personas"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
            </div>
        </form>
    );
}
