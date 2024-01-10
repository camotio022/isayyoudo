import * as React from 'react';
import Button from '@mui/material/Button';
import { taskStatusColors } from '../../pages/createTasks/quirys/taskStatus';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box, Divider, Stack, useMediaQuery } from '@mui/material';
import { Close, Comment, Description, Edit, Group } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles';
import { useState } from 'react';
import { CommentArea } from '../Dialog/components/MyComments';
import { CommentsTasks } from '../CommentsTasks/index.jsx';
import { commentsData } from '../../mask/comments.js'
import { BullPoint } from '../Bull';
import * as Tag from './styles/index.js'
import { useContext } from 'react';
import { AuthContext } from '../../authcontext/index.jsx';
import { commentService } from '../../api/comments/addComments.js';
export const TaskDetailed = ({
    handleClick, open, task, setOpenMoreInfo
}) => {
    const { user } = useContext(AuthContext)
    const isMobileQuery = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState(0);
    const [commentArea, setCommentArea] = useState('')
    const [comment, setComment] = useState({
        taskId: task.taskId,
        author: {
            userId: user.uid,
            name: user.displayName,
            avatar: user.photoURL,
        },
        content: commentArea,
        timestamp: new Date().toLocaleString(),
        actions: {
            likes: 10,
            replies: 3,
        },
        replies: [],
    });
    const checkKeyIsValid = (key) => {
        return key ? key : 'Empty'
    }
    const itemDetailsSX = {
        mr: 2, color: 'white', boxShadow: Root.boxShadow,
        border: '1px solid white'
    }
    const colors = taskStatusColors[task.taskStatus];
    const handleCommentChange = (event) => {
        const { name, value } = event.target;
        setComment((c) => ({
            ...c,
            [name]: value,
        }));
    };
    const addComment = async () => {
        if (comment.content) {
            try {
                const res = await commentService.comment.post(comment)
                console.log(res)
            } catch (err) {
                console.error(err)
            }
        }
    }
    return (
        <Tag.DialogDetails scroll="paper" isMobileQuery={isMobileQuery} open={open} onClose={handleClick}>
            <Stack sx={{
                position: 'relative',
                width: isMobileQuery ? '95vw' : 500,
                minHeight: isMobileQuery ? '95vh' : 'auto',
                marginBlock: 5,
            }}>
                <Tag.NavBarFixed
                    taskStatusColors={taskStatusColors.empty}
                    isMobileQuery={isMobileQuery}
                    colors={colors}
                >
                    <Box ml={2} component={'div'}>
                        {<BullPoint />}
                        {checkKeyIsValid(task.typeCollection)}
                    </Box>
                    <Box mr={2} sx={{ cursor: 'pointer' }}>
                        <Edit sx={itemDetailsSX} />
                        <Close onClick={() => setOpenMoreInfo(!open)} sx={{ color: 'white', boxShadow: Root.boxShadow, border: '1px solid white' }} />
                    </Box>
                </Tag.NavBarFixed>
                <Divider sx={{ mt: 3 }} />
                <Box ml={3} mt={4} component={'h3'} sx={{ height: 'auto', maxWidth: '90%' }}>
                    {checkKeyIsValid(task.title)}
                </Box>
                <Stack mt={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                }}>
                    <Tag.BoxItem isMobileQuery={isMobileQuery}>
                        <Box >{<BullPoint />}Status</Box>
                        <Button sx={{ backgroundColor: colors ? colors : taskStatusColors.empty }}>{<BullPoint />}{checkKeyIsValid(task.taskStatus)}</Button>
                    </Tag.BoxItem>
                    <Tag.BoxItem isMobileQuery={isMobileQuery}>
                        <Box >{<BullPoint />}Start Date</Box>
                        <Box>
                            {checkKeyIsValid(task.startDate)}
                        </Box>
                    </Tag.BoxItem>
                    <Tag.BoxItem isMobileQuery={isMobileQuery}>
                        <Box >{<BullPoint />}Delivery </Box>
                        <Box>
                            {checkKeyIsValid(task.deliveryDate)}
                        </Box>
                    </Tag.BoxItem>
                    <Tag.BoxItem isMobileQuery={isMobileQuery}>
                        <Box >{<BullPoint />}Assigned</Box>
                        <Box>
                            {checkKeyIsValid(task.assigned)}
                        </Box>
                    </Tag.BoxItem>
                </Stack>
                <Box mt={5} ml={!isMobileQuery && 3} sx={{
                    width: isMobileQuery ? '100%' : 450,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <BottomNavigation
                        sx={{ width: '100%' }}
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
                                    <BottomNavigationAction key={action.label} sx={{
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
                        <CommentArea
                            isMobileQuery={isMobileQuery}
                            comment={comment}
                            handleCommentChange={handleCommentChange}
                            addComment={addComment}
                        />
                        <CommentsTasks isMobileQuery={isMobileQuery} task={task} />
                    </>
                    )}
                </Box>
            </Stack>
        </Tag.DialogDetails>
    )
}