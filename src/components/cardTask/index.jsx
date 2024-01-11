import { Avatar, Box, Stack, } from '@mui/material'
import * as T from './styles/index.js'
import { Assignment, Check, Circle, Message, MoreHoriz } from '@mui/icons-material'
import { Root } from '../Global/Root/root_styles.jsx'
import { CircularRedAlert } from '../CircularRedAlert/index.jsx'
import useMediaQuery from '@mui/material/useMediaQuery';
import { taskService } from '../../api/tasks/addTask.js'
import { useEffect, useState } from 'react'

export const TaskCard = ({
    name,
    action,
    assigner,
    avatar,
    assignerTo,
    dateStarted,
    dateDelivery,
    stateTask,
    colorStatus,
    setTask,
    task,
    setOpenMoreInfo,
    openMoreInfo,
    width,
    backgroundColor,
    typeShowTask,
    taskId,
    tasks
}) => {
    const matches = useMediaQuery('(min-width:600px)');
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
    const deleteTask = async () => {
        const confirm = prompt('! Atensão você está entrando em uma ação que levara a exclução dessa tarefa, certeza que quer continuar?')
        if (confirm === 'sim') {
            try {
                await taskService.task.deleteTask(taskId)
            } catch (err) {
                alert(err)
            }
        }
    }
    return (
        <T.TabsMain showBorder={tasks?.length < 5} width={width} backgroundColor={false} onDoubleClick={deleteTask}>
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
                                    {dateStarted && typeShowTask === 'preview' ? formatDate(dateStarted) : dateStarted}<br />Started date
                                </T.TaskMainTooltipTagMainItem>
                                <T.TaskMainTooltipTagMainItemBorderLeft>
                                </T.TaskMainTooltipTagMainItemBorderLeft>
                                <T.TaskMainTooltipTagMainItem>
                                    <Check fontSize='5px' style={{ marginRight: '4px' }} />
                                    {dateStarted && typeShowTask === 'preview' ? formatDate(dateDelivery) : dateDelivery}<br />Estimated delivery
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
            {matches&&<>
            <T.LastInfosTask>
                <T.BoxTypeButtonMain width={width}>
                    <T.CircleStateTask color={colorStatus} />
                    {stateTask}
                </T.BoxTypeButtonMain>
                <Stack position={'relative'}>
                    <Message />
                    <CircularRedAlert />
                </Stack>
                <MoreHoriz cursor={'pointer'} onClick={handleClick} />
            </T.LastInfosTask></>}
        </T.TabsMain>
    )
}