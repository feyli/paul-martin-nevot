"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Image } from "next/dist/client/image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathLevels = pathname.split("/").filter((level) => level.length > 0);

    return (
        <div className={"flex flex-row justify-between gap-px bg-secondary text-sm text-white px-2"}>
            <div className={"flex flex-row items-center gap-px text-sm *:bg-dark *:hover:bg-[#ffcf5b] *:px-2.5 *:h-9 *:flex *:flex-row *:items-center *:gap-1"}>
                <Link href={"/"} className={"rounded-l-xs"}>
                    <FontAwesomeIcon icon={faHome}/>
                    Accueil
                </Link>
                {pathLevels.map((level, index) => {
                    const href = "/" + pathLevels.slice(0, index + 1).join("/");

                    return (
                        <span key={href}>
                            <Link href={href}>{level}</Link>
                        </span>
                    );
                })}
            </div>
            <Image src={"https://www.mickael-martin-nevot.com/_assets/images/banners/univ-amu-faculte-des-sciences.webp"} alt={"logo de l'université d'Aix-Marseille"} width={256} height={32} className={"bg-white my-0.5 rounded-sm"}/>
        </div>
    )
}