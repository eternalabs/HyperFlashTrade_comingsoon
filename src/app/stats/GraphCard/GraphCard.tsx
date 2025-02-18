import style from "./GraphCard.module.scss"
import {TooltipCustom} from "../../components/_common/TooltipCustom/TooltipCustom";
import {clsx} from "clsx";
import {manrope} from "../../../assets/fonts/fonts";


type GraphCardType = {
    label: string,
    value: string
}

export const GraphCard  = ({label, value}: GraphCardType) => {
    return (
        <div className={style.graphCard}>

            <div className={style.labelWrapper}>

                <p className={style.label}>
                    {label}
                </p>

                {/*<TooltipCustom className={style.tooltip}*/}
                {/*               content={*/}
                {/*                   <div className={style.tooltipContent}>*/}
                {/*                       <p className={clsx(manrope.className)}>Early Staker Bonus</p>*/}
                {/*                       <p className={manrope.className}>*/}
                {/*                           Awarded to users who stake within the first X days or among the first*/}
                {/*                           Y users.*/}
                {/*                       </p>*/}
                {/*                   </div>*/}
                {/*               }*/}
                {/*/>*/}
            </div>

            <p className={style.value}>
                {value}
            </p>

        </div>
    )
}