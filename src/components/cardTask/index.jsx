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
    openMoreInfo
}) => {
    function handleClick() {
        setTask(task);
        setOpenMoreInfo(!openMoreInfo);
    }
    return (

        <T.TabsMain>
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
                                    {dateStarted}<br />Started date
                                </T.TaskMainTooltipTagMainItem>
                                <T.TaskMainTooltipTagMainItemBorderLeft>
                                </T.TaskMainTooltipTagMainItemBorderLeft>
                                <T.TaskMainTooltipTagMainItem>
                                    <Check fontSize='5px' style={{ marginRight: '4px' }} />
                                    {dateDelivery}<br />Estimated delivery
                                </T.TaskMainTooltipTagMainItem>
                            </T.TaskMainTooltipTagMain>
                        }
                        arrow
                        placement="top"
                    >
                        {missingTime} days
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
                <MoreHoriz cursor={'pointer'} onClick={handleClick}/>
            </T.LastInfosTask>
        </T.TabsMain>
    )
}