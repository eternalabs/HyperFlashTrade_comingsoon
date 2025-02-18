'use client'

import style from "./Metrics.module.scss"
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {FormikHelpers} from "formik/dist/types";
import {useFormik} from "formik";
import {SortButtons} from "../../components/_common/SortButtons/SortButtons";
import {data} from "./data";
import {ButtonCustom} from "../../components/_common/ButtonCustom/ButtonCustom";


interface IValues {
    value: string
}

export const Metrics = () => {

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
        <div className={clsx(style.metrics, style.block)}>

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
                                icon: svgIcons.timer2,
                                label: "Average Uptime(24H)",
                                value: "0.94176",
                            },
                            {
                                icon: svgIcons.graph,
                                label: "Average QC Ratio",
                                value: "99.38724",
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
                                    <p>QC ratio</p>
                                    <SortButtons className={style.sortButtons}/>
                                </div>
                                <div className={style.header_cell}>
                                    <p>24h Uptime </p>
                                    <SortButtons className={style.sortButtons}/>
                                </div>
                                <div className={style.header_cell}>
                                    <p>30d Uptime</p>
                                    <SortButtons className={style.sortButtons}/>
                                </div>
                                <div className={style.header_cell}>
                                    <p>Average Tx Proposing</p>
                                    <SortButtons className={style.sortButtons}/>
                                </div>
                            </div>

                            {
                                data.map(({
                                              ratio,
                                              uptime_24,
                                              uptime_30,
                                              averageTxProposing
                                          }, key) => (
                                    <div key={key}
                                         className={style.body_row}
                                    >
                                        <div className={style.body_row_cell}>
                                            <p>{ratio}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{uptime_24}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{uptime_30}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{averageTxProposing}</p>
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
                                <p>QC ratio</p>
                                <SortButtons className={style.sortButtons}/>
                            </div>
                            <div className={style.header_cell}>
                                <p>24h Uptime </p>
                                <SortButtons className={style.sortButtons}/>
                            </div>
                            <div className={style.header_cell}>
                                <p>30d Uptime</p>
                                <SortButtons className={style.sortButtons}/>
                            </div>
                            <div className={style.header_cell}>
                                <p>Average Tx Proposing</p>
                                <SortButtons className={style.sortButtons}/>
                            </div>

                        </div>


                    </div>

                    <div className={style.body}>
                        <div className={style.body_inner}>

                            {
                                data.map(({
                                              validator,
                                              ratio,
                                              uptime_24,
                                              uptime_30,
                                              averageTxProposing,
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
                                            <p>{ratio}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{uptime_24}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{uptime_30}%</p>
                                        </div>
                                        <div className={style.body_row_cell}>
                                            <p>{averageTxProposing}%</p>
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