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
        width: '250px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
    const handleClick = () => {
        setTask(task)
        setOpenMoreInfo(!openMoreInfo)
    }
    return (
        <>
            <Tooltip title={'Click para ver mais informações dessa tarefa!!'}>
                <Grid onClick={handleClick} item xs={8} sx={{
                    width: mobile ? '320px' : 275,
                    height: 150,
                    cursor: 'pointer',
                    boxShadow: Root.boxShadow

                }}>
                    <Card variant="outlined" sx={{
                        height: '100%',
                        borderRadius: 'none',
                        border: 'none'
                    }}>
                        <CardContent>
                            <Typography
                                sx={threePoints}
                                variant="h5"
                                component="div"
                            >
                                {task.title ? task?.title : 'Empty'}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {task.typeCollection ? task.typeCollection : 'Empty'}
                            </Typography>
                        </CardContent>
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