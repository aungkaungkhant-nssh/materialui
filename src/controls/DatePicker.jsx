import React from 'react'
import {TextField} from '@mui/material';

function DatePicker(props) {
    const {label,...rest}=props;
    return (
        <div>
             <TextField
                id="date"
                label={label}
                type="date"
                {...rest}
                // defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </div>
    )
}

export default DatePicker
