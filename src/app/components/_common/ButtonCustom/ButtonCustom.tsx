'use client'

import style from "./ButtonCustom.module.scss"
import {clsx} from "clsx";
import {WaveText} from "../WaveText/WaveText";
import {useState} from "react";


type ButtonCustomType = {
    text: string
    dark?: boolean
    className?: string
    classNameWave?: string
}

export const ButtonCustom = ({
                                 text,
                                 dark = true,
                                 className,
                                 classNameWave,
                             }: ButtonCustomType) => {

    const [mouseDown, setMouseDown] = useState(false)
    const onMouseDown = () => setMouseDown(true)
    const onMouseUp = () => setMouseDown(false)

    return (
        <div className={clsx({
            [style.buttonCustom]: true,
            [style.buttonCustom_mouseDown]: mouseDown,
            [style.buttonCustom_light]: !dark,
            [style.buttonCustom_light_mouseDown]: !dark && mouseDown,
        }, Boolean(className) && className)}
             onMouseDown={onMouseDown}
             onMouseUp={onMouseUp}

        >
            <WaveText text={text}
                      className={clsx({
                          [style.text]: true,
                          [style.text_light]: !dark,
                      }, Boolean(classNameWave) && classNameWave)}
            />
        </div>
    )
}