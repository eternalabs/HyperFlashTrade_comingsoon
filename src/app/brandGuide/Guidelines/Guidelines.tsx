import style from "./Guidelines.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {WaterAnimation} from "../../components/_common/WaterAnimation/WaterAnimation";
import {clsx} from "clsx";

export const Guidelines = () => {
    return (
        <div className={style.guidelines}>

            <WaterAnimation className={clsx(style.waterAnimation, style.waterAnimation_top)}/>
            <WaterAnimation className={clsx(style.waterAnimation, style.waterAnimation_bottom)}/>

            <div className={style.inner}>

                <div className={style.logo}>
                    {svgIcons.logo_horizontal_black}
                </div>

                <h2 className={style.title}>
                    Brand <span className={playfair_Display.className}>Guidelines</span>
                </h2>

                <div className={style.buttons}>

                    <a href="#">
                        {svgIcons.import_white}
                        <p>Download Brand & Media Kit</p>
                    </a>

                    <a href="#">
                        {svgIcons.import_black}
                        <p>Download the logo</p>
                    </a>

                </div>


            </div>
        </div>
    )
}