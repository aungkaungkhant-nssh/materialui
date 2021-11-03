import React from 'react'
import {makeStyles} from '@mui/styles'

import { Card,Paper,Typography  } from '@mui/material'
const useStyles=makeStyles({
        root:{
            bacckgroundColor:"red"
        },
        header:{
            padding:"16px",
            display:"flex",
            marginBottom:"10px"
        },
        pageIcon:{
            display:"inline-block",
            padding:"16px",
            color:"#3c44b1",
            marginRight:"18px"
        }
})
function Header(props) {
    const {title,subtitle,icon}=props
  const classes=useStyles();
    return (
        <Paper elevation={2} square>
            <div className={classes.header}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div>
                    <Typography variant="h6" component="div">
                           {title} 
                    </Typography> 
                    <Typography variant="subtitle2" component="div">
                           {subtitle} 
                    </Typography> 
                </div>
            </div>
        </Paper>
    )
}

export default Header
