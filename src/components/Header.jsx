import React from 'react'

import AppBar from '@mui/material/AppBar';
import { InputBase, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from '@mui/styles'

const useStyles=makeStyles({
    searchInput:{
        opacity:"0.6",
        padding:"0px 8px",
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:"#f5f5f5"
        },
        '& .MuiSvgIcon-root':{
            marginRight:"10px"
        }
    },
  

    
})
function Header() {
  const classes=useStyles();
    return (
        <AppBar position="static" style={{backgroundColor:"#fff",transform:"translateZ(0)"}}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                       <InputBase 
                       placeholder="search a topic"
                       className={classes.searchInput}
                       startAdornment={<SearchIcon fontSize="small" className={classes.searchIcon}/>}
                       />
                    </Grid>
                    <Grid item sm>a</Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <NotificationsActiveIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                             <Badge badgeContent={4} color="error">
                                <ChatBubbleIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            < PowerSettingsNewIcon />
                        </IconButton>

                       
                    </Grid>
                </Grid>
            </Toolbar>
         </AppBar>
    )
}

export default Header
