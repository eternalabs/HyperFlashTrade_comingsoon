import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {App} from "./components/A0_App/App";
export const metadata: Metadata = {
    title: "HyperFlash",
    description: "Mev Powered Staking Rewards",
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
