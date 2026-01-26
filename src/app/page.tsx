import { Image } from "next/dist/client/image-component";

export default function Home() {
    return (
        <div className="flex flex-col grow items-center gap-6 justify-center">
            <div className={"flex flex-row gap-4 w-1/3"}>
                <h1 className="text-4xl font-bold text-zinc-800 dark:text-white text-right self-end">
                    Bienvenue sur le site personnel de Paul Martin Nevot
                </h1>
                <Image 
                    src={"/paul-martin-nevot.webp"} 
                    alt={"photo de Paul Martin Nevot"} 
                    width={382} 
                    height={512} 
                    className={"w-auto h-64"}
                    sizes="(max-width: 768px) 50vw, 382px"
                    quality={75}
                    fetchPriority="high"
                    loading="eager"
                />
            </div>
        </div>
    );
}
