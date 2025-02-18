'use client'

import style from "./StakeModal.module.scss"
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {useEffect, useRef} from "react";
import {svgIcons} from "../../../assets/svgIcons";
import {WaterAnimation} from "../../components/_common/WaterAnimation/WaterAnimation";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

export const StakeModal = observer(() => {

    const {appStore: {stakeModal, setStakeModal}} = useStore();

    const appRef = useRef<HTMLDivElement>(null!);
    const tlRef = useRef<gsap.core.Timeline>(null!);

    useGSAP(() => {
        tlRef.current = gsap.timeline()
            .set(appRef.current, {display: "flex"})
            .to(appRef.current, {
                opacity: 1,
                duration: 0.3
            })
        tlRef.current.pause()
    }, {scope: appRef})

    useEffect(() => {
        if (stakeModal) {
            tlRef.current.play()
        } else {
            tlRef.current.reverse()
        }
    }, [stakeModal]);

    const onClose = () => setStakeModal(false)

    return (
        <div className={style.stakeModal}
             ref={appRef}
        >
            <div className={style.card}>

                <button className={style.closeBtn}
                        onClick={() => onClose()}
                >
                    {svgIcons.shield_cross}
                </button>

                <WaterAnimation className={style.waterAnimation}/>

                <div className={style.label}>
                    {svgIcons.bulb}
                    <p>You've successfully minted HYPE</p>
                </div>

                <p className={style.title}>
                    Congrats on your new <span className={playfair_Display.className}>HYPE!</span>
                </p>

                <p className={style.description}>
                    Enjoy your new HYPE and explore how to use it across the Hype Ecosystem
                </p>

                <div className={style.buttons}>
                    {
                        [
                            {
                                text: "View DeFi Opportunities",
                                onClick: () => {

                                },
                            },
                            {
                                text: "No thanks",
                                onClick: () => onClose(),
                            },
                        ].map(({text, onClick}, key) => (
                            <button key={key}
                                    className={style.button}
                                    onClick={onClick}
                            >
                                <ButtonCustom text={text}
                                              classNameWave={style.button_inner}
                                              dark={key === 0}
                                />
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
})