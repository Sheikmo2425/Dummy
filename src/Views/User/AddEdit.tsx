import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, TextField } from "@mui/material"
import { usertype } from "../../MOdel/user"
import { useForm } from "react-hook-form"
interface props {
    open: boolean
    close: () => void
    save: (e: usertype) => void
}
const AddEdit = ({ open, close, save }: props) => {
    const { reset, register, handleSubmit } = useForm<usertype>()
    const onclose = () => {
        reset()
        close()
    }
    const onsave = (e: usertype) => {
        save(e)
        onclose()
    }
    return (
        <>
            <Dialog open={open} >
                <DialogTitle></DialogTitle>
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