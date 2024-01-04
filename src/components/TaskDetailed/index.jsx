import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/material';
import { statusTasks } from '../../mask/statusTasksColors';

export const TaskDetailed = ({
    handleClick, open, task
}) => {
    const colors = statusTasks[task.stateTask];
    return (
        <Dialog open={open} onClose={handleClick} sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'flex-end',
        justifyContent: 'flex-end',
        }}>
            <DialogTitle>{task?.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {task.action}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClick}>Cancel</Button>
                <Button sx={{
                    bgcolor: colors,
                    color: 'white'
                }}>{task?.stateTask}</Button>
            </DialogActions>
        </Dialog>
    )
}