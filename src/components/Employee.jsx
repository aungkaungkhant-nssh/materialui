import React from 'react'
import EmployeeForm from './EmployeeForm'
import {Paper} from '@mui/material'
import {makeStyles} from '@mui/styles'
const useStyles=makeStyles((theme)=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))
function Employee() {
    const classes=useStyles();
    return (
        <>
            <Paper className={classes.pageContent}>
                <EmployeeForm />  
            </Paper>
            
        </>
    )
}

export default Employee
