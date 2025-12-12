import {clsx} from "clsx";
import {manrope} from "../../../assets/fonts/fonts";
import {Header} from "../A1_Header/Header";
import React from "react";
import style from "./App.module.scss"

export const App =({children}: Readonly<{ children: React.ReactNode }>) => {

    return (
        <body className={clsx(style.app, manrope.className)}>

        <Header/>

        <main>
            {children}
        </main>

        </body>
    )
}