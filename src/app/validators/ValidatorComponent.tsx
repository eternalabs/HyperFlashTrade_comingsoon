import style from "./ValidatorComponent.module.scss";

import {RecentRounds} from "./RecentRounds/RecentRounds";
import {Validators} from "./Validators/Validators";
import {Metrics} from "./Metrics/Metrics";



export const ValidatorComponent = () => {

    return (
        <div className={style.validatorComponent}>

            <div className={style.inner}>

                <h2 className={style.title}>
                    Validators
                </h2>

                <RecentRounds/>

                <div className={style.bottom}>
                    <Validators/>
                    <Metrics/>
                </div>



            </div>

        </div>
    )
}