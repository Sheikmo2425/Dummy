import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, TextField } from "@mui/material"
import { usertype } from "../../MOdel/user"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { add, resetselecteddata, update } from "../../Slice/UserSlice"
import { useEffect } from "react"
interface props {
    open: boolean
    close: () => void


}
const AddEdit = ({ open, close }: props) => {
    const item = useSelector((state:any) => state.user.initialdata);
    const { reset, register, handleSubmit } = useForm<usertype>()
    useEffect(()=>{
        reset(item)
    },[item])
    const dispatch = useDispatch();
    const onclose = () => {
        reset()
        dispatch(resetselecteddata())
        close()
    }

    const onsave = (e: usertype) => {
        if (e.id) {
            dispatch(update(e))
        } else {
            dispatch(add(e))
        }
        onclose()
    }
    return (
        <>
            <Dialog open={open} >
                <DialogTitle>{item.id? 'Edit' :'Add'} user</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onsave)}>
                        <InputLabel>Name </InputLabel>
                        <TextField type="text"  {...register('name')} />
                        <InputLabel>Email </InputLabel>
                        <TextField type="text" {...register('email')} />

                        <InputLabel>Age</InputLabel>
                        <TextField type="number" {...register('age')} />
                        <Button type="submit">Submit </Button>
                        <Button onClick={onclose}>Close </Button>
                    </form>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </>
    )
}
export default AddEdit