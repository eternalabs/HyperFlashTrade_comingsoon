import style from "./Dictionary.module.scss"
import {svgIcons} from "../../../assets/svgIcons";

export const Dictionary = () => {
    return (
        <div className={style.dictionary}>

            <h3 className={style.title}>
                Dictionary
            </h3>

            <div className={style.items}>
                {
                    [
                        {
                            icon: svgIcons.drop,
                            title: "Liquidity Pool",
                            text: "A liquidity pool is a shared reserve of crypto assets, funds, or tokens locked in a smart contract. It facilitates decentralized trading and lending on the HYPE blockchain.",
                        },
                        {
                            icon: svgIcons.coin,
                            title: "Liquidity Pool Token",
                            text: "Liquidity Pool Tokens on Solana are given to users who add funds to a liquidity pool. These tokens represent their share of the pool and entitle them to a portion of the earned transaction fees.",
                        },
                        {
                            icon: svgIcons.convert_card,
                            title: "Liquidity Provider",
                            text: "A liquidity provider on Solana is a user who adds their tokens to a liquidity pool, helping enable decentralized trading while earning transaction fees as a reward.",
                        },
                        {
                            icon: svgIcons.percentage_circle,
                            title: "Lending/Borrowing Protocol",
                            text: "A Lending/Borrowing Protocol is a decentralized platform for lending and borrowing crypto. Lenders earn interest, and borrowers use crypto as collateral. On HYPE, these protocols run fast and efficiently thanks to the blockchain's high performance.",
                        },
                    ].map(({icon, title, text}, key) => (
                        <div key={key}
                             className={style.item}
                        >

                            <div className={style.top}>
                               <div className={style.icon}>
                                   {icon}
                               </div>
                               <p className={style.cardTitle}>
                                   {title}
                               </p>
                            </div>

                            <p className={style.text}>
                                {text}
                            </p>

                            <button className={style.moreBtn}>
                                <p>More</p>
                            </button>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}