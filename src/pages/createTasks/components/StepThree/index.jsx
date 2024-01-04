import React from 'react';
import { taskPrioritys } from '../../quirys/prioritys.js'
import { Alert, MenuItem, Select, Stack, TextField } from '@mui/material';
import { taskStatus } from '../../quirys/taskStatus.js';
import { HourglassBottom, HourglassFull, LockClock } from '@mui/icons-material';

export const StepThree = ({
    taskDetails,
    setTaskDetails,
    handleInputChange
}) => {
    const handlePriority = (event) => {
        const selectedValue = event.target.value;
        setTaskDetails((prevTaskDetails) => ({
            ...prevTaskDetails,
            priority: selectedValue,
        }));
    };
    const handleTaskStatusy = (event) => {
        const selectedValue = event.target.value;
        setTaskDetails((prevTaskDetails) => ({
            ...prevTaskDetails,
            taskStatus: selectedValue,
        }));
    };
    return (
        <>
            <Stack flexDirection={'row'} sx={{ gap: 3, width: '100%' }}>
                <TextField
                    name="estimated"
                    value={taskDetails.estimated}
                    onChange={(e) => handleInputChange('estimated', e.target.value)}
                    fullWidth={true}
                    size="small"
                    id="outlined-required"
                    label="Estimated time"
                    InputProps={{
                        endAdornment: (
                            <HourglassFull color="action" />
                        ),
                    }}
                    placeholder='1h 1d 1s 1m'
                />
                <Select
                    fullWidth
                    size="small"
                    value={taskDetails.priority}
                    onChange={handlePriority}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select the type of this task' }}
                >
                    <MenuItem value="" disabled>
                        Choose the collection priority...
                    </MenuItem>
                    {taskPrioritys.map((priority) => (
                        <MenuItem key={priority} value={priority}>
                            {priority}
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    fullWidth
                    size="small"
                    value={taskDetails.assigned ? taskStatus[5] : taskDetails.taskStatus}
                    onChange={handleTaskStatusy}
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        {
                            taskDetails.assigned
                                ? 'Waiting Approval'
                                : 'Select the type of this task'
                        }
                    </MenuItem>
                    {taskStatus.map((status) => (
                        <MenuItem key={status} value={status} disabled={taskDetails.assigned && true}>
                            {taskDetails.assigned ? "Waiting Approval" : status}
                        </MenuItem>
                    ))}
                </Select>

            </Stack >
        </>
    )
}