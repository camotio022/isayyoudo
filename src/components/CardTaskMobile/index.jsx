import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Paper, Stack, Typography } from "@mui/material";
import { Root } from "../Global/Root/root_styles";
import { avatars } from "./avatars";
export const CardTaskMobile = (
    {
        taskId,
        color,
        backgroundColor,
        mobile,
        emptyBgcolor,
        task,
        empty
    }
) => {

    return (
        <>
            <Grid item xs={8} sx={{
                width: mobile ? '320px' : 275,
                height: 150,
                bgcolor: color ? color : emptyBgcolor,
                cursor: 'pointer',
                border: Root.border
            }}>
                <Card variant="outlined" sx={{
                    height: '100%',
                    borderRadius: '1rem',
                    border: 'none'
                }}>
                    <CardContent>
                        <Typography
                            sx={{
                                width: '250px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}
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
                            {avatars.map((avatar) => (
                                <Avatar sx={{width: 30, height: 30}} key={avatar.id} src={avatar.src} alt={`Avatar ${avatar.id}`} />
                            ))}
                        </Stack>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}