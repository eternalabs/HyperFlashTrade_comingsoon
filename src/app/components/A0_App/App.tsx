"use client"

import {clsx} from "clsx";
import {manrope} from "../../../assets/fonts/fonts";
import {Header} from "../A1_Header/Header";
import React from "react";
import style from "./App.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {StakeModal} from "../../stakers/StakeModal/StakeModal";
import {UnstakeModal} from "../../stakers/UnstakeModal/UnstakeModal";

export const App = observer(({children}: Readonly<{ children: React.ReactNode }>) => {
    const {} = useStore()

    return (
        <body className={clsx(style.app, manrope.className)}>

        <StakeModal/>
        <UnstakeModal/>

        <Header/>

        <main>
            {children}
        </main>

        </body>
    )
})