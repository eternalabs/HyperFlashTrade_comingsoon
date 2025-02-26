'use client'

import style from "./MenuCustom.module.scss"
import {svgIcons} from "../../../../assets/svgIcons";
import React, {useState} from "react";
import {clsx} from "clsx";
import Popover from '@mui/material/Popover';

type MenuCustomType = {
    className?: string
    category: string
    categoryName: string
    list: string[]
    onSelect: (value: string) => void
}


export const MenuCustom = ({
                               category,
                               categoryName,
                               list,
                               onSelect,
                               className,
                           }: MenuCustomType) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const onClose = () => {
        setAnchorEl(null);
    }

    const onMenuItem = (value: string) => {
        onSelect(value);
        onClose();
    }

    return (
        <div className={clsx(style.menuCustom, Boolean(className) && className)}>

            <button className={clsx({
                [style.btn]: true,
                [style.btn_open]: open,
            })}
                    onClick={onClick}
            >
                <span>{category ? category : categoryName}</span>
                {svgIcons.arrow_down}
            </button>

            <Popover open={open}
                     anchorEl={anchorEl}
                     onClose={onClose}
                     anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'left',
                     }}
                     sx={{
                         '& .MuiPaper-root': {
                             width: "280px",
                             borderRadius: "10px",
                             background: "#012b26",
                             paddingBottom: "16px"
                         },
                     }}
            >

                <div className={style.categoryName}>
                    <p>{categoryName}</p>
                </div>

                <div>
                    {
                        list.map((value, key) => (
                            <div key={key}
                                 onClick={() => onMenuItem(value)}
                                 className={clsx({
                                     [style.listItem]: true,
                                     [style.listItem_selected]: value === category,
                                 })}
                            >
                                <p>{value}</p>
                                {value === category && svgIcons.tick_circle}
                            </div>
                        ))
                    }
                </div>

            </Popover>


        </div>
    )
}