'use client'

import style from "./Referals.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {useState} from "react";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";
import {clsx} from "clsx";

export const Referals = () => {

    const code = "i7Hhs81609k8gjKJHnJS0817ad281klJ";

    const [copied, setCopied] = useState(false)

    const onCopy = () => {
        if (!copied) {
            navigator.clipboard.writeText(code).then(() => {
            });
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000)
        }
    }

    return (
        <div className={style.referals}>

            <p className={style.title}>
                Referals
            </p>

            <div className={style.card}>

                <p className={style.label}>
                    Code
                </p>

                <div className={style.codeWrapper}>
                    <p className={clsx(style.code, style.code_mobile)}>
                        {code.slice(0,8)}...{code.slice(code.length - 8, code.length)}
                    </p>
                    <p className={clsx(style.code, style.code_desktop)}>{code}</p>

                    <button onClick={onCopy}>
                        {copied ? svgIcons.check : svgIcons.copy}
                    </button>
                </div>

                <button className={style.generateBtn}>
                <ButtonCustom text="Convert to flashHYPE"
                                  classNameWave={style.generateBtn_inner}
                    />
                </button>

                <div className={style.row}>
                    <p className={style.label}>
                        Top Referals
                    </p>
                    <p className={style.label}>
                        Rewards Earned
                    </p>
                </div>

                <div className={style.topReferals}>
                    {
                        [
                            {
                                icon: "/png/icon0.png",
                                address: "Jx7k...b65A",
                                rewards: "121,524.128",
                            },
                            {
                                icon: "/png/icon1.png",
                                address: "Jhg4...5FG8",
                                rewards: "118,937.024",
                            }
                        ].map(({icon, address, rewards}, key) => (
                            <div key={key}
                                 className={style.item}
                            >
                                <div>
                                    <img src={icon as string} alt=""/>
                                    <p>{address}</p>
                                </div>
                                <p>{rewards}</p>
                            </div>
                        ))
                    }
                </div>

                <button className={style.moreBtn}>
                    <p>More</p>
                </button>

            </div>

        </div>
    )
}