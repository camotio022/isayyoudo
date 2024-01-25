import * as React from 'react';
import Button from '@mui/material/Button';
import { taskStatusBgcolor, taskStatusColors } from '../../pages/createTasks/quirys/taskStatus';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box, Divider, Stack, useMediaQuery } from '@mui/material';
import { Close, Comment, Description, Edit, Group } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles';
import { useState } from 'react';
import { CommentArea } from '../Dialog/components/MyComments';
import { CommentsTasks } from '../CommentsTasks/index.jsx';
import { BullPoint } from '../Bull';
import * as Tag from './styles/index.js'
import { useContext } from 'react';
import { AuthContext } from '../../authcontext/index.jsx';
import { commentService } from '../../api/comments/addComments.js';
import { Descriptions } from '../Descriptions/index.jsx';
import { descriptionService } from '../../api/descriptions/index.js';
import { serverTimestamp } from 'firebase/firestore';
export const TaskDetailed = ({
    handleClick, open, task, taskId, setOpenMoreInfo
}) => {
    const { user } = useContext(AuthContext)
    const ismobilequery = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState(0);
    const [commentArea, setCommentArea] = useState('')
    const [comment, setComment] = useState({
        taskId: '',
        author: {
            userId: user.uid,
            name: user.displayName,
            avatar: user.photoURL,
        },
        content: commentArea,
        timestamp: serverTimestamp(),
        actions: {
            likes: [],
            replies: [],
        },
        replies: [],
    });
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const checkKeyIsValid = (key) => {
        return key ? capitalizeFirstLetter(key) : 'Empty';
    }
    const colors = taskStatusColors[task.taskStatus];
    const bg = taskStatusBgcolor[task.taskStatus];
    const handleCommentChange = (event) => {
        const { name, value } = event.target;
        setComment((c) => ({
            ...c,
            taskId: taskId,
            [name]: value,
        }));
    };
    const addComment = async () => {
        if (comment.content && value === 0) {
            try {
                const res = await commentService.comment.post(comment)
            } catch (err) {
                console.error(err)
            }
        } else if (comment.content && value === 1) {
            try {
                await descriptionService.description.post(comment)
            } catch (err) {
                console.error(err)
            }
        }
    }
    const itemDetailsSX = {
        mr: 2,
        width: '32px',
        height: '32px',
        boxShadow: Root.boxShadow,
        bgcolor: bg ? bg : taskStatusBgcolor.empty,
        color: colors ? colors : taskStatusColors.empty
    }
    return (
        <Tag.DialogDetails  ismobilequery={ismobilequery}>
            <Tag.ContainerDialog ismobilequery={ismobilequery}>
                <Tag.NavBarFixed
                    ismobilequery={ismobilequery}
                    colors={colors}
                >
                    <Box ml={2} component={'div'}>
                        {<BullPoint />}
                        {checkKeyIsValid(task.typeCollection)}
                    </Box>
                    <Box mr={2} sx={{ cursor: 'pointer' }}>
                        <Edit sx={itemDetailsSX} />
                        <Close
                            onClick={() => setOpenMoreInfo(!open)}
                            sx={{
                                color: colors ? colors : taskStatusColors.empty,
                                boxShadow: Root.boxShadow,
                                bgcolor: bg ? bg : taskStatusBgcolor.empty,
                                width: '32px',
                                height: '32px',
                            }} />
                    </Box>
                </Tag.NavBarFixed>
                <Divider sx={{ mt: 3 }} />
                <Box ml={3} mt={8} component={'h3'} sx={{ height: 'auto', maxWidth: '90%' }}>
                    {checkKeyIsValid(task.title)}
                </Box>
                <Stack mt={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                }}>
                    <Tag.BoxItem ismobilequery={ismobilequery}>
                        <Box >{<BullPoint />}Status</Box>
                        <Button
                            sx={{
                                minWidth: 85,
                                color: colors ? colors : taskStatusColors.empty,
                                backgroundColor: bg ? bg : taskStatusBgcolor.empty
                            }}>
                            {checkKeyIsValid(task.taskStatus)}
                        </Button>
                    </Tag.BoxItem>
                    <Tag.BoxItem ismobilequery={ismobilequery}>
                        <Box >{<BullPoint />}Start Date</Box>
                        <Box>
                            {checkKeyIsValid(task.startDate)}
                        </Box>
                    </Tag.BoxItem>
                    <Tag.BoxItem ismobilequery={ismobilequery}>
                        <Box >{<BullPoint />}Delivery </Box>
                        <Box>
                            {checkKeyIsValid(task.deliveryDate)}
                        </Box>
                    </Tag.BoxItem>
                    <Tag.BoxItem ismobilequery={ismobilequery}>
                        <Box >{<BullPoint />}Assigned</Box>
                        <Box>
                            {checkKeyIsValid(task.assigned)}
                        </Box>
                    </Tag.BoxItem>
                </Stack>
                <Box mt={5} ml={!ismobilequery && 3} sx={{
                    width: ismobilequery ? '100%' : 450,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <BottomNavigation
                        sx={{ width: '100%'}}
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
                    <CommentArea
                        ismobilequery={ismobilequery}
                        comment={comment}
                        handleCommentChange={handleCommentChange}
                        addComment={addComment}
                    />
                    {value === 0 && (<>
                        <CommentsTasks
                            colors={colors}
                            ismobilequery={ismobilequery}
                            task={task}
                            taskId={task.taskId}
                        />
                    </>
                    )}
                    {
                        value === 1 && (<>
                            <Descriptions
                                bg={bg}
                                colors={colors}
                                ismobilequery={ismobilequery}
                                taskId={task.taskId}
                            />
                        </>)
                    }
                </Box>
            </Tag.ContainerDialog>
        </Tag.DialogDetails>
    )
}