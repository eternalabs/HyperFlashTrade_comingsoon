'use client'

import style from "./Stake.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import {useRef, useState} from "react";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideButNotOnTargetClick";
import {useFormik} from "formik";
import {FormikHelpers} from "formik/dist/types";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";
import {ButtonsGroup} from "../../components/_common/ButtonsGroup/ButtonsGroup";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {TooltipCustom} from "../../components/_common/TooltipCustom/TooltipCustom";
import {manrope} from "../../../assets/fonts/fonts";

interface IValues {
    value: number
}

export const Stake = observer(
    () => {

        const {appStore: {setStakeModal}} = useStore()

        const [dropDownOpen, setDropDownOpen] = useState(false);
        const [tab, setTab] = useState(0);

        const outsideRef = useRef<HTMLDivElement>(null!);
        const targetRef = useRef<HTMLButtonElement>(null!);
        useOutsideButNotOnTargetClick(outsideRef, targetRef, () => setDropDownOpen(false))

        const initialValues: IValues = {
            value: 0.0
        }

        const onSubmit = (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
            try {
                console.log(values.value)
            } catch (e: any) {
                console.log(e)
            } finally {
                formikHelpers.resetForm()
            }

        }

        const formik = useFormik({
            initialValues,
            onSubmit
        });

        const [priorityTab, setPriorityTab] = useState(0)
        const [tipsTab, setTipsTab] = useState(0)

        const onConvert = () => {
            setStakeModal(true)
        }

        return (
            <div className={style.stake}>

                <div className={style.stakingBlock}>

                    <div className={style.row}>
                        <div className={style.left}>
                            <p>You’re staking</p>
                        </div>
                        <div className={style.right}>
                            {svgIcons.wallet_money}
                            <p>30.000 Max</p>
                        </div>
                    </div>

                    <div className={style.borderWrapper}>

                        <div className={style.dropDownWrapper}>

                            <button className={clsx({
                                [style.dropDownButton]: true,
                                [style.dropDownButton_open]: dropDownOpen,
                            })}
                                    onClick={() => setDropDownOpen(!dropDownOpen)}
                                    ref={targetRef}
                            >
                                <div>
                                    {svgIcons.bulb}
                                    <p>Hype</p>
                                </div>
                                {svgIcons.arrow_down}
                            </button>

                            {
                                dropDownOpen && (
                                    <div className={style.dropDown}
                                         ref={outsideRef}
                                    >

                                        <div className={style.dropDownTabs}>
                                            {
                                                ["Tokens", "Stakers"].map((label, key) => (
                                                    <button key={key}
                                                            className={clsx({
                                                                [style.tab]: true,
                                                                [style.tab_selected]: key === tab,
                                                            })}
                                                            onClick={() => setTab(key)}
                                                    >
                                                        <p>{label}</p>
                                                    </button>
                                                ))
                                            }
                                        </div>

                                        <div className={style.dropDownContent}>
                                            {
                                                tab === 0 && (
                                                    <div className={style.content_tokens}>
                                                        <div className={style.left}>
                                                            {svgIcons.bulb}
                                                            <div>
                                                                <p>HYPE</p>
                                                                <p>hy111...035</p>
                                                            </div>
                                                        </div>

                                                        <div className={style.right}>
                                                            <p>0.024</p>
                                                            <p>USUS $4.73</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            {
                                                tab === 1 && (
                                                    <div className={style.content_stakers}>
                                                        <div className={style.left}>
                                                            {svgIcons.bulb}
                                                            <div>
                                                                <p>HYPE</p>
                                                                <p>hy111...035</p>
                                                            </div>
                                                        </div>

                                                        <div className={style.right}>
                                                            <p>0.024</p>
                                                            <p>USUS $4.73</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>
                                )
                            }

                        </div>

                        <form onSubmit={formik.handleSubmit}
                              className={style.form}
                        >
                            <input type="number"
                                   placeholder="0.0"
                                   {...formik.getFieldProps('value')}
                            />

                        </form>

                    </div>


                </div>

                <div className={style.receiveBlock}>

                    <div className={style.row}>
                        <div className={style.left}>
                            <p>To receive</p>
                            <TooltipCustom className={style.tooltip}
                                           content={
                                               <div className={style.tooltipContent}>
                                                   <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                                   <p className={manrope.className}>
                                                       Awarded to users who stake within the first X days or among the first
                                                       Y users.
                                                   </p>
                                               </div>
                                           }
                            />
                        </div>
                        <div className={style.right}>
                            <p>0% Slippage</p>
                        </div>
                    </div>

                    <div className={style.borderWrapper}>

                        <button className={style.flashBtn}

                        >
                            {svgIcons.bulb}
                            <p>flashHYPE</p>
                        </button>

                    </div>

                </div>

                <button className={style.convertButton}
                        onClick={onConvert}
                >
                    <ButtonCustom text="Convert to flashHYPE"
                                  classNameWave={style.button_inner}
                    />
                </button>

                <div className={style.rows}>

                    <div className={style.row}>
                        <div className={style.left}>
                            <p>Fee / Сommission</p>
                        </div>

                        <p className={style.right}>
                            0%
                        </p>
                    </div>

                    <div className={style.row}>
                        <div className={style.left}>
                            <p>1 flashHYPE</p>
                        </div>

                        <p className={style.right}>
                            ≈ 1 HYPE
                        </p>
                    </div>

                    <div className={style.row}>
                        <div className={style.left}>
                            <p>Priority fee active</p>
                            <TooltipCustom className={style.tooltip}
                                           content={
                                               <div className={style.tooltipContent}>
                                                   <p className={manrope.className}>Early Staker Bonus</p>
                                                   <p className={manrope.className}>
                                                       Awarded to users who stake within the first X days or among the first
                                                       Y users.
                                                   </p>
                                               </div>
                                           }
                            />
                        </div>

                        <ButtonsGroup labels={["Off", "On"]}
                                      index={priorityTab}
                                      onClick={(key) => setPriorityTab(key)}
                        />
                    </div>

                    <div className={style.row}>
                        <div className={style.left}>
                            <p>Tips active</p>
                            <TooltipCustom className={style.tooltip}
                                           content={
                                               <div className={style.tooltipContent}>
                                                   <p className={clsx(manrope.className)}>Early Staker Bonus</p>
                                                   <p className={manrope.className}>
                                                       Awarded to users who stake within the first X days or among the first
                                                       Y users.
                                                   </p>
                                               </div>
                                           }
                            />
                        </div>

                        <ButtonsGroup labels={["Off", "Low", "Hight"]}
                                      index={tipsTab}
                                      onClick={(key) => setTipsTab(key)}
                        />
                    </div>

                </div>

            </div>
        )
    }
)