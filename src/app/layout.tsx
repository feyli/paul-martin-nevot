import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/app/components/Navbar";
import React from "react";
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Breadcrumbs from "@/src/app/components/Breadcrumbs";
import { ThemeProvider } from "@/src/app/providers/ThemeProvider";
import { cookies } from "next/headers";
import localFont from "next/font/local";

const constantia = localFont({
    src: '../../public/fonts/constan.woff2'
})

config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Paul Martin-Nevot",
    description: "Site web personnel de Paul Martin-Nevot",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const themeCookie = cookieStore.get('theme');
    const theme = themeCookie?.value === 'dark' ? 'dark' : 'light';
    
    // noinspection HtmlRequiredTitleElement
    return (
        <html lang="en" className={theme === 'dark' ? 'dark' : '' + ' ' + constantia.className}>
        <head>
            <style>{dom.css()}</style>
            <link rel="dns-prefetch" href="https://www.mickael-martin-nevot.com" />
            <link rel="preconnect" href="https://www.mickael-martin-nevot.com" crossOrigin="anonymous" />
            <meta name="apple-mobile-web-app-title" content="Paul Martin-Nevot" />
        </head>
        <body
        >
            <ThemeProvider initialTheme={theme}>
                <div className={"flex flex-col gap-0.5 flex-1 min-h-screen"}>
                    <Navbar/>
                    <Breadcrumbs />
                    <main className={"flex grow"}>
                        {children}
                    </main>
                </div>
            </ThemeProvider>
        </body>
        </html>
    );
}
