import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {App} from "./components/A0_App/App";
export const metadata: Metadata = {
    title: {
        default: "HyperFlashTrade",
        template: "%s | HyperFlashTrade"
    },
    description: "Mev Powered Staking Rewards",
    icons: {
        icon: [
            { url: '/icon.png', sizes: 'any' },
            { url: '/favicon.ico', sizes: 'any' }
        ],
        apple: '/icon.png',
    },
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
            <html lang="en">
                <App>
                    {children}
                </App>
            </html>

    );
}
