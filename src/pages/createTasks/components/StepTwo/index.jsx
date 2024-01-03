import React from 'react';
import { Alert, Stack, TextField } from '@mui/material';
import { Assessment, Assignment, AssignmentInd, HourglassBottom, HourglassTop, Person } from '@mui/icons-material';

export const StepTwo = ({
    taskDetails,
    handleInputChange
}) => {
    const calculateExecutionDays = () => {
        const startDate = new Date(taskDetails.startDate);
        const deliveryDate = new Date(taskDetails.deliveryDate);
        if (isNaN(startDate) || isNaN(deliveryDate)) {
            return false;
        }
        const timeDifference = deliveryDate - startDate;
        const executionDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return executionDays;
    };
    return (
        <>
            <Stack sx={{ width: '100%' }}>
                <Alert
                    severity={!calculateExecutionDays() ? "error" : "success"}
                >
                    {
                        calculateExecutionDays() ?
                            `${calculateExecutionDays()
                            } estimated delivery days for this task`:
                            (`
                            The delivery date cannot be less than the start date, nor vice versa
                        `)
                    }
                </Alert>
            </Stack>
            <Stack flexDirection={'row'} sx={{ gap: 3, width: '100%' }}>
                <TextField
                    name="startDate"
                    value={taskDetails.startDate instanceof Date ? taskDetails.startDate.toISOString().split('T')[0] : taskDetails.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    fullWidth
                    required
                    type='date'
                    size="small"
                    id="outlined-required"
                    label="Stard Date"
                    placeholder='Enter your Stard Date'
                    InputProps={{
                        endAdornment: (
                          <HourglassTop color="action" />
                        ),
                      }}
                />
                <TextField
                    name="deliveryDate"
                    value={taskDetails.deliveryDate instanceof Date ? taskDetails.deliveryDate.toISOString().split('T')[0] : taskDetails.deliveryDate}
                    onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                    fullWidth
                    required
                    type='date'
                    size="small"
                    id="outlined-required"
                    label="Delivery day"
                    placeholder='Enter your delivery date'
                    InputProps={{
                        endAdornment: (
                          <HourglassBottom color="action" />
                        ),
                      }}
                />
                <TextField
                    name="assigned"
                    value={taskDetails.assigned}
                    onChange={(e) => handleInputChange('assigned', e.target.value)}
                    fullWidth
                    required
                    size="small"
                    id="outlined-required"
                    label="assigned"
                    placeholder='assigned to who ( *email or user id )'
                    InputProps={{
                        endAdornment: (
                          <AssignmentInd color="action" />
                        ),
                      }}
                />
            </Stack >
        </>
    )
}