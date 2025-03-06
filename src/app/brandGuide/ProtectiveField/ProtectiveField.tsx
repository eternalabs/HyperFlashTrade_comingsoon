import style from "./ProtectiveField.module.scss"
import {clsx} from "clsx";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {svgIcons} from "../../../assets/svgIcons";

export const ProtectiveField = () => {
    return (
        <div className={style.protectiveField}>
            <div className={style.inner}>

                <p className={clsx(style.title, playfair_Display.className)}>
                    Protective Field
                </p>

                <p className={style.text}>
                    To maintain clarity and visual impact, avoid placing any elements too close to the logo. An empty
                    space, known as a “protective margin,” ensures that the logo remains clear and unobstructed. It is
                    recommended to use the height of the letter “H” as a protective margin. No other graphic elements,
                    text, or images should cross or encroach on this area to maintain the integrity and readability of
                    the logo.
                </p>

                {svgIcons.protective_field}
            </div>
        </div>
    )
}