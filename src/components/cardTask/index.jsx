import { Avatar, Box, Button, Popover, Stack, Tooltip, Typography } from '@mui/material'
import * as T from './styles/index.js'
import { Assignment, Check, Circle, Event, EventAvailable, MarkUnreadChatAlt, Message, MoreHoriz } from '@mui/icons-material'
import { Root } from '../Global/Root/root_styles.jsx'
import { CircularRedAlert } from '../CircularRedAlert/index.jsx'
import { TaskDetailed } from '../TaskDetailed/index.jsx'

export const TaskCard = ({
    name,
    action,
    assigner,
    avatar,
    assignerTo,
    missingTime,
    dateStarted,
    dateDelivery,
    stateTask,
    colorStatus,
    setTask,
    task,
    setOpenMoreInfo,
    openMoreInfo,
    width,
    backgroundColor
}) => {
    function handleClick() {
        setTask(task);
        setOpenMoreInfo(!openMoreInfo);
    }
    const calculateExecutionDays = () => {
        const startDate = new Date(dateStarted);
        const deliveryDate = new Date(dateDelivery);
        if (isNaN(startDate) || isNaN(deliveryDate)) {
            return false;
        }
        const timeDifference = deliveryDate - startDate;
        const executionDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return executionDays;
    };
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}/${month}/${day}`;
        return formattedDate;
    }
    return (

        <T.TabsMain width={width} backgroundColor={backgroundColor}>
            <Assignment sx={{ margin: '1rem', color: colorStatus }} />
            <T.CircleStateTask color={colorStatus} sx={{
                position: 'absolute',
                ml: 4,
                mt: 2,
                boxShadow: "rgba(0, 0, 0, 0.90) 0px 3px 8px",
            }} />
            <T.TaskTitleButton>
                <T.TaskTitle>
                    {name}
                </T.TaskTitle>
                <T.Infos>
                    {action}
                </T.Infos>
            </T.TaskTitleButton>
            <T.TaskTitleButton>
                <T.TaskTitle>
                    {assigner}<br />
                    <T.TaskAssigner>
                        assigner
                    </T.TaskAssigner>
                </T.TaskTitle>
                <T.TaskMainHoverInfosDate>
                    <Stack color={Root.black}>Delivery:</Stack>
                    <T.TaskMainTooltip
                        title={
                            <T.TaskMainTooltipTagMain>
                                <T.TaskMainTooltipTagMainItem>
                                    <Circle fontSize='5px' style={{ marginRight: '4px' }} />
                                    {formatDate(dateStarted)}<br />Started date
                                </T.TaskMainTooltipTagMainItem>
                                <T.TaskMainTooltipTagMainItemBorderLeft>
                                </T.TaskMainTooltipTagMainItemBorderLeft>
                                <T.TaskMainTooltipTagMainItem>
                                    <Check fontSize='5px' style={{ marginRight: '4px' }} />
                                    {formatDate(dateDelivery)}<br />Estimated delivery
                                </T.TaskMainTooltipTagMainItem>
                            </T.TaskMainTooltipTagMain>
                        }
                        arrow
                        placement="top"
                    >
                        {calculateExecutionDays()} days
                    </T.TaskMainTooltip>
                </T.TaskMainHoverInfosDate>
            </T.TaskTitleButton>
            <T.LastInfosTask justifyContent={'center !important'}>
                <Avatar src={avatar}></Avatar>
                <T.TaskTitle>
                    {assignerTo}<br />
                    <T.TaskAssigner>
                        assigned to
                    </T.TaskAssigner>
                </T.TaskTitle>
            </T.LastInfosTask>
            <T.LastInfosTask>
                <T.BoxTypeButtonMain>
                    <T.CircleStateTask color={colorStatus} />
                    {stateTask}
                </T.BoxTypeButtonMain>
                <Stack position={'relative'}>
                    <Message />
                    <CircularRedAlert />
                </Stack>
                <MoreHoriz cursor={'pointer'} onClick={handleClick} />
            </T.LastInfosTask>
        </T.TabsMain>
    )
}