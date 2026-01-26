import { ChangeEvent, useState } from "react";

export default function ContactForm() {
    // Handle form values in variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg w-96 mx-4" onClick={(e) => e.stopPropagation()}>
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 text-left">
                Me contacter
            </h1>
            <div className="flex flex-col gap-4 w-full">
                <input type="text" placeholder="Votre nom" className="border border-zinc-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <input type="email" placeholder="Votre email" className="border border-zinc-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                <textarea placeholder="Votre message" className="border border-zinc-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2 h-32" value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}/>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const mailtoUrl = `mailto:contact@feyli.dev?subject=Contact%20de%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AEmail%20de%20l'expéditeur%20:%20${encodeURIComponent(email)}`;
                        window.open(mailtoUrl, '_self');
                    }}
                    className="bg-primary text-white rounded p-2 hover:bg-dark w-full text-center cursor-pointer"
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
}