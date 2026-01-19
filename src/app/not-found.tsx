import { Image } from "next/dist/client/image-component";
import Link from "next/dist/client/link";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen items-start w-fit mx-auto">
            <Image src={"https://www.mickael-martin-nevot.com/_assets/images/404.webp"} alt={"représentation de papier déchiré laissant paraitre le code source de la page"} width={250} height={190}/>
            <h5>
                Cette page n'existe pas ou plus, veuillez cliquer <Link href={"/"} className={"text-primary"}>ici</Link> pour revenir à la page d'accueil.
            </h5>
        </div>
    );
}