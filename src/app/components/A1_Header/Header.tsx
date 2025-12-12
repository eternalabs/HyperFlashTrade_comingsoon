'use client'

import style from "./Header.module.scss";
import Link from "next/link";
import {playfair_Display} from "../../../assets/fonts/fonts";

export const Header = () => {

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

                </div>

            </header>


        </div>

    )
}