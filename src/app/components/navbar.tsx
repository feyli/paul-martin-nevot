"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelopeSquare, faInfoCircle, faSearch, faToggleOff, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ContactForm from "@/src/app/components/dialogs/ContactForm";
import { BaseDialog } from "@/src/app/components/dialogs/BaseDialog";
import { useState } from "react";

export default function Navbar() {
    const [isContactDialogOpen, setIsContactDialogOpen] = useState<boolean>(false);

    return (
        <>
            <nav className={"flex flex-row items-center justify-between bg-linear-to-b px-2 from-primary to-secondary rounded-b-[5px] text-white"}>
                <div className={"flex flex-row items-center h-12.5 gap-3"}>
                    <div className={"flex flex-row items-center gap-1"}>
                        <span className={"text-white text-lg"}>Pas un recueil de cours</span>
                        <span className={"rounded-full text-xs bg-dark px-2 py-0.5"}>Bêta</span>
                    </div>
                    <div className={"flex flex-row items-center h-full *:h-full *:w-9 *:flex *:flex-col *:items-center *:justify-center *:hover:bg-white/20 *:cursor-pointer"}>
                        <div onClick={() => alert("To be implemented")}>
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                        <Link href={"/information"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                        </Link>
                        <div onClick={() => alert("To be implemented")}>
                            <FontAwesomeIcon icon={faToggleOff}/>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-row items-center h-9 gap-1"}>
                    <div className={"rounded-sm h-full flex flex-row items-center justify-center bg-dark hover:bg-darker aspect-square cursor-pointer"} onClick={() => setIsContactDialogOpen(true)}>
                        <FontAwesomeIcon icon={faEnvelopeSquare}/>
                    </div>
                    <Link href={"https://www.linkedin.com/in/mathis-fautsch-10382033a/"} target={"_blank"} rel={"noopener noreferrer"} className={"rounded-sm h-full flex flex-row items-center justify-center bg-dark hover:bg-darker aspect-square"}>
                        <FontAwesomeIcon icon={faUserGraduate}/>
                    </Link>
                    <div className={"rounded-full flex flex-row items-center gap-2 px-3 bg-white text-black h-8 text-sm border border-gray-300"}>
                        <input type={"text"} placeholder={"Rechercher"} className={"bg-transparent outline-none w-20 focus:w-56"}/>
                        <FontAwesomeIcon icon={faSearch} className={"text-gray-800 text-xs shrink-0"}/>
                    </div>
                </div>
            </nav>
            <BaseDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)}>
                <ContactForm/>
            </BaseDialog>
        </>
    )
}
