import { Box } from "@mui/material";
import TableHeading from "./tableheading";
import BasicTable from "./Table";
import Footer from "../../Componet/Footer";
import { useState } from "react";
import { usertype } from "../../MOdel/user";
function Tableindex(){
  const [userdata,setuserdata]=useState<usertype[]>([])
    return<>
    <Box>
  <TableHeading setdata={(e:usertype)=>setuserdata([...userdata,e])}/>
  <BasicTable userdata={userdata}/>
  <Footer/>
  
    </Box>
    </>
}

export default Tableindex