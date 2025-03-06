import style from "./TwoBlocks.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";

export const TwoBlocks = () => {
    return (
        <div className={style.twoBlocks}>

            <div className={style.block}>
                <div className={style.iconWrapper}>
                    {svgIcons.logo_green}
                    <div className={clsx(style.vertical, style.vertical_left)}/>
                    <div className={clsx(style.vertical, style.vertical_right)}/>
                    <div className={clsx(style.horizontal, style.horizontal_top)}/>
                    <div className={clsx(style.horizontal, style.horizontal_bottom)}/>
                    <div className={clsx(style.angle, style.angle_top)}/>
                    <div className={clsx(style.angle, style.angle_bottom)}/>
                </div>
            </div>

            <div className={style.block}>
                {svgIcons.logo_horizontal_black}
            </div>

        </div>
    )
}