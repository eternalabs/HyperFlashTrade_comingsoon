import style from "./SafetyTips.module.scss"

export const SafetyTips = () => {
    return (
        <div className={style.safetyTips}>

            <h3 className={style.title}>
                DeFi Safety Tips
            </h3>

            <div className={style.card}>
                <p className={style.cardTitle}>
                    When using DeFi protocols, it’s important to follow these guidelines to stay safe and informed:
                </p>

                {
                    [
                        "Research thoroughly before getting involved in any DeFi project",
                        "Never invest more than you can afford to lose",
                        "Be aware of the risks involved, such as market volatility",
                        "Stay vigilant and watch out for potential scams",
                        "Keep your private keys secure and never share them",
                        "Similarly,never share your seed phrase with anyone",
                    ].map((text, key) => (
                        <p key={key}
                           className={style.tip}
                        >
                            {text}
                        </p>
                    ))
                }
            </div>


        </div>
    )
}