import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { Root } from "../Global/Root/root_styles";
import { avatars } from "./avatars";
import { BullPoint } from "../Bull";
export const CardTaskMobile = (
    {
        taskId,
        color,
        backgroundColor,
        mobile,
        emptyBgcolor,
        task,
        empty,
        setTask,
        openMoreInfo,
        setOpenMoreInfo,
    }
) => {
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
    const calculateExecutionDays = () => {
        const startDate = new Date(task?.dateStarted);
        const deliveryDate = new Date(task?.dateDelivery);
        if (isNaN(startDate) || isNaN(deliveryDate)) {
            return false;
        }
        const timeDifference = deliveryDate - startDate;
        const executionDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return executionDays;
    };
    return (
        <>
            <Tooltip title={'Click para ver mais informações dessa tarefa!!'}>
                <Grid onClick={handleClick} item xs={8} sx={{
                    width: mobile ? '90%' : 278,
                    height: mobile ? 138 : 200,
                    cursor: 'pointer',
                    boxShadow: Root.boxShadow,
                }}>
                    <Card variant="outlined" sx={{
                        height: '100%',
                        borderRadius: 'none',
                        border: 'none',
                        mt: 1
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
                                    sx={threePoints}
                                    variant="div"
                                    component="div"
                                >
                                    {task.title ? task?.title : 'Empty'}
                                </Typography>
                                <Typography mt={1} color="green">
                                    {task.typeCollection ? task.typeCollection : 'Empty'}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: '160px',
                                    height: mobile ? '40px' : '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: color ?
                                    color :
                                    empty,
                                    fontSize: '2.5rem',
                                    fontWeight: 900
                                }}
                                variant="div"
                                component="div"
                            >
                                {calculateExecutionDays()}
                            </Typography>
                        </Stack>
                        <CardActions sx={{ flexDirection: 'row' }}>
                            <Button
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
                </Grid>
            </Tooltip>
        </>
    )
}