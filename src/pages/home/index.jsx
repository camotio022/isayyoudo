import { useContext, useEffect, useState } from "react";
import { ContainerTasks } from "../../components/Global/Styles/styles";
import { AuthContext } from "../../authcontext/index";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "../../components/cardTask/index.jsx";
import { Root } from "../../components/Global/Root/root_styles.jsx";
import { statusTasks } from "../../mask/statusTasksColors.js";
import { TaskDetailed } from "../../components/TaskDetailed/index.jsx";
import { taskService } from "../../api/tasks/addTask.js";
import { taskStatusBgcolor, taskStatusColors } from "../createTasks/quirys/taskStatus.js";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";
export const HomePage = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({})
    const [openMoreInfo, setOpenMoreInfo] = useState(false)
    const location = useNavigate()
    const { user } = useContext(AuthContext);
    function handleClick() {
        setOpenMoreInfo(false);
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
            console.log('Snapshot Changes:', snapshot.docChanges());
            const timesTempTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTasks(timesTempTasks);
        });
        return () => unsubscribe();
    }, []);
    return (
        <ContainerTasks>
            {tasks
                .map((task, index) => {
                    const colors = taskStatusColors[task.taskStatus];
                    const backgroundColor = taskStatusBgcolor[task.taskStatus]
                    return (
                        <TaskCard
                            key={task.taskId}
                            taskId={task.taskId}
                            name={task.title}
                            action={task.action}
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
    );
};
