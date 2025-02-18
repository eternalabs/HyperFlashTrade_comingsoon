'use client'

import style from "./ButtonsGroup.module.scss";
import {clsx} from "clsx";


type ButtonsGroupType = {
    labels: string[]
    index: number
    onClick: (key: number) => void
}
export const ButtonsGroup = ({
                                 labels,
                                 index,
                                 onClick
                             }: ButtonsGroupType) => {
    return (
        <div className={style.buttonsGroup}
             style={{
                 gridTemplateColumns: `repeat(${labels.length}, 1fr)`,
             }}
        >
            {
                labels.map((label, key) => (
                    <button key={key}
                            className={clsx({
                                [style.btn]: true,
                                [style.btn_selected]: key === index,
                            })}
                            onClick={() => onClick(key)}
                    >
                        <p>{label}</p>
                    </button>
                ))
            }
        </div>
    )
}