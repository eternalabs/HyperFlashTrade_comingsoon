import style from "./Stats.module.scss"
import {Settings} from "./Settings/Settings";
import {clsx} from "clsx";
import {manrope} from "../../assets/fonts/fonts";
import {TooltipCustom} from "../components/_common/TooltipCustom/TooltipCustom";
import {GraphCard} from "./GraphCard/GraphCard";

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
                        />

                        <GraphCard label="Total Bundles"
                                   value="7,371.821 Bundles"
                        />

                        <GraphCard label="Total Tips"
                                   value="11,932.047 HYPE"
                        />

                    </div>

                    <div className={style.content_bottom}>

                        <GraphCard label="HyperFlash TVL"
                                   value="15,471.000 HYPE"
                        />

                        <GraphCard label="Total Bundles"
                                   value="7,371.821 Bundles"
                        />

                    </div>
                </div>

            </div>

        </div>
    )
}