import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Fragment } from "react"
export const DialogError = ({
    open,
    handleClose,
    message,
}) => {
    return (
        <Fragment>
            <Dialog  open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
                <DialogTitle >Infos</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}