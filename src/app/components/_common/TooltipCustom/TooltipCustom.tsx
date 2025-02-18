'use client'

import style from "./TooltipCustom.module.scss"
import {clsx} from "clsx";
import {svgIcons} from "../../../../assets/svgIcons";
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
import React, {useState} from "react";
import ClickAwayListener from '@mui/material/ClickAwayListener';


type TooltipCustomType = {
    className?: string
    content: React.ReactNode
}

export const TooltipCustom = ({className, content}: TooltipCustomType) => {

    const [open, setOpen] = useState(false);
    const handleTooltipClose = () => setOpen(false);
    const handleTooltipOpen = () => setOpen(true);

    return (
        <div className={clsx(style.tooltipCustom, Boolean(className) && className)}>

            <div className={style.tooltip_mobile}>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                        <TooltipCustomized onClose={handleTooltipClose}
                                           open={open}
                                           disableFocusListener
                                           disableHoverListener
                                           disableTouchListener
                                           slotProps={{
                                               popper: {
                                                   disablePortal: true,
                                               },
                                           }}
                                           title={(
                                               <div className={style.tooltipContent}>
                                                   {content}
                                               </div>
                                           )}
                        >
                            <div className={style.iconWrapper}
                                 onClick={() => handleTooltipOpen()}
                            >
                                {svgIcons.information}
                            </div>
                        </TooltipCustomized>
                    </div>
                </ClickAwayListener>
            </div>


            <div className={style.tooltip_desktop}>
                <TooltipCustomized disableFocusListener
                                   disableTouchListener
                                   //open={true}
                                   title={(
                                       <div className={style.tooltipContent}>
                                           {content}
                                       </div>
                                   )}
                >
                    <div className={style.iconWrapper}>
                        {svgIcons.information}
                    </div>
                </TooltipCustomized>
            </div>


        </div>
    )
}

const TooltipCustomized = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props}
             classes={{popper: className}}
             placement="bottom-end"
    />
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        padding: 0,
        //color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 240,
        marginTop: "4px!important"
        //fontSize: theme.typography.pxToRem(12),
        //border: '1px solid #dadde9',
    },
}));