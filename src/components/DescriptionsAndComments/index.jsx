import React, { useContext, useState } from "react";
import {
    useMediaQuery,
    Button,
    Stack,
    Container
} from "@mui/material"

import * as Tag from './styles/index.js'
import { Root } from "../Global/Root/root_styles.jsx";
import { Close, Comment, Description } from "@mui/icons-material";
import { Textarea } from "@mui/joy";
import { CardTaskMacthes } from "../Global/Styles/styles.jsx";
import { CommentsTasks } from "../CommentsTasks/index.jsx";
import { AuthContext } from "../../authcontext/index.jsx";
import { commentService } from "../../api/comments/addComments.js";
import { descriptionService } from "../../api/descriptions/index.js";
import { Descriptions } from "../Descriptions/index.jsx";
import { serverTimestamp } from "firebase/firestore";
export const DescriptionsAndComments = ({
    setOPen,
    task,
    taskId,
    color,
    bg
}) => {
    let swipeDistance = 0;
    const { user } = useContext(AuthContext)
    const ismobilequery = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState('Comments');
    const [commentArea, setCommentArea] = useState('')
    const [comment, setComment] = useState({
        taskId: '',
        author: {
            userId: user.uid,
            name: user.displayName,
            avatar: user?.photoURL,
        },
        content: commentArea,
        timestamp: serverTimestamp(),
        actions: {
            likes: [],
            replies: [],
        },
        replies: [],
    });
    const handleChange = (event, newValue) => {
        if (newValue === 'close') {
            setOPen(false)
        }
        setValue(newValue);
    };
    const handleCommentChange = (event) => {
        const { name, value } = event.target;
        setComment((c) => ({
            ...c,
            taskId: taskId,
            [name]: value,
        }));
    };
    const addNew = async () => {
        try {
            if (comment.content && value === 'Comments') {
                const res = await commentService.comment.post(comment);
            } else if (comment.content && value === 'Descriptions') {
                await descriptionService.description.post(comment)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setComment((prevComment) => ({
                ...prevComment,
                content: '',
            }));
        }

    }
    const handleTouchEnd = (event) => {
        swipeDistance = event.touches[0].clientX
        if (swipeDistance.toFixed(0) > 50) {
            setValue('Descriptions')
        } else if (swipeDistance.toFixed(0) < 350) {
            setValue('Comments');
        }
    }
    document.addEventListener('touchmove', handleTouchEnd, false);;
    return (
        <Tag.DialogDetails
            ismobilequery={ismobilequery}
        >
            <Tag.MuiPaper
                ismobilequery={ismobilequery}
            >
                <Tag.MuiBottomNavigation
                    ismobilequery={ismobilequery}
                    value={value}
                    onChange={handleChange}
                >
                    {[{
                        label: 'Comentários',
                        value: 'Comments',
                        icon: <Comment />
                    }, {
                        label: 'Descrições',
                        value: 'Descriptions',
                        icon: <Description />
                    }].map((nav, index) => {
                        return (
                            <Tag.MuiBottomNavigationAction
                                key={index}
                                sx={{
                                    color: value === nav.value && `${Root.color_button} !important`,
                                    borderBottom: value === nav.value &&
                                        `4px solid ${Root.color_button}`
                                }}
                                label={nav.label}
                                value={nav.value}
                                icon={nav.icon}
                            />
                        )
                    })}
                    <Tag.MuiBottomNavigationAction
                        label='close'
                        value={'close'}
                        icon={<Close />}
                    />
                </Tag.MuiBottomNavigation>
                <Tag.MuiContainer ismobilequery={ismobilequery} maxWidth="sm">
                    {value === 'Comments' && (<>
                        <CommentsTasks
                            shadow={true}
                            colors={color}
                            bg={bg}
                            ismobilequery={ismobilequery}
                            task={task}
                            taskId={task.taskId}
                        />
                    </>
                    )}
                    {value === 'Descriptions' && (<>
                        <Descriptions
                            shadow={true}
                            colors={color}
                            bg={bg}
                            ismobilequery={ismobilequery}
                            task={task}
                            taskId={task.taskId}
                        />
                    </>
                    )}
                </Tag.MuiContainer>
                <Tag.MuiBottomTextarea
                    ismobilequery={ismobilequery}
                >
                    <Tag.MuiBottomMainTextarea
                        ismobilequery={ismobilequery}
                    >
                        <Textarea
                            name="content"
                            value={comment.content}
                            onChange={handleCommentChange}
                            sx={{ width: 1 }}
                            minRows={1}
                            placeholder={value === 'Descriptions' ? (
                                'Add your new description now'
                            ) : (
                                'Add your new comment now'
                            )}
                        />
                        <Button onClick={addNew} sx={{
                            color: Root.color_button,
                            bgcolor: Root.color_button_opacity
                        }} variant="contained">
                            Bublish
                        </Button>
                    </Tag.MuiBottomMainTextarea>
                </Tag.MuiBottomTextarea>
            </Tag.MuiPaper>
        </Tag.DialogDetails>

    )
}