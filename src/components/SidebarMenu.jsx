import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles({
    sideMenu:{
        display:"flex",
        flexDirection:"column",
        position:"absolute",
        left:"0px",
        backgroundColor:"#253053",
        width:"320px",
        height:"100%",
    }
})
function SidebarMenu(props) {
    const classes=useStyles();

    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default SidebarMenu
