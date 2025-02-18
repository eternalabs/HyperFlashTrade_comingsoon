import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {AppContainer} from "./components/A0_App/AppContainer";
export const metadata: Metadata = {
    title: "HyperFlash",
    description: "Mev Powered Staking Rewards",
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
            <html lang="en">
                <AppContainer>{children}</AppContainer>
            </html>

    );
}
