import style from "./Points.module.scss"
import {points} from "./data";
import {clsx} from "clsx";
import {manrope} from "../../../assets/fonts/fonts";
import {TooltipCustom} from "../../components/_common/TooltipCustom/TooltipCustom";

export const Points = () => {
    return (
        <div className={style.points}>

            <p className={style.title}>
                Points
            </p>

            <div className={style.card}>

                <div className={style.card_inner}>
                    {
                        points.map(({groupTitle, items}, key) => (
                            <div key={key}
                                 className={style.group}
                            >
                                <div className={clsx(style.row, style.groupTitle)}>
                                    <p>{groupTitle}</p>
                                </div>

                                <div className={style.items}>
                                    {
                                        items.map(({label, value}, index) => (

                                                <div key={index}
                                                     className={clsx(style.row, style.item)}
                                                >
                                                    <div>
                                                        <p>{label}</p>
                                                        <TooltipCustom className={style.tooltip}
                                                                       content={
                                                                           <div className={style.tooltipContent}>
                                                                               <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                                                               <p className={manrope.className}>
                                                                                   Awarded to users who stake within the first X days or among the first
                                                                                   Y users.
                                                                               </p>
                                                                           </div>
                                                                       }
                                                        />
                                                    </div>

                                                    <p>{value}</p>
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}