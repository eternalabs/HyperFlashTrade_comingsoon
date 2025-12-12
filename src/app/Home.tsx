'use client'

import style from "./HomePage.module.scss"
import {WaterAnimation} from "./components/_common/WaterAnimation/WaterAnimation";
import {playfair_Display} from "../assets/fonts/fonts";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {useRef} from "react";
import {clsx} from "clsx";

export const Home = () => {

    const appRef = useRef<HTMLDivElement>(null!);

    useGSAP(() => {
        gsap.timeline()
            .set(".from_left", {
                x: "-100px",
                y: "100px",
                opacity: 0,
            })
            .set(".from_bottom", {
                x: "100px",
                y: "100px",
                opacity: 0,
            })
            .set(".fade_in", {
                opacity: 0,
            })
            .to(".from_left", {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
            }, "label_0")
            .to(".from_bottom", {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
            }, "label_0")
            .to(".fade_in", {
                opacity: 1,
                duration: 1,
                delay: 0.3,
            }, "label_0")
    }, {scope: appRef})


    return (
        <div className={style.homePage}
             ref={appRef}
        >
            <WaterAnimation className={style.waterAnimation}/>

            <div className={style.inner}>

                <div className={style.topWrapper}>

                    <h1 className={style.title}>
                        <span className="from_left">Coming</span> <span 
                        className={clsx(playfair_Display.className, style.italic, "from_bottom")}>Soon</span>
                    </h1>

                    <p className={clsx(style.quote, "fade_in")}>
                        Something interesting is cooking up...
                    </p>

                </div>

            </div>
        </div>
    )
}