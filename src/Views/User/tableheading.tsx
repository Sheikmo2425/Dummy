import { Box, Button, Card, TextField, Typography } from "@mui/material"
import { usertype } from "../../MOdel/user"
import { useState } from "react"
import AddEdit from "./AddEdit"

const TableHeading = ({ setdata }: { setdata: ((e: usertype) => void) }) => {
    const space = 'space-between'
  
    const [openadd, setopenadd] = useState(false)
    const [heading, setheading] = useState('')
    const save = (e: usertype) => {
        setdata(e)
       
        setopenadd(false)
    }

    return <>
        <Card sx={{ m: 1, p: 1, display: 'flex', justifyContent: space }}>
            <Box>
                <Typography variant="h6">Table Heading</Typography>
                <Typography variant="subtitle1">Heading Description</Typography></Box>
                <TextField onChange={(e)=>setheading(e.target.value)}/>
            <Button variant="outlined" onClick={() => setopenadd(true)}>Add</Button>
        </Card>
        <AddEdit open={openadd} close={() => setopenadd(false)} save={save} name={heading} />
    </>

}
export default TableHeading