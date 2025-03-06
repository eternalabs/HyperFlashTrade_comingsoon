import style from "./Colors.module.scss"
import {clsx} from "clsx";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {svgIcons} from "../../../assets/svgIcons";
import {bottomColors, topColors} from "./data";

export const Colors = () => {
    return (
        <div className={style.colors}>

            <div className={style.top}>
                <div className={style.top_inner}>

                    <p className={clsx(style.title, playfair_Display.className)}>
                        Colors
                    </p>

                    {svgIcons.vertical_logo}

                    <div className={style.info}>

                        <p className={style.infoLabel}>
                            Gradient
                        </p>

                        <div className={style.items}>
                            {
                                topColors.map(({color, values}, key) => (
                                    <div key={key}
                                         className={style.item}
                                    >

                                        <p className={style.color}>
                                            {color}
                                        </p>

                                        <div className={style.values}>
                                            {
                                                values.map(({label, value}, key) => (
                                                    <div key={key}
                                                         //className={style.}
                                                    >
                                                        <p>{label}</p>
                                                        <p>{value}</p>

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.bottom}>
                {
                    bottomColors.map(({color, values}, key) => (
                        <div key={key}
                             className={style.item}
                        >


                            <p className={style.color}>
                                {color}
                            </p>

                            <div className={style.values}>
                                {
                                    values.map(({label, value}, key) => (
                                        <div key={key}
                                            //className={style.}
                                        >
                                            <p>{label}</p>
                                            <p>{value}</p>

                                        </div>
                                    ))
                                }

                            </div>


                        </div>
                    ))
                }
            </div>


        </div>
    )
}