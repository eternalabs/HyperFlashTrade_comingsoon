import style from "./TradersPage.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {playfair_Display} from "../../assets/fonts/fonts";
import type {Metadata} from "next";
import {WaterAnimation} from "../components/_common/WaterAnimation/WaterAnimation";

export const metadata: Metadata = {
    title: "HyperFlash - Traders",
    description: "Mev Powered Staking Rewards",
};

const TradersPage = () => {
  return (
    <div className={style.tradersPage}>

        <WaterAnimation className={style.waterAnimation}/>

        <div className={style.inner}>

            <div className={style.top}>

                <div className={style.label}>
                    {svgIcons.timer}
                    <p>Coming soon</p>
                </div>

                <h2 className={style.title}>
                    <span className={playfair_Display.className}>Smart Traders</span>: Trade Fast, Stay Protected
                </h2>

                <p className={style.description}>
                    Protect yourself from mev while trading fastest
                </p>

            </div>

            <div className={style.bottom}>
                {
                    [
                        {
                            icon: svgIcons.people,
                            text: "Trades",
                            value: "12,450",
                        },
                        {
                            icon: svgIcons.shield_tick,
                            text: "Value protected",
                            value: "$8,750,000",
                        },
                    ].map(({icon, text, value}, key) => (
                        <div key={key}
                             className={style.item}
                        >
                            <div>
                                <div>{icon}</div>
                                <p>{text}</p>
                            </div>
                            <p>{value}</p>
                        </div>
                    ))
                }
            </div>

        </div>

    </div>
  );
}

export default TradersPage
