import { useEffect, useState } from "react";
import { BoxMain, CardTaskMacthes, ContainerTasks } from "../../../components/Global/Styles/styles"
import { TaskCard } from "../../../components/cardTask";
import { statusTasks } from "../../../mask/statusTasksColors";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { taskStatusBgcolor, taskStatusColors } from "../../createTasks/quirys/taskStatus";
import { CardTaskMobile } from "../../../components/CardTaskMobile/index.jsx";
export const CompletedTasks = () => {
    const [tasks, setTasks] = useState([])
    const matches = useMediaQuery('(min-width:1300px)');
    const mobile = useMediaQuery('(max-width:380px)');
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
            const timesTempTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            const completedTasks = timesTempTasks.filter(t => t.taskStatus === "Completed")
            setTasks(completedTasks);
        });
        return () => unsubscribe();
    }, []);
    if (matches) {
        return (
            <ContainerTasks>
                {tasks
                    .map((task, index) => {
                        const color = taskStatusColors[task.taskStatus]
                        return (
                            <TaskCard
                                key={index}
                                name={task.title}
                                action={task.typeCollection}
                                assigner={task.assigner}
                                avatar={''}
                                assignerTo={'SnowManLabs'}
                                dateStarted={task.startDate}
                                dateDelivery={task.deliveryDate}
                                stateTask={task.taskStatus}
                                colorStatus={color}
                            />
                        );
                    })}
            </ContainerTasks>
        )
    }
    return (
        <>
            <CardTaskMacthes mobile={mobile}>
                {tasks.map((task, index) => {
                    const color = taskStatusColors[task.taskStatus]
                    const backgroundColor = taskStatusBgcolor[task.taskStatus]
                    const empty = taskStatusBgcolor.empty
                    const emptyBgcolor = taskStatusColors.empty
                    return (
                        <CardTaskMobile
                            taskId={task.taskId}
                            task={task}
                            color={color}
                            backgroundColor={backgroundColor}
                            empty={empty}
                            emptyBgcolor={emptyBgcolor}
                            mobile={mobile}
                        />
                    )
                })}
            </CardTaskMacthes>
        </>
    )
}