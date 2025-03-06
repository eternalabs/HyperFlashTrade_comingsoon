"use react"

import {StoreProvider} from "../../../store/StoreProvider";
import {App} from "./App";
import React from "react";

export const AppContainer = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <StoreProvider>
            <App>
                {children}
            </App>
        </StoreProvider>
    )
}