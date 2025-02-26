'use client'

import style from "./Strategies.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {TooltipCustom} from "../../components/_common/TooltipCustom/TooltipCustom";
import {clsx} from "clsx";
import {manrope} from "../../../assets/fonts/fonts";
import {data} from "./data";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";
import {useState} from "react";
import {DisclaimerModal} from "../DisclaimerModal/DisclaimerModal";
import {MenuCustom} from "./MenuCustom/MenuCustom";

export const Strategies = () => {

    const [showModal, setShowModal] = useState(false);

    const onClick = () => setShowModal(true)

    const [extraRewards, setExtraRewards] = useState(false);
    const [strategy, setStrategy] = useState("");
    const [platform, setPlatform] = useState("");
    const [token, setToken] = useState("");

    const onAllClick = () => {
        setExtraRewards(false)
        setStrategy("");
        setPlatform("");
    }

    const onExtraRewards = () => setExtraRewards(!extraRewards)

    return (
        <div className={style.strategies}>

            <DisclaimerModal showModal={showModal}
                             onClose={() => setShowModal(false)}
            />


            <div className={style.top}>
                <p>5 Strategies</p>

                <div className={style.categories}>

                    <div className={style.categoriesRow}>

                        <button className={clsx({
                            [style.allBtn]: true,
                            [style.allBtn_selected]: !extraRewards && strategy === "" && platform === "",
                        })}
                                onClick={onAllClick}
                        >
                            <p>All</p>
                        </button>

                        <button className={clsx({
                            [style.allBtn]: true,
                            [style.allBtn_selected]: extraRewards,
                        }, style.rowItem)}
                                onClick={onExtraRewards}
                        >
                            <p>Extra Rewards</p>
                        </button>

                        <MenuCustom category={token}
                                    categoryName="Token"
                                    list={[
                                        "FlashHYPE",
                                        "HYPE",
                                    ]}
                                    onSelect={(value) => setToken(value)}
                                    className={style.rowItem}
                        />

                    </div>

                    <div className={style.categoriesRow}>

                        <MenuCustom category={strategy}
                                    categoryName="Strategy"
                                    list={["Borrow / Lend", "Liquidity Pool"]}
                                    onSelect={(value) => setStrategy(value)}
                                    className={style.rowItem}
                        />

                        <MenuCustom category={platform}
                                    categoryName="DeFi Platform"
                                    list={[
                                        "Euphrates",
                                        "Kamino",
                                        "MarginFi",
                                        "Meteora",
                                    ]}
                                    onSelect={(value) => setPlatform(value)}
                                    className={style.rowItem}
                        />

                    </div>

                </div>
            </div>

            <div className={style.itemsMobile}>
                {
                    data.slice(0, 4).map(({tvl, strategy}, key) => (
                        <div key={key}
                             className={style.card}
                             onClick={onClick}
                        >

                            <div className={style.top}>

                                <div className={style.left}>
                                    <div className={style.icon}>
                                        {svgIcons.bulb}
                                    </div>
                                    <div className={style.icon}>
                                        {svgIcons.bulb}
                                    </div>
                                </div>

                                <div className={style.tip}>
                                    {svgIcons.flash2}
                                    <p>HYPE Boost</p>
                                </div>

                            </div>

                            <p className={style.cardTitle}>
                                FlashHYPE / HYPE
                            </p>

                            <div className={style.items}>

                                <div className={style.tvl}>
                                    <div>
                                        <p>TVL</p>

                                        <TooltipCustom className={style.tooltip}
                                                       content={
                                                           <div className={style.tooltipContent}>
                                                               <p className={clsx(manrope.className)}>Early Staker
                                                                   Bonus</p>
                                                               <p className={manrope.className}>
                                                                   Awarded to users who stake within the first X days or
                                                                   among the first
                                                                   Y users.
                                                               </p>
                                                           </div>
                                                       }
                                        />

                                    </div>

                                    <p>{tvl}</p>
                                </div>

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

            <button className={style.seeMoreBtn}>
                <ButtonCustom text="See more"
                              dark={false}
                              classNameWave={style.button_inner}
                />
            </button>

            <div className={style.itemsDesktop}>

                <div className={style.header}>
                    {
                        [
                            "Asset", "TVL", "Protocol", "Strategy", "Code Status", "Rewards"
                        ].map((label, key) => (
                            <div key={key}
                                 className={style.headerCell}
                            >
                                <p>{label}</p>

                                <TooltipCustom className={style.tooltip}
                                               content={
                                                   <div className={style.tooltipContent}>
                                                       <p className={clsx(manrope.className)}>Early Staker
                                                           Bonus</p>
                                                       <p className={manrope.className}>
                                                           Awarded to users who stake within the first X days or
                                                           among the first
                                                           Y users.
                                                       </p>
                                                   </div>
                                               }
                                />

                            </div>
                        ))
                    }
                </div>

                <div className={style.body}>
                    {
                        data.map(({tvl, strategy}, key) => (
                            <div key={key}
                                 className={style.bodyRow}
                                 onClick={onClick}
                            >

                                <div className={clsx(style.bodyCell, style.assets)}>
                                    <div className={style.icon}>
                                        {svgIcons.bulb}
                                    </div>
                                    <div className={style.icon}>
                                        {svgIcons.bulb}
                                    </div>
                                    <p>FlashHYPE / HYPE</p>
                                </div>

                                <div className={clsx(style.bodyCell, style.tvl)}>
                                    <p>{tvl}</p>
                                </div>

                                <div className={clsx(style.bodyCell, style.protocol)}>
                                    {svgIcons.drift}
                                    <p>Drift</p>
                                </div>

                                <div className={clsx(style.bodyCell, style.strategy)}>
                                    <p>{strategy}</p>
                                </div>

                                <div className={clsx(style.bodyCell, style.codeStatus)}>
                                    {svgIcons.search_status}
                                    {svgIcons.simcard}
                                </div>

                                <div className={clsx(style.bodyCell, style.rewards)}>
                                    <p>
                                        {svgIcons.flash2}
                                        <span>HYPE Boost</span>
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}