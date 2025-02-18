'use client'

import style from "./Settings.module.scss"
import {useState} from "react";
import {clsx} from "clsx";

const filters = ["Days", "Epochs"];
const intervals = ["1D", "1W", "1M", "All"];


export const Settings = () => {
    const [filter, setFilter] = useState(filters[0]);
    const [interval, setInterval] = useState(intervals[0]);



    return (
        <div className={style.settings}>

            <div className={clsx(style.btns, style.filters)}>
                {
                    filters.map((_filter, key) => (
                        <button key={key}
                            className={clsx({
                            [style.btn]: true,
                            [style.btn_selected]: _filter === filter,
                        })}
                                onClick={() => setFilter(_filter)}
                        >
                            <p>{_filter}</p>
                        </button>
                    ))
                }
            </div>

            <div className={clsx(style.btns, style.intervals)}>
                {
                    intervals.map((_interval, key) => (
                        <button key={key}
                                className={clsx({
                                    [style.btn]: true,
                                    [style.btn_selected]: _interval === interval,
                                })}
                                onClick={() => setInterval(_interval)}
                        >
                            <p>{_interval}</p>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}