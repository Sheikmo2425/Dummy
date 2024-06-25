import { Box, Button, Card, Typography } from "@mui/material"
import { usertype } from "../../MOdel/user"
import { useState } from "react"
import AddEdit from "./AddEdit"

const TableHeading = ({ setdata }: { setdata: ((e: usertype) => void) }) => {
    const space = 'space-between'
  
    const [openadd, setopenadd] = useState(false)
    const save = (e: usertype) => {
        setdata(e)
       
        setopenadd(false)
    }

    return <>
        <Card sx={{ m: 1, p: 1, display: 'flex', justifyContent: space }}>
            <Box>
                <Typography variant="h6">Table Heading</Typography>
                <Typography variant="subtitle1">Heading Description</Typography></Box>
            <Button variant="outlined" onClick={() => setopenadd(true)}>Add</Button>
        </Card>
        <AddEdit open={openadd} close={() => setopenadd(false)} save={save} />
    </>

}
export default TableHeading