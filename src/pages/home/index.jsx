import { useContext } from "react";
import { ContainerTasks } from "../../components/Global/Styles/styles";
import { AuthContext } from "../../authcontext/index";
import {useNavigate } from "react-router-dom";
import { TaskCard } from "../../components/cardTask/index.jsx";
import { tasks } from "../../mask/tasks.js";
import { orange } from "@mui/material/colors";
import { Root } from "../../components/Global/Root/root_styles.jsx";
import { statusTasks } from "../../mask/statusTasksColors.js";
export const HomePage = () => {
    const location = useNavigate()
    const { user } = useContext(AuthContext);
    return (
        <ContainerTasks>
            {tasks.map((task, index) => {
                const colors = statusTasks[task.stateTask];
                return (
                    <TaskCard name={task.name}
                        action={task.action}
                        assigner={task.assigner}
                        avatar={''}
                        assignerTo={'SnowManLabs'}
                        missingTime={task.missingTime}
                        dateStarted={task.dateStarted}
                        dateDelivery={task.dateDelivery}
                        stateTask={task.stateTask}
                        colorStatus={colors}
                    />
                )
            })}

        </ContainerTasks>
    );
};
