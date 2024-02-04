import { Stack } from "@mui/material"
import *as Tag from './styles/index'
import { Root } from "../Global/Root/root_styles"
import { Archive, Delete, Edit } from "@mui/icons-material"
import descriptionService from "../../api/descriptions/delete"
import commentService from "../../api/comments/delete"
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularWithValueLabel from "../Deletes"
import { useState } from "react"
export const MoreVertMenu = ({
    id,
    type,
    setOpenItemId

}) => {
    const [action, setAction] = useState(false);
    const trash = async (type) => {
        setAction(true);
        try {
            if (type === 'description') {
                await descriptionService.deleteDescription(id);
            } else {
                await commentService.deleteComment(id);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setAction(false);
            setOpenItemId(null);
        }
    }
    return (
        <Tag.Colpax>
            <Stack sx={action ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: Root.color_button,
                backgroundColor:
                    Root.white,
                minHeight: 100,
                minWidth: 100,
                gap: 2,
                padding: '16px',
            } : {
                color: Root.white,
                backgroundColor:
                    Root.color_button,

            }}>
                {!action && type && (<>
                    <Tag.item disableRipple>
                        <Edit />
                        {type === 'comment' ? 'Edit comment' : 'Edit description'}
                    </Tag.item>
                    <Tag.item>
                        <Archive />
                        {type === 'comment' ? 'Archived comment' : 'Archived description'}
                    </Tag.item>
                    <Tag.item onClick={() => trash(type)}>
                        <Delete />
                        Move to trash
                    </Tag.item>
                </>)}
                {action && (<><CircularWithValueLabel />
                    {type === 'comment' ? 'Deleting comment...' : 'Deleting description...'}
                </>)}
            </Stack>
        </Tag.Colpax>
    );
};
