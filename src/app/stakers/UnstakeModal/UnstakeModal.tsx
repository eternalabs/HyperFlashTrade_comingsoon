'use client'

import style from "./UnstakeModal.module.scss"
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {useEffect, useRef} from "react";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";
import {linkAttr} from "../../../constants/constants";
import {useStore} from "../../../store/useStore";
import {observer} from "mobx-react-lite";

export const UnstakeModal = observer(() => {

    const {appStore: {unstakeModal, setUnstakeModal}} = useStore();

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
        if (unstakeModal) {
            tlRef.current.play()
        } else {
            tlRef.current.reverse()
        }
    }, [unstakeModal]);

    const onClose = () => setUnstakeModal(false)

    return (
        <div className={style.unstakeModal}
             ref={appRef}
        >
            <div className={style.card}>

                <button className={style.closeBtn}
                        onClick={() => onClose()}
                >
                    {svgIcons.shield_cross}
                </button>

                <p className={style.title}>
                    Delayed Unstake Process
                </p>

                <p className={style.description}>
                    Follow these steps to  unstake your HYPE:
                </p>

                <div className={style.items}>
                    {
                        [
                            {
                                icon: svgIcons.repeat_circle,
                                label: "Start Unstaking",
                                text: `Click "Begin Unstake Process" to move your stake from the pool to your wallet's stake account`
                            },
                            {
                                icon: svgIcons.minus_circle,
                                label: "Manually Deactivate",
                                text: `Go to the Manage Stake Accounts page or your wallet and click "Deactivate" to disable your stake account`
                            },
                            {
                                icon: svgIcons.lock,
                                label: "Wait for Unlocking",
                                text: `Your stake unlocks at the next epoch boundary (e.g., May 16, 2024, 8:01 PM) and remains locked until then`
                            },
                            {
                                icon: svgIcons.money_send,
                                label: "Withdraw HYPE",
                                text: `After deactivation, click "Withdraw" to transfer HYPE to your wallet and use it freely`
                            },
                        ].map(({icon, label, text}, key) => (
                            <div key={key}
                                 className={style.item}
                            >
                                <div>{icon}</div>
                                <div>
                                    <p>{label}</p>
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <p className={clsx(style.description, style.description_bottom)}>
                    Important: This action is irreversible. Once initiated, Jito will remove your stake from the stake pool.Need help? Check out our detailed wallet guides: <a
                    href="#" {...linkAttr}>Phantom Wallet Guide</a>, <a href="" {...linkAttr}>Solflare Wallet Guide</a>
                </p>

                <div className={style.buttons}>
                    {
                        [
                            {
                                text: "Begin unstake process",
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
})