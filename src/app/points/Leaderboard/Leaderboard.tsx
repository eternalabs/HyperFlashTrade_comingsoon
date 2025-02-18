"use client"

import style from "./Leaderboard.module.scss"
import {clsx} from "clsx";
import {leaderboard} from "./data";
import {SortButtons} from "../../components/_common/SortButtons/SortButtons";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";

export const Leaderboard = () => {
    return (
        <div className={style.leaderboard}>

            <p className={style.title}>
                Leaderboard
            </p>

            <div className={clsx(style.card, style.card_mobile)}>

                <div className={style.mobile_left}>

                    <div className={clsx(style.row, style.header_row)}>
                        <p>#</p>
                        <p>User</p>
                    </div>

                    {
                        leaderboard.map(({user, address}, key) => (
                            <div key={key}
                                 className={clsx(style.row, style.body_row)}
                            >
                                <p>{key + 1}</p>
                                <div>
                                    <p>{user}</p>
                                    <p>{address}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>


                <div className={style.mobile_right}>
                    <div className={style.mobile_right_inner}>

                        <div className={clsx(style.row, style.header_row)}>
                            {
                                [
                                    "HYPE Activity", "DeFi Activity", "Referral Activity", "Bonus", " Total Points",
                                ].map((label, key) => (
                                    <div key={key}
                                         className={style.header_cell}
                                    >
                                        <p>{label}</p>
                                        <SortButtons className={style.sortButtons}/>
                                    </div>
                                ))
                            }
                        </div>

                        {
                            leaderboard.map(({user, address, ...row}, key) => (
                                <div key={key}
                                     className={clsx(style.row, style.body_row)}
                                >
                                    {
                                        Object.values(row).map((value, key) => (
                                            <p key={key}>{value}</p>
                                        ))
                                    }
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

            <div className={clsx(style.card, style.card_desktop)}>

                <div className={style.header}>
                    <div className={clsx(style.row, style.header_row)}>
                        <div><p>#</p></div>
                        <div><p>User</p></div>
                        {
                            [
                                "HYPE Activity", "DeFi Activity", "Referral Activity", "Bonus", " Total Points",
                            ].map((label, key) => (
                                <div key={key}>
                                    <p>{label}</p>
                                    <SortButtons className={style.sortButtons}/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={style.body}>

                    <div className={style.body_inner}>
                        {
                            leaderboard.map(({user, address, ...row}, key) => (
                                <div key={key}
                                     className={clsx(style.row, style.body_row)}
                                >
                                    <div><p>{key + 1}</p></div>
                                    <div>
                                        <p>{user}</p>
                                        <p>{address}</p>
                                    </div>

                                    {
                                        Object.values(row).map((value, key) => (
                                            <div key={key}>
                                                <p>{value}</p>
                                            </div>

                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}