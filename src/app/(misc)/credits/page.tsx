'use client';

export default function CreditsPage() {
    return (
        <div className="flex flex-col grow items-center gap-6 justify-center">
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-white text-center">
                Crédits
            </h1>
            <div className="flex flex-col gap-4 max-w-3xl px-4 **:text-justify text-zinc-700 dark:text-zinc-300">
                <p>
                    Ce site a été développé par Mathis FAUTSCH. Les images utilisées sur ce site proviennent de diverses sources.
                </p>
                <p>
                    Il s'agit d'une parodie du site personnel de <span className="font-bold">M. Mickaël MARTIN-NEVOT</span>, professeur à l'université d'Aix-Marseille. Vous pouvez consulter son site web ici : <a href="https://mickael-martin-nevot.com" target="_blank" className="text-primary hover:underline">mickael-martin-nevot.com</a>.
                    <br/>
                    Les images originales proviennent des mêmes sources que celles utilisées sur son site (et sont parfois modifiées).
                </p>
                <p>
                    Si vous avez des questions ou des suggestions concernant les crédits ou les sources utilisées, n'hésitez pas à me contacter via le formulaire de contact disponible sur le site.
                </p>
            </div>
        </div>
    )
}