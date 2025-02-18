'use client'

import style from "./Stakers.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {playfair_Display} from "../../assets/fonts/fonts";
import {useState} from "react";
import {clsx} from "clsx";
import {Stake} from "./Stake/Stake";
import {Unstake} from "./Unstake/Unstake";

export const Stakers = () => {
    const [tab, setTab] = useState(0);

    return (
        <div className={style.stakers}>

            <div className={style.inner}>

                <div className={style.top}>

                    <div className={style.label}>
                        <p>Built on</p>
                        {svgIcons.bulb}
                        <p>HyperEVM</p>
                    </div>

                    <h1 className={style.title}>
                        Mev Powered <span className={playfair_Display.className}>Staking</span> Rewards
                    </h1>

                    <p className={style.description}>
                        Boost your yield by up to 15% when you stake with Hyper<span
                        className={playfair_Display.className}>Flash</span>
                    </p>

                </div>

                <div className={style.bottom}>

                    <p className={style.bottomLabel}>
                        Get flashHYPE
                    </p>

                    <div className={style.card}>
                        <div className={style.tabs}>
                            {
                                ["Stake", "Unstake"].map((label, key) => (
                                    <button key={key}
                                            className={clsx({
                                                [style.tab]: true,
                                                [style.tab_selected]: key === tab,
                                            })}
                                            onClick={() => setTab(key)}
                                    >
                                        <p className={clsx({
                                            [style.tabLabel]: true,
                                            [style.tabLabel_selected]: key === tab,
                                        })}>
                                            {label}
                                        </p>
                                        {
                                            key === 0 && (
                                                <p className={style.info}>≈ 11.69% APY</p>
                                            )
                                        }

                                    </button>
                                ))
                            }
                        </div>

                        <div className={style.cardBody}>
                            { tab === 0 && <Stake/> }
                            { tab === 1 && <Unstake/> }
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

