"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelopeSquare, faHashtag, faInfoCircle, faSearch, faToggleOff, faToggleOn, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { Image } from "next/dist/client/image-component";
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useTheme } from "@/src/app/providers/ThemeProvider";
import Snackbar from "@/src/app/components/Snackbar";

const ContactForm = dynamic(() => import('@/src/app/components/dialogs/ContactForm'), {
    ssr: false
});

export default function Navbar() {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
    const {theme, toggleTheme} = useTheme();

    // Preload dialog components on hover/focus for instant perceived performance
    const handleContactPreload = () => {
        import('@/src/app/components/dialogs/ContactForm');
    };

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setIsSnackbarOpen(true);
        }
    };

    const contactDialogRef = React.useRef<HTMLDialogElement>(null);

    const openContactDialog = () => {
        if (!contactDialogRef.current) return;
        contactDialogRef.current.showModal();
    }

    return (
        <>
            <nav className={"flex flex-row items-center justify-between bg-linear-to-b px-2 from-primary to-secondary rounded-b-[5px] text-white"}>
                <div className={"flex flex-row items-center h-12.5 gap-3"}>
                    <Link href={"/"}>
                        <Image src={"/web-app-manifest-192x192.png"} alt={"Logo du site"} width={42} height={42} className={"rounded-full border-2 border-white hover:opacity-50"}/>
                    </Link>
                    <div className={"flex flex-row items-center gap-1"}>
                        <span className={"text-white text-lg"}>Pas un recueil de cours</span>
                        <span className={"rounded-full text-xs bg-dark px-2 py-0.5"}>Bêta</span>
                    </div>
                    <div className={"flex flex-row items-center h-full *:h-full *:w-9 *:flex *:flex-col *:items-center *:justify-center *:hover:bg-white/20 *:cursor-pointer"}>
                        <button className={"relative"} popoverTarget={"burger-menu"} popoverTargetAction={"toggle"}>
                            <FontAwesomeIcon icon={faBars}/>
                            <div popover={"auto"} id={"burger-menu"} className={"absolute top-10"}>
                                <ul className={"flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white *:p-2"}>
                                    <li>Test 1</li>
                                    <li>Test 2</li>
                                    <li>Test 3</li>
                                </ul>
                            </div>
                        </button>
                        <Link href={"/information"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                        </Link>
                        <div onClick={toggleTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                            <FontAwesomeIcon icon={theme === 'light' ? faToggleOff : faToggleOn}/>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-row items-center h-9 gap-1"}>
                    <button
                        className={"rounded-sm h-full flex flex-row items-center justify-center bg-dark hover:bg-darker aspect-square cursor-pointer"}
                        onClick={() => openContactDialog()}
                        onMouseEnter={handleContactPreload}
                        onFocus={handleContactPreload}
                        tabIndex={0}
                        aria-label="Open contact form"
                    >
                        <FontAwesomeIcon icon={faEnvelopeSquare}/>
                    </button>
                    <Link href={"https://www.linkedin.com/in/mathis-fautsch-10382033a/"} target={"_blank"} rel={"noopener noreferrer"} className={"rounded-sm h-full flex flex-row items-center justify-center bg-dark hover:bg-darker aspect-square"}>
                        <FontAwesomeIcon icon={faUserGraduate}/>
                    </Link>
                    <Link href={"https://x.com/feylidev/"} target={"_blank"} rel={"noopener noreferrer"} className={"rounded-sm h-full flex flex-row items-center justify-center bg-dark hover:bg-darker aspect-square"}>
                        <FontAwesomeIcon icon={faHashtag}/>
                    </Link>
                    <div className={"rounded-full flex flex-row items-center gap-2 px-3 bg-white dark:bg-gray-800 text-black dark:text-white h-8 text-sm border border-gray-300 dark:border-gray-600"}>
                        <input
                            type={"text"}
                            placeholder={"Rechercher"}
                            className={"bg-transparent outline-none w-20 focus:w-56 placeholder:text-gray-500 dark:placeholder:text-gray-400"}
                            onKeyDown={handleSearchKeyDown}
                        />
                        <FontAwesomeIcon icon={faSearch} className={"text-gray-800 dark:text-gray-200 text-xs shrink-0"}/>
                    </div>
                </div>
            </nav>
            <dialog ref={contactDialogRef} closedby={"any"}>
                <ContactForm/>
            </dialog>
            <Snackbar
                message="Il n'y a pas de documents, ne vous attendez pas à ce que la recherche fonctionne"
                isOpen={isSnackbarOpen}
                onClose={() => setIsSnackbarOpen(false)}
            />
        </>
    )
}
