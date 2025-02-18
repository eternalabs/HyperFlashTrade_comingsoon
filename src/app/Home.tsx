'use client'

import style from "./HomePage.module.scss"
import {WaterAnimation} from "./components/_common/WaterAnimation/WaterAnimation";
import {svgIcons} from "../assets/svgIcons";
import {playfair_Display} from "../assets/fonts/fonts";
import Link from "next/link";
import {ButtonCustom} from "./components/_common/ButtonCustom/ButtonCustom";
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
    }, {scope: appRef})


    return (
        <div className={style.homePage}
             ref={appRef}
        >
            <WaterAnimation className={style.waterAnimation}/>

            <div className={style.inner}>

                <div className={style.topWrapper}>

                    <div className={style.label}>
                        <p>Built on</p>
                        {svgIcons.bulb}
                        <p>HyperEVM</p>
                    </div>

                    <h1 className={style.title}>
                        <span className="from_left">Mev</span> <span className="from_left">Powered</span> <span
                        className={clsx(playfair_Display.className, style.italic, "from_bottom")}>Staking</span> <span
                        className="from_bottom">Rewards</span>
                    </h1>

                </div>

                <div className={style.bottomWrapper}>

                    <div className={style.items}>
                        {
                            [
                                {
                                    icon: svgIcons.status_up,
                                    text: "TVL",
                                    value: "$12,500,000",
                                },
                                {
                                    icon: svgIcons.moneys,
                                    text: "APY",
                                    value: "8.75%",
                                },
                                {
                                    icon: svgIcons.profile_2user,
                                    text: "Holders",
                                    value: "24,560",
                                },
                            ].map(({icon, text, value}, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <div>
                                        <div>{icon}</div>
                                        <p>{text}</p>
                                    </div>
                                    <p>{value}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className={style.buttons}>
                        {
                            [
                                {
                                    href: "/stakers",
                                    text: "Stakers"
                                },
                                {
                                    href: "/traders",
                                    text: "Traders"
                                },
                            ].map(({href, text}, key) => (
                                <Link key={key}
                                      href={href}
                                      className={style.link}
                                >
                                    <ButtonCustom text={text}
                                                  dark={key === 0}
                                                  classNameWave={style.link_inner}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}