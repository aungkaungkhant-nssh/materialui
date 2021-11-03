import React from 'react'
import { Select as Choose,MenuItem,InputLabel,FormControl} from '@mui/material'
function Select(props) {
    const {label,value,onChange,options,name}=props
    return (
        <div>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Choose
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={value}
                    onChange={onChange}
                    label={label}
                    name={name}
                >
                    {
                        options.map((option)=>(
                            <MenuItem value={option.value}>{option.key}</MenuItem>
                        ))
                    }
                </Choose>
            </FormControl>
            
        </div>
            
    )
}

export default Select 
