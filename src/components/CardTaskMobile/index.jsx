import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
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
                width: mobile ? '320px': 275,
                height: 'auto',
                bgcolor: color ? color : emptyBgcolor,
                cursor: 'pointer',
            }}>
                <Card variant="outlined" sx={{
                    borderRadius: '1rem'
                }}>
                    <CardContent>
                        <Typography
                            sx={{ width: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                            variant="h5"
                            component="div"
                        >
                            {task.title ? task?.title : 'Empty'}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {task.typeCollection}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button sx={{ bgcolor: backgroundColor ? backgroundColor : empty }} size="small">{task.taskStatus ? task.taskStatus : 'Empty'}</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}