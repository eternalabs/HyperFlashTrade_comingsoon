'use client'

import style from "./Header.module.scss";
import Link from "next/link";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {ButtonCustom} from "../_common/ButtonCustom/ButtonCustom";
import {clsx} from "clsx";
import {WaveText} from "../_common/WaveText/WaveText";
import {usePathname} from "next/navigation";
import {svgIcons} from "../../../assets/svgIcons";
import {useState} from "react";
import {links} from "./links";
import {linkAttr} from "../../../constants/constants";

export const Header = () => {

    const pathname = usePathname();

    const [showMenu, setShowMenu] = useState(false);

    const onClose = () => setShowMenu(false)

    const onStake = () => {
        onClose()
    }

    const onWallet = () => {
        onClose()
    }

    return (
        <div className={style.headerWrapper}>

            <header className={style.header}>

                <div className={style.inner}>

                    <Link className={style.logo}
                          href="/"
                    >
                        <p>
                            Hyper<span className={playfair_Display.className}>Flash</span>
                        </p>
                    </Link>

                    <nav className={style.centerWrapper}>
                        {
                            links.map(({href, label}, key) => (
                                <Link key={key}
                                      href={href}
                                      className={style.link}
                                >
                                    <WaveText text={label}
                                              className={clsx({
                                                  [style.text]: true,
                                                  [style.text_selected]: pathname === href,
                                              })}
                                    />
                                </Link>
                            ))
                        }
                    </nav>

                    <div className={style.rightWrapper}>

                        <button className={clsx(style.button, style.item)}>
                            <ButtonCustom text="Stake now"
                                          classNameWave={style.button_inner}
                            />
                        </button>

                        <button className={clsx(style.button, style.item)}>
                            <ButtonCustom text="Wallet"
                                          dark={false}
                                          classNameWave={style.button_inner}
                            />
                        </button>

                        <a className={clsx(style.iconButton, style.item)}
                           href="#"
                           {...linkAttr}
                        >
                            {svgIcons.telegram}
                        </a>

                        <a className={clsx(style.iconButton, style.item)}
                           href="#"
                           {...linkAttr}
                        >
                            {svgIcons.twitter}
                        </a>

                        <button className={clsx(style.iconButton, style.item, style.burger)}
                                onClick={() => setShowMenu(!showMenu)}
                        >
                            {
                                showMenu ? svgIcons.shield_cross : svgIcons.textalign_justifycenter
                            }
                        </button>


                    </div>

                </div>

            </header>

            <div className={clsx({
                [style.menu]: true,
                [style.menu_open]: showMenu,
            })}>

                <nav className={style.links}>
                    {
                        links.map(({href, label}, key) => (
                            <Link key={key}
                                  href={href}
                                  className={style.link}
                                  onClick={() => setShowMenu(false)}
                            >
                                <p>{label}</p>
                            </Link>
                        ))
                    }
                </nav>

                <div className={style.buttons}>
                    <button className={clsx(style.button, style.item)}
                            onClick={onStake}
                    >
                        <ButtonCustom text="Stake now"
                                      className={style.button_inner}
                        />
                    </button>

                    <button className={clsx(style.button, style.item)}
                            onClick={onWallet}
                    >
                        <ButtonCustom text="Wallet"
                                      dark={false}
                                      className={style.button_inner}
                        />
                    </button>
                </div>


            </div>

        </div>

    )
}