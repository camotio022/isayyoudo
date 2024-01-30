import * as React from 'react';
import { CardTaskMacthes, ContainerTasks } from "../../../components/Global/Styles/styles"
import { TaskCard } from '../../../components/cardTask/index.jsx'
import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebaseConfig.js"
import { taskStatusBgcolor, taskStatusColors } from "../../createTasks/quirys/taskStatus.js"
import { useMediaQuery } from '@mui/material';
import { CardTaskMobile } from '../../../components/CardTaskMobile/index.jsx';
import { NoTasksFromThisState } from '../../../components/NoTaskThisStates/index.jsx';
export const TasksClosed = () => {
    const matches = useMediaQuery('(min-width:1050px)');
    const mobile = useMediaQuery('(max-width:600px)');
    const [tasks, setTasks] = useState([])
    const [openMoreInfo, setOpenMoreInfo] = useState(false);
    const [task, setTask] = useState({})
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
            const tempTasks = snapshot.docs
                .filter(task => task.data().taskStatus === 'Close')
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
                    <NoTasksFromThisState routeTasks={'Closed'} />
                )}
            </ContainerTasks>
        )
    }
    return (

        <CardTaskMacthes mobile={mobile}>
            {tasks.length > 0 ?
                tasks.map((task, index) => {
                    const color = taskStatusColors[task.taskStatus]
                    const bg = taskStatusBgcolor[task.taskStatus]
                    const empty = taskStatusBgcolor.empty
                    const emptyBgcolor = taskStatusColors.empty
                    return (
                        <CardTaskMobile
                        key={task.taskId}
                            tasks={tasks}
                            taskId={task.taskId}
                            task={task}
                            setTask={setTask}
                            color={color}
                            bg={bg}
                            empty={empty}
                            emptyBgcolor={emptyBgcolor}
                            mobile={mobile}
                        />
                    )
                }) : (
                    <NoTasksFromThisState routeTasks={'Closed'} />
                )}
        </CardTaskMacthes>

    )
}