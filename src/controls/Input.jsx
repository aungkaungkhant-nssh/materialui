import React from 'react'
import {TextField} from '@mui/material'
function Input(props) {
    const {label,value,onChange,error,name}=props
    return (
        <div>
             <TextField id="outlined-basic" label={label} 
                    name={name}
                    error={error}
                    helperText={error}
                    variant="outlined" value={value} onChange={onChange}/>
        </div>
    )
}

export default Input
