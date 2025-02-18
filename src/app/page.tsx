import style from "./HomePage.module.scss";
import {svgIcons} from "../assets/svgIcons";
import {playfair_Display} from "../assets/fonts/fonts";
import Link from "next/link";
import {ButtonCustom} from "./components/_common/ButtonCustom/ButtonCustom";
import {WaterAnimation} from "./components/_common/WaterAnimation/WaterAnimation";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "HyperFlash - Home",
    description: "Mev Powered Staking Rewards",
};

const HomePage = () => {
    return (
        <div className={style.homePage}>

            <WaterAnimation className={style.waterAnimation}/>

            <div className={style.inner}>

                <div className={style.topWrapper}>

                    <div className={style.label}>
                        <p>Built on</p>
                        {svgIcons.bulb}
                        <p>HyperEVM</p>
                    </div>

                    <h1 className={style.title}>
                        Mev Powered <span className={playfair_Display.className}>Staking</span> Rewards
                    </h1>

                </div>

                <div className={style.bottomWrapper}>

                    <div className={style.items}>
                        {
                            [
                                {
                                    icon: svgIcons.status_up,
                                    text: "TVL",
                                    value: "$12,500,000",
                                },
                                {
                                    icon: svgIcons.moneys,
                                    text: "APY",
                                    value: "8.75%",
                                },
                                {
                                    icon: svgIcons.profile_2user,
                                    text: "Holders",
                                    value: "24,560",
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

                    <div className={style.buttons}>
                        {
                            [
                                {
                                    href: "/stakers",
                                    text: "Stakers"
                                },
                                {
                                    href: "/traders",
                                    text: "Traders"
                                },
                            ].map(({href, text}, key) => (
                                <Link key={key}
                                      href={href}
                                      className={style.link}
                                >
                                    <ButtonCustom text={text}
                                                  dark={key === 0}
                                                  classNameWave={style.link_inner}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage
