import { useEffect, useState } from "react";
import { CardTaskMacthes, ContainerTasks } from "../../components/Global/Styles/styles";
import { TaskCard } from "../../components/cardTask/index.jsx";
import { TaskDetailed } from "../../components/TaskDetailed/index.jsx";
import { taskStatusBgcolor, taskStatusColors } from "../createTasks/quirys/taskStatus.js";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";
import { useMediaQuery } from "@mui/material";
import { CardTaskMobile } from "../../components/CardTaskMobile/index.jsx";
export const HomePage = () => {
    const matches = useMediaQuery('(min-width:1300px)');
    const mobile = useMediaQuery('(max-width:380px)');
    const [task, setTask] = useState({})
    const [openMoreInfo, setOpenMoreInfo] = useState(false);
    function handleClick() {
        setOpenMoreInfo(false);
    }
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
            const timesTempTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTasks(timesTempTasks);
        });
        return () => unsubscribe();
    }, []);
    if (matches) {
        return (
            <ContainerTasks>
                {tasks
                    .map((task) => {
                        const colors = taskStatusColors[task.taskStatus];
                        const backgroundColor = taskStatusBgcolor[task.taskStatus]
                        return (
                            <TaskCard
                                key={task.taskId}
                                taskId={task.taskId}
                                name={task.title}
                                action={task.typeCollection}
                                assigner={task.assigner}
                                avatar={''}
                                assignerTo={'SnowManLabs'}
                                missingTime={task.missingTime}
                                dateStarted={task.startDate}
                                dateDelivery={task.deliveryDate}
                                stateTask={task.taskStatus}
                                colorStatus={colors}
                                setTask={setTask}
                                task={task}
                                openMoreInfo={openMoreInfo}
                                setOpenMoreInfo={setOpenMoreInfo}
                                backgroundColor={backgroundColor}
                            />
                        );
                    })}
                <TaskDetailed open={openMoreInfo} handleClick={handleClick} task={task} />
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
};
