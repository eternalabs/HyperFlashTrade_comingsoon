import {clsx} from "clsx";
import {validatorsList} from "../data";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../../assets/svgIcons";
import style from "./RecentRounds.module.scss";

export const RecentRounds = () => {
    return (
        <div className={clsx(style.recentRounds, style.block)}>

            <p className={style.label}>
                Recent Rounds
            </p>

            <div className={style.content}>

                <div className={clsx(style.card, style.validatorsList)}>

                    <div className={style.header}>
                        <div className={clsx(style.header_inner, style.row)}>
                            {
                                ['Validator', 'Round', 'Txs', 'Time'].map((label, key) => (
                                    <p key={key}>{label}</p>
                                ))
                            }
                        </div>

                    </div>

                    <div className={style.body}>
                        <div className={style.body_inner}>
                            {
                                validatorsList.map(({src, address, round, txs, time}, key) => (
                                    <div key={key}
                                         className={clsx(style.row, style.body_row)}
                                    >
                                        <div>
                                            <img src={src} alt=""/>
                                            <p>{`${address.slice(0, 3)}...${address.slice(address.length - 2, address.length)}`}</p>
                                            <p>{`${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}`}</p>
                                        </div>
                                        <div>
                                            <p>{round}</p>
                                        </div>
                                        <div>
                                            <p>{txs}</p>
                                        </div>
                                        <div>
                                            <p>{time}</p>
                                            <p>{`${time} ago`}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>

                <button className={style.seeMoreBtn}>
                    <ButtonCustom text="See more"
                                  dark={false}
                                  classNameWave={style.button_inner}
                    />
                </button>

                <div className={clsx(style.card, style.card_second)}>
                    {
                        [
                            {
                                icon: svgIcons.arrow_right,
                                label: "Current TPS",
                                value: "6.52",
                            },
                            {
                                icon: svgIcons.cards,
                                label: "Total Transactions (24H, 5m Update)",
                                value: "925491",
                            },
                            {
                                icon: svgIcons.tick_circle,
                                label: "QC Ratio over TC",
                                value: "98.61%",
                            },
                        ].map(({icon, label, value}, key) => (
                            <div key={key}
                                 className={style.item}
                            >
                                <div>
                                    <div>{icon}</div>
                                    <p>{label}</p>
                                </div>
                                <p>{value}</p>
                            </div>
                        ))
                    }
                </div>

                <div className={clsx(style.card, style.card_third)}>
                    {
                        [
                            {
                                icon: svgIcons.arrow_up_2,
                                label: "Height",
                                value: "426,016.014",
                            },
                            {
                                icon: svgIcons.clock,
                                label: "Current Block Time",
                                value: "0.825s",
                            },
                            {
                                icon: svgIcons.calendar_2,
                                label: "Epoch",
                                value: "",
                            },
                        ].map(({icon, label, value}, key) => (
                            <div key={key}
                                 className={style.item}
                            >
                                <div>
                                    <div>{icon}</div>
                                    <p>{label}</p>
                                </div>
                                {key !== 2 && <p>{value}</p>}
                                {
                                    key === 2 && (
                                        <div className={style.progressBlock}>
                                            <p>3381</p>
                                            <div className={style.progress}>
                                                <div className={style.row}>
                                                    <p>33.84%</p>
                                                    <p>0d 4h</p>
                                                    <p>ETA 0d 4h</p>
                                                </div>
                                                <div className={style.line}>
                                                    <div style={{width: `${33.84}%`}}/>
                                                </div>
                                            </div>
                                            <p>3382</p>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}