import style from "./SortButtons.module.scss"
import {clsx} from "clsx";

type SortButtonsType = {
    className?: string
}

export const SortButtons = ({className}: SortButtonsType) => {
    return (
        <div className={clsx(style.sortButtons, Boolean(className) && className)}>
            <button>
                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.86334 3.03696L4.48717 1.35689L3.6469 0.32581C3.29107 -0.108603 2.71231 -0.108603 2.35648 0.32581L0.135753 3.03696C-0.155771 3.39287 0.0542977 4 0.461574 4H2.86664H5.53752C5.94908 4 6.15486 3.39287 5.86334 3.03696Z"
                        fill="#012B26" fillOpacity="0.5"/>
                </svg>
            </button>
            <button>
                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.136661 0.963036L1.51282 2.64311L2.3531 3.67419C2.70893 4.1086 3.28769 4.1086 3.64352 3.67419L5.86425 0.963036C6.15577 0.607132 5.9457 4.46731e-07 5.53843 4.11126e-07L3.13336 2.00868e-07L0.462482 -3.2627e-08C0.0509185 -6.86069e-08 -0.154863 0.607131 0.136661 0.963036Z"
                        fill="#012B26" fillOpacity="0.5"/>
                </svg>
            </button>
        </div>
    )
}