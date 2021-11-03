import React from 'react'
import {Button as Btn} from '@mui/material'
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles({
    button:{
        marginTop:"10px"
    }
})
function Button({children,size,type,variant,...other}) {
    const classes=useStyles();
    return (
        <div className={classes.button}>
            <Btn variant={variant} size={size} type={type} {...other}>{children}</Btn>
        </div>
    )
}

export default Button
