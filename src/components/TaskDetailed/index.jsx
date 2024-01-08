import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { taskStatusColors } from '../../pages/createTasks/quirys/taskStatus';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box, Divider, MenuList, Paper, Stack } from '@mui/material';
import { Close, Comment, Description, Edit, Group } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles';
import { useState } from 'react';
import { CommentArea } from '../Dialog/components/MyComments';
import { CommentsTasks } from '../CommentsTasks/index.jsx';
import { commentsData } from '../../mask/comments.js'
import { BullPoint } from '../Bull';
import * as Tag from './styles/index.js'
export const TaskDetailed = ({
    handleClick, open, task
}) => {
    const [value, setValue] = useState(0);
    console.log(value)
    const checkKeyIsValid = (key) => {
        return key ? key : 'Empty'
    }
    const startDiv = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
    }
    const colors = taskStatusColors[task.taskStatus];
    return (
        <Tag.DialogDetails open={open} onClose={handleClick}>
            <Paper sx={{ width: 500, height: 'auto' }}>
                <MenuList>
                    <Stack sx={{

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                        height: '3rem'
                    }}>
                        <Box ml={2} component={'div'}>
                            {<BullPoint />}
                            {checkKeyIsValid(task.typeCollection)}
                        </Box>
                        <Box mr={4} sx={{ cursor: 'pointer' }}>
                            <Edit sx={{ mr: 2, color: colors ? colors : 'gray', boxShadow: Root.boxShadow }} />
                            <Close sx={{ mr: 1, color: colors ? colors : 'gray', boxShadow: Root.boxShadow }} />
                        </Box>
                    </Stack>
                    <Divider />
                    <Box ml={3} mt={4} component={'h3'} sx={{ height: 'auto', maxWidth: '90%' }}>
                        {checkKeyIsValid(task.title)}
                    </Box>
                    <Stack mt={4} sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: 1,
                    }}>
                        <Box ml={3} gap={20} sx={startDiv}>
                            <Box width={100} >{<BullPoint />}Status</Box>
                            <Button sx={{ backgroundColor: colors ? colors : taskStatusColors.empty }}>{<BullPoint />}{checkKeyIsValid(task.taskStatus)}</Button>
                        </Box>
                        <Box ml={3} gap={20} sx={startDiv}>
                            <Box width={100} >{<BullPoint />}Start Date</Box>
                            <Box>
                                {checkKeyIsValid(task.startDate)}
                            </Box>
                        </Box>
                        <Box ml={3} gap={20} sx={startDiv}>
                            <Box width={100} >{<BullPoint />}Delivery </Box>
                            <Box>
                                {checkKeyIsValid(task.deliveryDate)}
                            </Box>
                        </Box>
                        <Box ml={3} gap={20} sx={startDiv}>
                            <Box width={100} >{<BullPoint />}Assigned</Box>
                            <Box>
                                {checkKeyIsValid(task.assigned)}
                            </Box>
                        </Box>
                    </Stack>
                    <Box mt={5} ml={3} sx={{ width: 450 }}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            {
                                [{ label: 'Comments', icon: <Comment /> },
                                { label: 'Descriptions', icon: <Description /> },
                                { label: 'Assigners', icon: <Group /> }
                                ].map((action, index) => {
                                    return (
                                        <BottomNavigationAction sx={{
                                            ':focus': {
                                                outline: 'none',
                                                color: Root.color_button
                                            },
                                            borderBottom: value === index && `3px solid ${Root.color_button}`
                                        }} label={action.label} icon={action.icon} />
                                    )
                                })}
                        </BottomNavigation>
                        {value === 0 && (<>
                            <CommentArea />
                            {commentsData.map((comment, index) => {
                                return (
                                    <CommentsTasks comment={comment}/>
                                )
                            })}

                        </>
                        )}
                    </Box>
                </MenuList>
            </Paper>

        </Tag.DialogDetails>
    )
}