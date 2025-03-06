import style from "./AppIcon.module.scss"
import {clsx} from "clsx";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {svgIcons} from "../../../assets/svgIcons";

export const AppIcon = () => {
    return (
        <div className={style.appIcon}>

            <div className={style.top}>
                <div className={style.top_inner}>

                    <p className={clsx(playfair_Display.className, style.title)}>
                        App Icon
                    </p>

                    <div className={style.iconWrapper}>
                        {svgIcons.logo_mark}
                    </div>
                </div>


            </div>


            <div className={style.bottom}>
                <img src="/png/app_icon.png" alt=""/>
            </div>
        </div>
    )
}