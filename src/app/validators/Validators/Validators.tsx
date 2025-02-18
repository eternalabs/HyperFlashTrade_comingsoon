'use client'

import style from "./Validators.module.scss"
import {clsx} from "clsx";
import {FormikHelpers} from "formik/dist/types";
import {useFormik} from "formik";
import {svgIcons} from "../../../assets/svgIcons";
import {SortButtons} from "../../components/_common/SortButtons/SortButtons";
import {data} from "./data";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";

interface IValues {
    value: string
}

export const Validators = () => {

    const onSubmit = (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values)
        } catch (e: any) {
            console.log(e)
        } finally {
            formikHelpers.resetForm()
        }
    }

    const formik = useFormik({
        initialValues: {
            value: ""
        },
        onSubmit
    });

    return (
        <div className={clsx(style.validators, style.block)}>

            <p className={style.label}>
                Validators
            </p>

            <div className={style.content}>

                <form className={clsx(style.card, style.form)}
                      onSubmit={formik.handleSubmit}
                >
                    <input placeholder="Search for validators"
                           {...formik.getFieldProps('value')}
                    />
                </form>

                <div className={clsx(style.items, style.card)}>
                    {
                        [
                            {
                                icon: svgIcons.flash,
                                label: "Validators",
                                value: "214",
                            },
                            {
                                icon: svgIcons.trend_down,
                                label: "Inflation Rate",
                                value: "12.32%",
                            },
                        ].map(({icon, label, value}, key) => (
                            <div key={key}
                                 className={style.item}
                            >
                                <div className={style.left}>
                                    <div className={style.icon}>{icon}</div>
                                    <p>{label}</p>
                                </div>
                                <p>{value}</p>
                            </div>
                        ))
                    }
                </div>

                <div className={clsx(style.card, style.table_mobile)}>

                    <div className={style.table_mobile_left}>

                        <div className={style.header}>
                            <p>#</p>
                            <div>
                                <p>Validator</p>
                                <SortButtons className={style.sortButtons}/>
                            </div>
                        </div>

                        {
                            data.map(({validator}, key) => (
                                <div key={key}
                                     className={style.body_row}
                                >
                                    <p>{key + 1}</p>
                                    <p>{validator}</p>
                                </div>
                            ))
                        }

                    </div>

                    <div className={style.table_mobile_right}>

                        <div className={style.table_mobile_right_inner}>

                            <div className={style.header}>
                                <div className={style.header_cell}>
                                    <p>Stake</p>
                                    <SortButtons className={style.sortButtons}/>
                                </div>
                                <div className={style.header_cell}>
                                    <p>Cumulative Stake</p>
                                </div>
                                <div className={style.header_cell}>
                                    <p>Commission</p>
                                    <SortButtons className={style.sortButtons}/>
                                </div>
                                <div className={style.header_cell}>
                                    <p>Last Block</p>
                                </div>
                            </div>

                            {
                                data.map(({
                                              stake_value,
                                              stake_percent,
                                              cumulative_stake,
                                              commission,
                                              last_block
                                          }, key) => (
                                    <div key={key}
                                         className={style.body_row}
                                    >
                                        <div className={style.body_row_cell}>
                                            <p>{stake_value} <span>HYPE</span></p>
                                            <p>{stake_percent}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{cumulative_stake}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{commission}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{last_block}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>

                <div className={clsx(style.table_desktop, style.card)}>

                    <div className={style.header}>

                        <div className={style.header_inner}>

                            <div className={style.header_cell}>
                                <p>#</p>
                            </div>
                            <div className={style.header_cell}>
                                <p>Validator</p>
                                <SortButtons className={style.sortButtons}/>
                            </div>
                            <div className={style.header_cell}>
                                <p>Stake</p>
                                <SortButtons className={style.sortButtons}/>
                            </div>
                            <div className={style.header_cell}>
                                <p>Cumulative Stake</p>
                            </div>
                            <div className={style.header_cell}>
                                <p>Commission</p>
                                <SortButtons className={style.sortButtons}/>
                            </div>
                            <div className={style.header_cell}>
                                <p>Last Block</p>
                            </div>

                        </div>


                    </div>

                    <div className={style.body}>
                        <div className={style.body_inner}>

                            {
                                data.map(({
                                              validator,
                                              stake_value,
                                              stake_percent,
                                              cumulative_stake,
                                              commission,
                                              last_block
                                          }, key) => (
                                    <div key={key}
                                         className={style.body_row}
                                    >
                                        <div className={style.body_row_cell}>
                                            <p>{key + 1}</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{validator}</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{stake_value} <span>HYPE</span></p>
                                            <p>{stake_percent}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{cumulative_stake}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{commission}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{last_block}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>




                </div>

                <button className={style.seeMoreBtn}>
                    <ButtonCustom text="See more"
                                  dark={false}
                                  classNameWave={style.button_inner}
                    />
                </button>

            </div>

        </div>
    )
}