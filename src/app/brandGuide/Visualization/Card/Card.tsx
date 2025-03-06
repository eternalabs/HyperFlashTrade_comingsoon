import style from "./Card.module.scss"
import {svgIcons} from "../../../../assets/svgIcons";
import {ReactNode} from "react";

type CardType = {
    children: ReactNode
}


export const Card = ({children}: CardType) => {
    return (
        <div className={style.card}>

            <div className={style.cardHeader}>

               <div className={style.left}>
                    <div className={style.iconWrapper}>
                        {svgIcons.logo_mark}
                    </div>
                   <p>HyperFlash</p>
               </div>

                {svgIcons.more}

            </div>

            <div className={style.body}>
                {children}
            </div>

            <div className={style.cardFooter}>

                <div className={style.left}>
                    {svgIcons.heart}
                    {svgIcons.messages}
                    {svgIcons.direct_right}
                </div>

                {svgIcons.archive_tick}
            </div>


        </div>
    )
}