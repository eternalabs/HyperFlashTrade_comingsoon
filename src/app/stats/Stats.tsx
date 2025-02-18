import style from "./Stats.module.scss"
import {Settings} from "./Settings/Settings";
import {clsx} from "clsx";
import {manrope} from "../../assets/fonts/fonts";
import {GraphCard} from "./GraphCard/GraphCard";
import React from "react";
import {svgIcons} from "../../assets/svgIcons";

export const Stats = () => {
    return (
        <div className={style.stats}>

            <div className={style.inner}>

                <div className={style.top}>

                    <h2 className={style.title}>
                        Stats
                    </h2>

                    <Settings/>

                </div>

                <div className={style.content}>

                    <div className={style.content_top}>

                        <GraphCard label="HyperFlash TVL"
                                   value="15,471.000 HYPE"
                                   x_values={["Feb 09", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"]}
                                   y_values={["0", "4M", "8M", "12M", "16M"]}
                                   graph={svgIcons.graph_0}
                        />

                        <GraphCard label="Total Bundles"
                                   value="7,371.821 Bundles"
                                   x_values={["Feb 09", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"]}
                                   y_values={["0", "2M", "4M", "6M", "8M"]}
                                   graph={svgIcons.graph_1}
                                   tooltip={(
                                       <div className={style.tooltipContent}>
                                           <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                           <p className={manrope.className}>
                                               Awarded to users who stake within the first X days or among the first
                                               Y users.
                                           </p>
                                       </div>
                                   )}
                        />

                        <GraphCard label="Total Tips"
                                   value="11,932.047 HYPE"
                                   x_values={["Feb 09", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"]}
                                   y_values={["0", "2M", "4M", "6M", "8M"]}
                                   graph={svgIcons.graph_2}
                                   tooltip={(
                                       <div className={style.tooltipContent}>
                                           <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                           <p className={manrope.className}>
                                               Awarded to users who stake within the first X days or among the first
                                               Y users.
                                           </p>
                                       </div>
                                   )}
                        />

                    </div>

                    <div className={style.content_bottom}>

                        <GraphCard label="Total MEV Rewards"
                                   value="9,687.732 HYPE"
                                   x_values={["Feb 09", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"]}
                                   y_values={["0", "2M", "4M", "6M", "8M"]}
                                   graph={svgIcons.graph_3}
                                   tooltip={(
                                       <div className={style.tooltipContent}>
                                           <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                           <p className={manrope.className}>
                                               Awarded to users who stake within the first X days or among the first
                                               Y users.
                                           </p>
                                       </div>
                                   )}
                        />

                        <GraphCard label="flashHYPE APY"
                                   value="8.25%"
                                   x_values={["Feb 09", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"]}
                                   y_values={["0", "2%", "4%", "6%", "8%"]}
                                   graph={svgIcons.graph_4}
                                   twoValue={true}
                                   tooltip={(
                                       <div className={style.tooltipContent}>
                                           <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                           <p className={manrope.className}>
                                               Awarded to users who stake within the first X days or among the first
                                               Y users.
                                           </p>
                                       </div>
                                   )}
                        />

                    </div>
                </div>

            </div>

        </div>
    )
}