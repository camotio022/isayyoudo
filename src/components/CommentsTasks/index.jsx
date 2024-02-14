import { Avatar, Stack, Tooltip, Typography } from "@mui/material"
import { BullPoint } from "../Bull"
import { MoreHoriz, ThumbUp, ThumbUpOffAlt } from "@mui/icons-material"
import * as Tag from './index.js'
import { Root } from "../Global/Root/root_styles.jsx"
import { db } from "../../firebaseConfig.js"
import { commentService } from "../../api/comments/addComments.js"
import { collection, onSnapshot } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { FormatRelativeTime } from "./formatRelativeTime.jsx"
import { AuthContext } from "../../authcontext/index.jsx"
import { LoCommAndDesc } from "../Loadinds/LoCommAndDesc/index.jsx"
import { MoreVertMenu } from "../MoreVerMenu/index.jsx"
import { taskStatusBgcolor } from "../../pages/createTasks/quirys/taskStatus.js"
export const CommentsTasks = ({
    shadow,
    ismobilequery,
    taskId,
}) => {
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])
    const [openItemId, setOpenItemId] = useState(null);
    const [isLoad, setIsLoad] = useState(true)

    const handleClick = (itemId) => {
        setOpenItemId((prevOpenItemId) => (prevOpenItemId === itemId ? null : itemId));
    };
    useEffect(() => {
        setIsLoad(true)
        const unsubscribe = onSnapshot(collection(db, 'comments'), async (snapshot) => {
            const commentsForTask = await commentService.comment.getCommentsForTask(taskId);
            setComments(commentsForTask);
            setIsLoad(false)
        });
        return () => {
            unsubscribe();
        };
    }, [taskId]);
    const extractMentionsAndHashtags = (text) => {
        const mentionRegex = /@([\wÀ-ÖØ-öø-ÿ]+)/g;
        const hashtagRegex = /#([\wÀ-ÖØ-öø-ÿ]+)/g;
        const mentions = text.match(mentionRegex) || [];
        const hashtags = text.match(hashtagRegex) || [];
        return { mentions, hashtags };
    };
    const renderButtons = (text) => {
        const { mentions, hashtags } = extractMentionsAndHashtags(text);
        let updatedText = text;
        mentions.forEach((mention) => {
            updatedText = updatedText.replace(mention, `
                <strong style="
                    color: ${Root.color_button};
                    font-size: 13px;
                    padding: 2px;
                    margin-right: 4px;
                    cursor: pointer;
                    text-decoration: underline;
                ">
                    ${mention}
                </strong>
            `);
        });
        hashtags.forEach((hashtag) => {
            updatedText = updatedText.replace(hashtag, `
            <strong style="
                color: ${Root.green};
                font-size: 13px;
                padding: 2px;
                margin-right: 4px,
            ">
                ${hashtag}
            </strong>
            `);
        });
        return <div dangerouslySetInnerHTML={{ __html: updatedText }} />;
    };
    const splitNameUserInScreens = (name) => {
        if (ismobilequery) {
            return name?.split(' ')[0];
        }
        return name;
    }
    if (isLoad) {
        return (
            <LoCommAndDesc />
        );
    }
    return (
        <>
            {
                comments.map((comment, index) => {
                    return (
                        <Tag.CommentMainTag
                            key={index} ismobilequery={ismobilequery}
                            gap={1} mt={1}
                            mb={(comments.length - 1) === index && (shadow ? '10rem' : 3)}
                        >
                            {openItemId === index &&
                                <MoreVertMenu
                                    id={comment.commentId}
                                    type='comment'
                                    setOpenItemId={setOpenItemId}
                                />}
                            <Tag.CommentMainParte1 mt={index === 0 ? (shadow ? '2rem' : 3) : 2}>
                                <Tag.CommentMainParteA diretion={'flex-start'}>
                                    <Avatar sx={{ height: 42, width: 42, ml: -2 }}
                                        src={comment.author.avatar} />
                                    <Stack sx={{
                                        color: Root.color_button,
                                        fontSize: '1rem',
                                        fontWeight: ismobilequery ? 500 : 500
                                    }}>
                                        {splitNameUserInScreens(comment.author.name)}
                                    </Stack>
                                    <BullPoint />
                                    <Typography color={'text.secondary'}>
                                        <FormatRelativeTime dateTimeString={comment.timestamp} />
                                    </Typography>
                                </Tag.CommentMainParteA>

                                <Tag.SettingsComment
                                    onPress={() => handleClick(index)}
                                    onClick={() => handleClick(index)}
                                >
                                    <MoreHoriz />
                                </Tag.SettingsComment>

                            </Tag.CommentMainParte1>

                            <Tag.CommentMainParteA
                                sx={{
                                    borderLeft: Root.border,
                                    paddingInline: '0.8rem'
                                }}
                                diretion={'flex-start'} color={'text.secondary'}>
                                {renderButtons(comment.content) ? (
                                    <>
                                        {renderButtons(comment.content)}
                                    </>
                                ) : (
                                    <Typography color={'text.secondary'}>
                                        {comment.content}
                                    </Typography>
                                )}
                            </Tag.CommentMainParteA>
                            <Tag.CommentMainParteA sx={{ gap: 2, width: '100%', color: 'text.secondary', ml: -2 }} diretion={'flex-start'} >
                                <Tag.CommentMainParteA
                                    onClick={() => {
                                        commentService.comment.likeComment(
                                            comment.commentId, user.uid
                                        )
                                    }}
                                    diretion={'flex-start'} sx={{ width: 'auto' }}>
                                    {comment.actions.likes.includes(user.uid) ?
                                        <ThumbUp sx={{ color: Root.color_button }} />
                                        : <ThumbUpOffAlt />}
                                    {comment.actions.likes.length}
                                </Tag.CommentMainParteA>
                                <Stack sx={{
                                    borderRight: Root.border,
                                    height: '1rem',
                                    width: '1px',
                                }} />
                                <Tag.ReplayComment ismobilequery={ismobilequery}>
                                    Replay
                                </Tag.ReplayComment>
                            </Tag.CommentMainParteA>
                        </Tag.CommentMainTag>
                    )
                })
            }
        </>
    )

}