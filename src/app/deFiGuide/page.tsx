import type {Metadata} from "next";
import style from "./DeFiGuidePage.module.scss";
import {playfair_Display} from "../../assets/fonts/fonts";
import {SafetyTips} from "./SafetyTips/SafetyTips";
import {Dictionary} from "./Dictionary/Dictionary";
import {AllTheWays} from "./AllTheWays/AllTheWays";
import {Strategies} from "./Strategies/Strategies";

export const metadata: Metadata = {
    title: "HyperFlash - DeFi Guide",
};

const DeFiGuidePage = () => {
    return (
      <div className={style.deFiGuidePage}>
          <div className={style.inner}>

              <h2 className={style.title}>
                  Hyper<span className={playfair_Display.className}>Flash</span> — DeFi Guide
              </h2>

              <AllTheWays/>
              <Strategies/>
              <SafetyTips/>
              <Dictionary/>
          </div>
      </div>
    )
}

export default DeFiGuidePage