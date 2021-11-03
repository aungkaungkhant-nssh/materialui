import React from 'react'
import {FormControl, Grid,TextField,RadioGroup,FormControlLabel,FormLabel,Radio as Rad} from '@mui/material'
function Radio(props) {
    const {label,options,value,onChange}=props;
    return (
        <FormControl>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                row
                name="gender"
                value={value}
                onChange={onChange}
            >

                {
                    options.map((option,index)=>{
                       return (
                        <div key={index}>
                            <FormControlLabel value={option.value} control={<Rad />} label={option.key} />
                        </div>
                        
                       )
                        
                    })
                }
            </RadioGroup>
         </FormControl>
    )
}

export default Radio
