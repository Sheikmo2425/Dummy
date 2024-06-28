
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { usertype } from '../../MOdel/user';
import { Button, Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';




// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
// console.log('sheik', 215, 12,34, 22,  createData('sheik', 215, 12,34, 22))
export default function BasicTable({userdata}:{userdata:usertype[]}) {
const [a,seta]=useState<number>(0)
const [name,setname]=useState<string>('')
const add=()=>{
  seta(a+1)
 
}

  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata?.map((user,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="right">{user?.name}</TableCell>
              <TableCell align="right">{user?.email}</TableCell>
              <TableCell align="right">{user?.age}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Card sx={{p:1,m:1}}>

  <Typography>{a}</Typography>
  <Button onClick={()=>add()}>add</Button>
  <Typography>{name}</Typography>
  <TextField value={name} placeholder='name' onChange={(e)=>setname(e.target.value)}  required /> 
    <Button onClick={()=>setname('')} >Clear</Button></Card>
      </>
  );
}