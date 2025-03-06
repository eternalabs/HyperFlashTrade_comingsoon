import style from "./Typography.module.scss"
import {clsx} from "clsx";
import {manrope, playfair_Display} from "../../../assets/fonts/fonts";
import {svgIcons} from "../../../assets/svgIcons";

export const Typography = () => {
    return (
        <div className={style.typography}>
            <div className={style.inner}>

                <p className={clsx(style.title, playfair_Display.className)}>
                    Typography
                </p>

                <div className={style.blocks}>
                    {
                        [
                            {
                                label: "Manrope",
                                className: manrope.className,
                            },
                            {
                                label: "Playfair Display",
                                className: playfair_Display.className,
                            },
                        ].map(({label, className}, key) => (
                            <div key={key}
                                 className={style.block}
                            >
                                <p className={clsx(style.letter, className)}>
                                    Aa
                                </p>

                                <div className={style.info}>

                                    <p className={clsx(style.label, className)}>
                                        {label}
                                    </p>

                                    <div className={style.text}>
                                        <p className={className}>
                                            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy
                                            Zz
                                        </p>
                                        <p className={className}>
                                            1234567890 ,«»„“:;?!@#$%&*()
                                        </p>
                                    </div>

                                    <a href="#">
                                        {svgIcons.import_black}
                                        <p>Download {label}</p>
                                    </a>

                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>
        </div>
    )
}