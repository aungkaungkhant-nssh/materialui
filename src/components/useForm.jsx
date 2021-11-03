import React,{useState} from 'react'
import {makeStyles} from '@mui/styles'
const useStyles=makeStyles((theme)=>({
    root:{
        '& .MuiFormControl-root':{
            width:"80%",
            margin:"8px"
        }
    }
}))
export function useForm(initialValues) {
    const [values,setValues]=useState(initialValues)
    
    const handleChange=e=>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    return [
        values,
        setValues,
        handleChange
    ]
}
export function Form(props){
    const classes=useStyles()
   
    return(
        <form  className={classes.root} onSubmit={props.handleSubmit}>
            {props.children}
        </form>
    )
}


