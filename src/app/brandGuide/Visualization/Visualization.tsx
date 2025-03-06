import style from "./Visualization.module.scss"
import {clsx} from "clsx";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {Card} from "./Card/Card";
import {WaterAnimation} from "../../components/_common/WaterAnimation/WaterAnimation";
import {svgIcons} from "../../../assets/svgIcons";

export const Visualization = () => {
    return (
        <div className={style.visualization}>
            <div className={style.inner}>

                <p className={clsx(playfair_Display.className, style.title)}>
                    Visualization on media
                </p>

                <div className={style.cards}>

                    <Card>
                        <WaterAnimation className={clsx(style.waterAnimation, style.waterAnimation_top)}/>
                    </Card>

                    <Card>
                        <div className={style.logoWrapper}>
                            {svgIcons.vertical_logo}
                        </div>
                    </Card>

                    <Card>
                        <WaterAnimation className={clsx(style.waterAnimation, style.waterAnimation_bottom)}/>
                    </Card>
                </div>


            </div>
        </div>
    )
}