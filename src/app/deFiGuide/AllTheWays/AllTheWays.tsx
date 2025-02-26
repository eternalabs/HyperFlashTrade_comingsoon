import style from "./AllTheWays.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import {manrope} from "../../../assets/fonts/fonts";
import {TooltipCustom} from "../../components/_common/TooltipCustom/TooltipCustom";

export const AllTheWays = () => {
    return (
        <div className={style.allTheWays}>

            <div className={style.top}>
                <p>
                    All the ways you can use HYPE & flashHYPE
                </p>
                <div className={style.right}>
                    <p>
                        First Time in DeFi?
                    </p>

                    <div className={style.btns}>
                        <button className={style.btn}>
                            {svgIcons.book}
                            <p>Dictionary</p>
                        </button>
                        <button className={style.btn}>
                            {svgIcons.shield_tick}
                            <p>Safety</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className={style.cards}>
                {
                    [
                        {
                            title: "FlashHYPE",
                            tvl: "$89.3M",
                            strategy: "Borrow / Lend"
                        },
                        {
                            title: "FlashHYPE / HYPE",
                            tvl: "$16.4M",
                            strategy: "Liquidity Pool"
                        },
                        {
                            title: "FlashHYPE",
                            tvl: "$8.1M",
                            strategy: "Looping"
                        },
                        {
                            title: "HYPE (Re)staking",
                            tvl: "HYPE",
                            strategy: "Restaking"
                        },
                    ].map(({title, tvl, strategy}, key) => (
                        <div key={key}
                             className={style.card}
                        >

                            <div className={style.top}>

                                <div className={style.left}>
                                    <div className={style.icon}>
                                        {svgIcons.bulb}
                                    </div>
                                    {
                                        (key === 1 || key === 2) && (
                                            <div className={style.icon}>
                                                {svgIcons.bulb}
                                            </div>
                                        )
                                    }
                                </div>

                                {
                                    (key === 1 || key === 2) && (
                                        <div className={style.tip}>
                                            {svgIcons.flash2}
                                            <p>HYPE Boost</p>
                                        </div>
                                    )
                                }

                            </div>

                            <p className={style.cardTitle}>
                                {title}
                            </p>

                            <div className={style.items}>

                                <div className={style.tvl}>
                                    <div>
                                        <p>TVL</p>

                                        <TooltipCustom className={style.tooltip}
                                                       content={
                                                           <div className={style.tooltipContent}>
                                                               <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                                               <p className={manrope.className}>
                                                                   Awarded to users who stake within the first X days or among the first
                                                                   Y users.
                                                               </p>
                                                           </div>
                                                       }
                                        />

                                    </div>

                                    <p>{tvl}</p>
                                </div>

                                {
                                    key !== 3 && (
                                        <div className={style.protocol}>

                                            <div>
                                                <p>Protocol</p>
                                                <TooltipCustom className={style.tooltip}
                                                               content={
                                                                   <div className={style.tooltipContent}>
                                                                       <p className={clsx(manrope.className)}>Early Staker
                                                                           Bonus</p>
                                                                       <p className={manrope.className}>
                                                                           Awarded to users who stake within the first X
                                                                           days or among the first
                                                                           Y users.
                                                                       </p>
                                                                   </div>
                                                               }
                                                />
                                            </div>

                                            <div>
                                                {svgIcons.drift}
                                                <p>Drift</p>
                                            </div>
                                        </div>
                                    )
                                }

                                <div className={style.strategy}>

                                    <div>
                                        <p>Strategy</p>
                                        <TooltipCustom className={style.tooltip}
                                                       content={
                                                           <div className={style.tooltipContent}>
                                                               <p className={clsx(manrope.className)}>Early Staker
                                                                   Bonus</p>
                                                               <p className={manrope.className}>
                                                                   Awarded to users who stake within the first X
                                                                   days or among the first
                                                                   Y users.
                                                               </p>
                                                           </div>
                                                       }
                                        />
                                    </div>

                                    <p>{strategy}</p>
                                </div>

                                <div className={style.codeStatus}>
                                    <div>
                                        <p>Code Status</p>
                                        <TooltipCustom className={style.tooltip}
                                                       content={
                                                           <div className={style.tooltipContent}>
                                                               <p className={clsx(manrope.className)}>Early Staker
                                                                   Bonus</p>
                                                               <p className={manrope.className}>
                                                                   Awarded to users who stake within the first X
                                                                   days or among the first
                                                                   Y users.
                                                               </p>
                                                           </div>
                                                       }
                                        />
                                    </div>
                                    <div>
                                        {svgIcons.search_status}
                                        {svgIcons.simcard}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}