import style from "./GraphCard.module.scss"
import {TooltipCustom} from "../../components/_common/TooltipCustom/TooltipCustom";

import React from "react";
import {svgIcons} from "../../../assets/svgIcons";


type GraphCardType = {
    label: string,
    value: string
    tooltip?: React.ReactNode
    y_values: string[]
    x_values: string[]
    graph: JSX.Element
    twoValue?: boolean
}

const a = svgIcons.graph_0

export const GraphCard  = ({label, value, tooltip, x_values, y_values, graph, twoValue = false}: GraphCardType) => {
    return (
        <div className={style.graphCard}>

            {
                twoValue && (
                    <div className={style.info}>
                        {
                            [
                                {
                                    label: "Total APY",
                                    backgroundColor: "#eeec8b",
                                },
                                {
                                    label: "MEV APY",
                                    backgroundColor: "#61cbaf",
                                },
                            ].map(({label, backgroundColor}, key) => (
                                <div key={key}
                                     className={style.info_item}
                                >
                                    <div style={{backgroundColor}}/>
                                    <p>{label}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }

            <div className={style.labelWrapper}>

                <p className={style.label}>
                    {label}
                </p>

                {
                    tooltip && (
                        <TooltipCustom className={style.tooltip}
                                       content={tooltip}
                        />
                    )
                }

            </div>

            <p className={style.value}>
                {value}
            </p>

            <div className={style.wrapper}>

                <div className={style.graphWrapper}>
                    {
                       y_values.map((value, key) => (
                           <p key={key}
                              className={style.y_value}
                              style={{
                                  bottom: `${25 * key}%`
                                  //top: 0
                              }}
                           >
                               {value}
                           </p>
                       ))
                    }

                    <div className={style.x_values}>
                        {
                            x_values.map((value, key) => (
                                <p key={key}>{value}</p>
                            ))
                        }
                    </div>

                    {graph}

                </div>

            </div>

        </div>
    )
}