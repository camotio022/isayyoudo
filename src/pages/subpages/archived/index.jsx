import * as React from 'react';
import { CardTaskMacthes, ContainerTasks } from "../../../components/Global/Styles/styles"
import { TaskCard } from '../../../components/cardTask/index.jsx'
import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { db } from "../../../firebaseConfig.js"
import { taskStatusBgcolor, taskStatusColors } from "../../createTasks/quirys/taskStatus.js"
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { CardTaskMobile } from '../../../components/CardTaskMobile/index.jsx';
export const ArchivedTasks = () => {
    const matches = useMediaQuery('(min-width:1050px)');
    const mobile = useMediaQuery('(max-width:600px)');
    const [tasks, setTasks] = useState([])
    const [openMoreInfo, setOpenMoreInfo] = useState(false);
    const [task, setTask] = useState({})
    function handleClick() {
        setOpenMoreInfo(false);
    }
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
            const tempTasks = snapshot.docs
                .filter(task => task.data().taskStatus === 'Archived')
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            setTasks(tempTasks);
        });
        return () => unsubscribe();
    }, []);
    if (matches) {
        return (
            <ContainerTasks>
                {tasks.length > 0 ? tasks
                    .map((task, index) => {
                        const colors = taskStatusColors[task.taskStatus];
                        return (
                            <TaskCard
                                key={task.taskId}
                                taskId={task.taskId}
                                task={task}
                                setTask={setTask}
                                name={task.title}
                                action={task.action}
                                assigner={task.assigner}
                                avatar={''}
                                assignerTo={task.assigned}
                                dateStarted={task.startDate}
                                dateDelivery={task.deliveryDate}
                                stateTask={task.taskStatus}
                                colorStatus={colors}
                                setOpenMoreInfo={setOpenMoreInfo}
                                openMoreInfo={openMoreInfo}
                            />
                        );
                    }) : (
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    No archived tasks
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Click the button below to add task!!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={'/createTask'}>
                                    <Button variant='contained' size="small">New Task</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Box>
                )}
            </ContainerTasks>
        )
    }
    return (

        <CardTaskMacthes mobile={mobile}>
            {tasks.map((task, index) => {
                const color = taskStatusColors[task.taskStatus]
                const backgroundColor = taskStatusBgcolor[task.taskStatus]
                const empty = taskStatusBgcolor.empty
                const emptyBgcolor = taskStatusColors.empty
                return (
                    <CardTaskMobile
                        tasks={tasks}
                        taskId={task.taskId}
                        task={task}
                        setTask={setTask}
                        color={color}
                        backgroundColor={backgroundColor}
                        empty={empty}
                        emptyBgcolor={emptyBgcolor}
                        mobile={mobile}
                    />
                )
            })}
        </CardTaskMacthes>

    )
}