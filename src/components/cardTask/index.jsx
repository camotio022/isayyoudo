import { Avatar, Box, Button, Popover, Stack, Tooltip, Typography } from '@mui/material'
import * as T from './styles/index.js'
import { Assignment, Check, Circle, Event, EventAvailable, MarkUnreadChatAlt, MoreHoriz } from '@mui/icons-material'
import { Root } from '../Global/Root/root_styles.jsx'

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
}) => {
    return (
        <T.TabsMain>
            <Assignment sx={{ margin: '1rem', color: Root.gray_desfius }} />
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
                        {missingTime}
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
                    <T.CircleStateTask color={colorStatus}>
                    </T.CircleStateTask>
                    {stateTask}
                </T.BoxTypeButtonMain>
                <MarkUnreadChatAlt />
                <MoreHoriz />
            </T.LastInfosTask>
        </T.TabsMain>
    )
}