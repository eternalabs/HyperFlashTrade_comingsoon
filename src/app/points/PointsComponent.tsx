import style from "./PointsComponent.module.scss"
import {Referals} from "./Referals/Referals";
import {Points} from "./Points/Points";
import {Leaderboard} from "./Leaderboard/Leaderboard";

export const PointsComponent = () => {
    return (
        <div className={style.pointsComponent}>
            <div className={style.inner}>

                <h2 className={style.title}>
                    Points
                </h2>

                <div className={style.content}>

                    <div className={style.left}>
                        <Referals/>
                        <Points/>
                    </div>

                    <Leaderboard/>

                </div>

            </div>
        </div>
    )
}