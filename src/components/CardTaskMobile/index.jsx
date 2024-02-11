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
    one, two, bg, color, bull
}) => {
    return (
        <Tag.MenuRadiusItem bg={bg}>
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
        bg,
        mobile,
        emptyBgcolor,
        task,
        setTask,
    }
) => {
    const [openMoreInfo, setOpenMoreInfo] = useState(false);
    const [open, setOPen] = useState(false)
    const firstThreeItems = avatars.slice(0, 6);
    const threePoints = {
        width: '160px',
        height: mobile === 'true' ? '60px' : '120px',
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

    return (
        <>
            <Grid key={taskId} item xs={8} sx={{
                width: mobile === 'true' ? '90%' : 300,
                height: mobile === 'true' ? 270 : 270,
                cursor: 'pointer',
                boxShadow: Root.boxS,
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
                <Tooltip title={'Click para ver mais informações dessa tarefa!!'} >
                    <div onClick={handleClick}>
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
                                colorstask={
                                    color ? color : taskStatusColors.empty
                                }
                                bg={
                                    bg ? bg : taskStatusBgcolor.empty}
                            >
                                {checkKey(task.taskStatus)}
                            </MyButton>
                        </Tag.MenuItems>
                    </div>

                </Tooltip>

                <Tooltip title={'Click para ver mais informações sobre comentários e tarefas!!'} >
                    <div onClick={() => (
                        setOPen(true)
                    )}>
                        <Tag.MuiTypography sx={{
                            height: '3rem',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                        }}>
                            {checkKey(task.title)}
                        </Tag.MuiTypography>
                        <SectionsItems
                            bg={true}
                            one={'Start Date'}
                            two={checkKey(task.startDate)}
                        />
                        <SectionsItems
                            bg={false}
                            one={'Delivery Date'}
                            two={checkKey(task.deliveryDate)}
                        />
                        <SectionsItems
                            bg={true}
                            one={'Assigner'}
                            two={checkKey(task.assigner)}
                        />
                        <SectionsItems
                            bg={false}
                            one={'Assigned'}
                            two={checkKey(task.assigned)}
                        />
                        <SectionsItems
                            bull={true}
                            bg={true}
                            one={'Delivered Status'}
                            two={checkKey(task.taskStatus)}
                            color={color ? color : taskStatusColors.empty}
                        />

                    </div>
                </Tooltip>
                {openMoreInfo && <TaskDetailed
                    taskId={task.taskId}
                    open={openMoreInfo}
                    setOpenMoreInfo={setOpenMoreInfo}
                    handleClick={handleClick}
                    task={task ? task : {}}
                />}
                {open && <DescriptionsAndComments
                    color={color}
                    bg={bg}
                    taskId={task.taskId}
                    task={task}
                    setOPen={setOPen}
                />}
            </Grid>
        </>
    )
}