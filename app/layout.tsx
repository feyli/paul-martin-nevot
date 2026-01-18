import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import React from "react";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars, faHome, faInfoCircle, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "@/app/components/breadcrumbs";

library.add(faInfoCircle, faBars, faToggleOff, faHome);

config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Paul Martin Nevot",
    description: "Site web personnel de Paul Martin Nevot",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
        >
            <div className={"flex flex-col gap-0.5 flex-1 min-h-screen"}>
                <Navbar/>
                <Breadcrumbs/>
                <main className={"flex grow"}>
                    {children}
                </main>
            </div>
            {/* Portal target for client-side modals */}
            <div id="modal-container" />
        </body>
        </html>
    );
}
