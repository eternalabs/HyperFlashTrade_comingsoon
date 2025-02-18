'use client'

import style from "./WaveText.module.scss"
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {clsx} from "clsx";
import {useEffect, useRef, useState} from "react";
import {useWindowSize} from "@uidotdev/usehooks";

type WaveTextProps = {
    text: string
    className: string
}

export const WaveText = ({
                             text,
                             className,
                         }: WaveTextProps) => {

    const {width} = useWindowSize();

    const [hover, setHover] = useState(false)
    const onMouseEnter = () => setHover(true)
    const onMouseLeave = () => setHover(false)

    const appRef = useRef<HTMLDivElement>(null!);
    const tweenRefTop = useRef<gsap.core.Tween>(null!);
    const tweenRefBottom = useRef<gsap.core.Tween>(null!);

    const durationLetter = 0.3;
    const staggerLetter = 0.1 / text.length;

    useGSAP(() => {

        tweenRefTop.current = gsap.to(".wave_text_letter_top", {
            yPercent: -100,
            duration: durationLetter,
            //ease: "none",
            stagger: staggerLetter
        })
        tweenRefBottom.current = gsap.to(".wave_text_letter_bottom", {
            yPercent: -100,
            duration: durationLetter,
            //ease: "none",
            stagger: staggerLetter
        })

    }, {scope: appRef})

    useEffect(() => {
        if (width) {
            if (width >= 1440) {
                if (hover) {
                    tweenRefTop.current.play()
                    tweenRefBottom.current.play()
                } else {
                    tweenRefTop.current.reverse()
                    tweenRefBottom.current.reverse()
                }
            }
        }

    }, [hover, width])


    return (
        <>
            <div className={clsx(style.waveText, style.waveText_mobile, Boolean(className) && className)}>
                <div className={style.waveText_inner}>
                    <div className={style.text}>
                        {
                            text.split("").map((letter, key) => (
                                <p key={key}
                                   className={clsx(letter === " " ? style.empty : "")}
                                >
                                    {letter}
                                </p>
                            ))
                        }
                    </div>
                </div>

            </div>


            <div className={clsx(style.waveText, style.waveText_desktop, Boolean(className) && className)}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
                 ref={appRef}
            >
                <div className={style.waveText_inner}>
                    <div className={style.text}>
                        {
                            text.split("").map((letter, key) => (
                                <p key={key}
                                   className={clsx(letter === " " ? style.empty : "wave_text_letter_top")}
                                >
                                    {letter}
                                </p>
                            ))
                        }
                    </div>
                    <div className={style.text}>
                        {
                            text.split("").map((letter, key) => (
                                <p key={key}
                                   className={clsx(letter === " " ? style.empty : "wave_text_letter_bottom")}
                                >
                                    {letter}
                                </p>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>

    )
}