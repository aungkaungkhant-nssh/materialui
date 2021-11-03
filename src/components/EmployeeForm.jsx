import React,{useState} from 'react'
import { Grid} from '@mui/material'
import { useForm,Form } from './useForm'
import Input from '../controls/Input'
import Radio from '../controls/Radio'
import Select from '../controls/Select'
import DatePicker from '../controls/DatePicker'
import Button from '../controls/Button'
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles({
    button:{
        marginTop:"100px"
    }
})
const initialValues={
    fullName:"",
    email:"",
    mobile:"",
    city:"",
    gender:"male",
    department:"",
}
const selectOptions=[
    {key:"Male",value:"male"},
    {key:"Female",value:"female"},
    {key:"Other",value:"other"},
]
const departMentOptions=[
    {key:"Computer Science",value:"cs"},
    {key:"Computer Technology",value:"ct"},
    {key:"Cybercircuity",value:"cc"}
]
function EmployeeForm() {
    const [values,,handleChange]=useForm(initialValues)
    const [error,setError]=useState({});
    const classes=useStyles();
    const validate=()=>{
        let temp={}
        temp.fullName=values.fullName?"":"The field is required";
        temp.email=values.email?"":"The email field is required";
        setError({...temp})
        return Object.values(temp).every(x => x=="");
       
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(validate()){
            alert(12)
        }
    }
    return (
        <Form handleSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                   <Input label="Full Name" value={values.name} onChange={handleChange} error={error.fullName} name="fullName"/>
                   <Input label="Email" value={values.email} onChange={handleChange}error={error.email} name="lastName"/>
                   <Input label="Mobile" value={values.mobile} onChange={handleChange} name="mobile"/>
                   <Input label="City" value={values.city} onChange={handleChange} name="city"/>
                </Grid>
                <Grid item xs={6}>
                    <Radio label="Gender" options={selectOptions} value={values.gender} onChange={handleChange} />
                    <Select label="Department" value={values.department} onChange={handleChange} name="department" options={departMentOptions}/>
                    <DatePicker label="Birthday"/>
                    <Button size="small" type="submit">Submit</Button>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
