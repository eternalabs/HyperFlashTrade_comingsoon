import style from "./LogoConstruction.module.scss"
import {clsx} from "clsx";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {svgIcons} from "../../../assets/svgIcons";

export const LogoConstruction = () => {
    return (
        <div className={style.logoConstruction}>
            <div className={style.inner}>

                <p className={clsx(style.title, playfair_Display.className)}>
                    Logo. Construction
                </p>

                <p className={style.text}>
                    The aspect ratio of the corporate logo must remain unchanged. Distortion, altering the proportions, or adapting it to fit other elements is considered unacceptable. When resizing, the original height-to-width ratio must be preserved, ensuring proportional scaling.
                </p>

            </div>

            {svgIcons.logo_construction}
        </div>
    )
}