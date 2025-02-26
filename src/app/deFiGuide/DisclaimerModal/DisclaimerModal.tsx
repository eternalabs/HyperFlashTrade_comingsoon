'use client'

import style from "./DisclaimerModal.module.scss";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {svgIcons} from "../../../assets/svgIcons";
import {useEffect, useRef} from "react";
import {linkAttr} from "../../../constants/constants";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";

type DisclaimerModalType = {
    showModal: boolean
    onClose: () => void
}

export const DisclaimerModal = ({showModal, onClose}: DisclaimerModalType) => {

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
        if (showModal) {
            tlRef.current.play()
        } else {
            tlRef.current.reverse()
        }
    }, [showModal]);


    return (
        <div className={style.disclaimerModal}
             ref={appRef}
        >

            <div className={style.card}>

                <button className={style.closeBtn}
                        onClick={() => onClose()}
                >
                    {svgIcons.shield_cross}
                </button>

                <p className={style.cardTitle}>
                    Third Party Website Disclaimer
                </p>

                <div className={style.description}>
                    <p>
                        By clicking "Continue," you will be redirected to an external website:
                    </p>
                    <p>
                        <a href="https://app.jxIiDUW7WHSBjsuywewsgsfsfsvsaajakzn" {...linkAttr}>https://app.jxIiDUW7WHSBjsuywewsgsfsfsvsaajakzn</a>
                    </p>
                    <p>
                        Please note that HyperFlash Foundation does not oversee or endorse the content of this
                        third-party site
                    </p>
                </div>

                <div className={style.buttons}>
                    {
                        [
                            {
                                text: "Continue",
                                onClick: () => {

                                },
                            },
                            {
                                text: "Cancel",
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
}