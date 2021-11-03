import { Table, TableHead,TableRow,TableCell,TablePagination } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React,{useState} from 'react'
const useStyles=makeStyles(theme=>({
        table_cell:{
            backgroundColor:"#cccc",
        }     
}))
function useTable() {
    const pages=[3,6,9];
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(pages[page])
    const classes=useStyles();
    const TableContainer=(props)=>(
        <Table>{props.children}</Table>
    )
    const TblHead=props=>(
        <TableHead>
            <TableRow>
                {props.children.map((child)=>(
                    <TableCell className={classes.table_cell} style={{fontSize:"18px"}}>{child}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
    const handleChangePage=(event,newPage)=>{
        setPage(newPage)
    }
    const handleChangeRowsPerPage=(event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0)
    }
    const TblPagination=props=>(
        <TablePagination
        rowsPerPageOptions={pages}
        component="div"
        count={props.students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    )
    const recordAfterPaginationAndSorting=(students)=>(
        students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    )
    return [
        TableContainer,
        TblHead,
        TblPagination,
        recordAfterPaginationAndSorting
    ]
}

export default useTable
