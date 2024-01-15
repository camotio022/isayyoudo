import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { Root } from "../Global/Root/root_styles";
import { avatars } from "./avatars";
import { taskStatusBgcolor } from "../../pages/createTasks/quirys/taskStatus";
import { DescriptionsAndComments } from "../DescriptionsAndComments";
import { useState } from "react";
import { TaskDetailed } from "../TaskDetailed";
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
            <Tooltip title={'Click para ver mais informações dessa tarefa!!'} >
                <Grid item xs={8} sx={{
                    width: mobile ? '90%' : 278,
                    height: mobile ? 138 : 200,
                    cursor: 'pointer',
                    boxShadow: Root.boxShadow,
                }}>
                    <Card variant="outlined" sx={{
                        height: '100%',
                        borderRadius: 'none',
                        border: 'none',
                    }}>
                        <Stack sx={{
                            display: 'flex',
                            alignItems: 'space-beetwen',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            width: '95%'
                        }}>
                            <Box ml={1}>
                                <Typography
                                    onClick={() => (
                                        setOPen(true)
                                    )}
                                    sx={threePoints}
                                    variant="div"
                                    component="div"
                                >
                                    {task.title ? task?.title : 'Empty'}
                                </Typography>
                                <Typography sx={{ textTransform: 'uppercase' }} mt={1} color={'text.secondary'}>
                                    {task.typeCollection ? task.typeCollection : 'Empty'}
                                </Typography>
                            </Box>
                            {calculateExecutionDays(task.startDate, task.deliveryDate) &&
                                <Stack
                                    sx={{
                                        width: '160px',
                                        height: mobile ? '50px' : '120px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color:
                                            Root.color_button,
                                        fontSize: '1.5rem',
                                        fontWeight: 600
                                    }}
                                    variant="div"
                                    component="div"
                                >
                                    <Box>
                                        {calculateExecutionDays(task.startDate, task.deliveryDate)}
                                    </Box>
                                    <Box sx={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600
                                    }}>
                                        Days Delivery
                                    </Box>
                                </Stack>
                            }
                        </Stack>
                        <CardActions sx={{ flexDirection: 'row' }}>
                            <Button
                                onClick={handleClick}
                                sx={{
                                    bgcolor: backgroundColor ?
                                        backgroundColor :
                                        empty
                                }} size="small">
                                {task.taskStatus ? task.taskStatus : 'Empty'}
                            </Button>
                            <Stack direction="row" spacing={-1.5} alignItems="center">
                                {firstThreeItems.map((avatar) => (
                                    <>
                                        <Avatar sx={{ width: 30, height: 30 }} key={avatar.id} src={avatar.src} alt={`Avatar ${avatar.id}`} />
                                    </>
                                ))}
                            </Stack>
                        </CardActions>
                    </Card>
                    {open && <DescriptionsAndComments setOPen={setOPen} />}
                    <TaskDetailed
                        taskId={task.taskId}
                        open={openMoreInfo}
                        setOpenMoreInfo={setOpenMoreInfo}
                        handleClick={handleClick}
                        task={task}
                    />
                </Grid>
            </Tooltip>
        </>
    )
}