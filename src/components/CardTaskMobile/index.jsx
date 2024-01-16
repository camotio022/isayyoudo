import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Grid, MenuItem, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { Root } from "../Global/Root/root_styles";
import { avatars } from "./avatars";
import *  as Tag from './index.js'
import { taskStatusBgcolor, taskStatusColors } from "../../pages/createTasks/quirys/taskStatus";
import { DescriptionsAndComments } from "../DescriptionsAndComments";
import { useState } from "react";
import { TaskDetailed } from "../TaskDetailed";
import { MyButton } from "../Global/Styles/styles.jsx";
import { Circle, Collections, PlaylistAddCheck } from "@mui/icons-material";
import { BullPoint } from "../Bull/index.jsx";
const SectionsItems = ({
    one, two, backgroundColor, color, bull
}) => {
    return (
        <Tag.MenuRadiusItem backgroundColor={backgroundColor}>
            <Tag.MuiTypography>
                {one}
            </Tag.MuiTypography>
            <Tag.MuiTypography sx={{ color: color ? color : Root.black }} >
                {bull && <Circle sx={{ fontSize: 8, mr: 1 }} />}{two}
            </Tag.MuiTypography>
        </Tag.MenuRadiusItem>
    )
}
export const CardTaskMobile = (
    {
        tasks,
        taskId,
        color,
        backgroundColor,
        mobile,
        emptyBgcolor,
        task,
        empty,
        setTask,
    }
) => {
    const [openMoreInfo, setOpenMoreInfo] = useState(false);
    const firstThreeItems = avatars.slice(0, 6);
    const threePoints = {
        width: '160px',
        height: mobile ? '60px' : '120px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        overflow: 'hidden',
        lineHeight: 1.3,
        fontWeight: 900
    }

    const handleClick = () => {
        setTask(task)
        setOpenMoreInfo(!openMoreInfo)
    }
    const checkKey = (key) => {
        return key ? key : 'Empety'
    }
    const calculateExecutionDays = (start, delivery) => {
        const startDate = new Date(start);
        const deliveryDate = new Date(delivery);
        if (isNaN(startDate) || isNaN(deliveryDate)) {
            return false;
        }
        const timeDifference = deliveryDate - startDate;
        const executionDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return executionDays;
    };
    const [open, setOPen] = useState(false)
    return (
        <>
            <Grid item xs={8} sx={{
                width: mobile ? '90%' : 300,
                height: mobile ? 270 : 270,
                cursor: 'pointer',
                boxShadow: Root.boxShadow,
                padding: 1.2
            }}>
                <Tag.Menus>
                    <Tag.MuiTypography>
                        {checkKey(task.startDate)}
                    </Tag.MuiTypography>
                    <Tag.MuiTypography>
                        {checkKey(task.assigner)}
                    </Tag.MuiTypography>
                </Tag.Menus>
                <Divider sx={{ bgcolor: color ? color : emptyBgcolor }} />
                <Tooltip onClick={handleClick} title={'Click para ver mais informações dessa tarefa!!'} >
                    <Tag.MenuItems >
                        <Box>
                            <Tag.MenuStack>
                                <PlaylistAddCheck sx={{ color: Root.black }} />
                                <Tag.MuiTypography
                                    fontWeight={"900"}
                                    color={Root.black}
                                >
                                    {checkKey(task.typeCollection)}
                                </Tag.MuiTypography>
                            </Tag.MenuStack>
                        </Box>
                        <MyButton
                            colorsTask={
                                color ? color : taskStatusColors.empty
                            }
                            backgroundColor={
                                backgroundColor ? backgroundColor : taskStatusBgcolor.empty}
                        >
                            {checkKey(task.taskStatus)}
                        </MyButton>
                    </Tag.MenuItems>
                </Tooltip>
                <Tooltip onClick={() => (
                    setOPen(true)
                )} title={'Click para ver mais informações sobre comentários e tarefas!!'} >
                    <Tag.MuiTypography sx={{
                        height: '3rem',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}>
                        {checkKey(task.title)}
                    </Tag.MuiTypography>
                    <SectionsItems
                        backgroundColor={true}
                        one={'Start Date'}
                        two={checkKey(task.startDate)}
                    />
                    <SectionsItems
                        backgroundColor={false}
                        one={'Delivery Date'}
                        two={checkKey(task.deliveryDate)}
                    />
                    <SectionsItems
                        backgroundColor={true}
                        one={'Assigner'}
                        two={checkKey(task.assigner)}
                    />
                    <SectionsItems
                        backgroundColor={false}
                        one={'Assigned'}
                        two={checkKey(task.assigned)}
                    />
                    <SectionsItems
                        bull={true}
                        backgroundColor={true}
                        one={'Delivered Status'}
                        two={checkKey(task.taskStatus)}
                        color={color ? color : taskStatusColors.empty}
                    />
                </Tooltip>
                {open && <DescriptionsAndComments setOPen={setOPen} />}
                <TaskDetailed
                    taskId={task.taskId}
                    open={openMoreInfo}
                    setOpenMoreInfo={setOpenMoreInfo}
                    handleClick={handleClick}
                    task={task}
                />
            </Grid>

        </>
    )
}