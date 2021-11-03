import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import SidebarMenu from './components/SidebarMenu';
import { makeStyles } from '@mui/styles';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Employee from './components/Employee'
import useTable from './controls/useTable';
import Button from './controls/Button'
import AddIcon from '@mui/icons-material/Add';
import { TableBody, TableCell, TableRow,TblPagination,Paper} from '@mui/material';
const useStyles=makeStyles({
  header:{
    paddingLeft:"320px",
    width:"100%"
  }
})
const theme = createTheme({
  palette: {
    primary:{
      main:"#333996",
      light:"#3c44b126"
    },
  },
  shape:{
    borderRadius:"5px"
  }
 
});
const students=[
  {name:"aungkaungkhant",email:"akkgit0909@gmail.com",address:"Pyin Oo Lwin"},
  {name:"mgmg",email:"mgmggit0909@gmail.com",address:"Mandalay"},
  {name:"susu",email:"susugit0909@gmail.com",address:"Lashio"},
  {name:"tuntun",email:"tuntungit0909@gmail.com",address:"Taunggyi"},
  {name:"aungkaungkhant",email:"akkgit0909@gmail.com",address:"Pyin Oo Lwin"},
  {name:"mgmg",email:"mgmggit0909@gmail.com",address:"Mandalay"},
  {name:"susu",email:"susugit0909@gmail.com",address:"Lashio"},
  {name:"tuntun",email:"tuntungit0909@gmail.com",address:"Taunggyi"},
  {name:"aungkaungkhant",email:"akkgit0909@gmail.com",address:"Pyin Oo Lwin"},
  {name:"mgmg",email:"mgmggit0909@gmail.com",address:"Mandalay"},
  {name:"susu",email:"susugit0909@gmail.com",address:"Lashio"},
  {name:"tuntun",email:"tuntungit0909@gmail.com",address:"Taunggyi"},
]
const heads=["Name","Email","Address"]
function App() {
  const classes=useStyles()
  const [TableContainer,TblHead,TblPagination,recordAfterPaginationAndSorting]=useTable();
  
  return (
    <ThemeProvider theme={theme}>
        <SidebarMenu />
        <div className={classes.header}>
             <Header />
             <PageTitle title="Hello World" subtitle="How are you?" 
             icon={<PeopleAltIcon fontSize="large" style={{color:"#333996"}} />}
             />
             {/* <Employee /> */}
             <Paper elevation={2} square>
               <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                   <div></div>
                   <Button variant="outlined" type="btn" size="4" startIcon={<AddIcon />}>Add new</Button>
               </div>
             <TableContainer>
                <TblHead>
                    {heads}
                </TblHead>
                 <TableBody>
                    {
                      recordAfterPaginationAndSorting(students).map((student)=>(
                        <TableRow>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.address}</TableCell>
                        </TableRow>
                      ))
                    }
                 </TableBody>
             </TableContainer>
             <TblPagination students={students}></TblPagination>
             </Paper>
            
        </div>
    </ThemeProvider>
  );
}

export default App;
