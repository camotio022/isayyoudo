import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material"
import { BullPoint } from "../Bull"
import { MoreHoriz, ThumbUpOffAlt } from "@mui/icons-material"
import * as Tag from './index.js'
import { Root } from "../Global/Root/root_styles.jsx"
const text = 'Lorem ipsum dolor @Temotio Luis sit amet, #consectetur.'
export const CommentsTasks = ({
    comment
}) => {
    const extractMentionsAndHashtags = (text) => {
        const mentionRegex = /@([\wÀ-ÖØ-öø-ÿ]+)/g;
        const hashtagRegex = /#([\wÀ-ÖØ-öø-ÿ]+)/g;
        const mentions = text.match(mentionRegex) || [];
        const hashtags = text.match(hashtagRegex) || [];
        return { mentions, hashtags };
    };
    const renderButtons = (text, mentions, hashtags) => {
        let updatedText = text;
        mentions.forEach((mention) => {
            updatedText = updatedText.replace(mention, `
                <strong style="
                    background-color: rgba(0,0, 255, 0.2); 
                    color: blue;
                    font-size: 13px;
                    padding: 2px;
                    border-radius: 8px;
                    margin-right: 4px,
                ">
                    ${mention}
                </strong>
            `);
        });
        hashtags.forEach((hashtag) => {
            updatedText = updatedText.replace(hashtag, `
            <strong style="
                background-color: rgba(25,31, 52, 0.2); 
                color: brown;
                font-size: 13px;
                padding: 2px;
                border-radius: 8px;
                margin-right: 4px,
            ">
                ${hashtag}
            </strong>
            `);
        });
        return <div dangerouslySetInnerHTML={{ __html: updatedText }} />;
    };
    const { mentions, hashtags } = extractMentionsAndHashtags(comment.text);
    return (
        <Tag.CommentMainTag gap={1} mt={1}>
            <Tag.CommentMainParte1 mt={5}>
                <Tag.CommentMainParteA >
                    <Avatar sx={{ height: 35, width: 35 }} src={comment.avatar} />
                    <Stack sx={{
                        fontWeight: 800
                    }}>
                        {comment.name}
                    </Stack>
                    <BullPoint />
                    <Typography color={'text.secondary'}>
                        {comment.time}
                    </Typography>
                </Tag.CommentMainParteA>
                <Box>
                    <MoreHoriz sx={{ cursor: 'pointer' }} />
                </Box>
            </Tag.CommentMainParte1>

            <Tag.CommentMainParteA color={'text.secondary'}>
                {mentions.length > 0 || hashtags.length > 0 ? (
                    <>
                        {renderButtons(comment.text, mentions, hashtags)}
                    </>
                ) : (
                    <Typography color={'text.secondary'}>
                        {comment.text}
                    </Typography>
                )}
            </Tag.CommentMainParteA>

            <Tag.CommentMainParteA sx={{ gap: 2, width: '100%', color: 'text.secondary' }} diretion={'flex-start'} >
                <Tag.CommentMainParteA>
                    <ThumbUpOffAlt />
                    {comment.likes}
                </Tag.CommentMainParteA>
                <Stack sx={{
                    borderRight: Root.border,
                    height: '1rem',
                    width: '1px',
                }} />
                <Stack sx={{
                    fontWeight: 800
                }}>
                    Replay
                </Stack>
            </Tag.CommentMainParteA>
        </Tag.CommentMainTag>
    )
}