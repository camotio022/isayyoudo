import { useContext } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { BoxMain, ContainerGlobal } from "../../components/Global/Styles/styles";
import { AuthContext } from "../../authcontext/index";
import { Link, useNavigate } from "react-router-dom";
import { TepsMenuTasks } from "../../components/Teps/index.jsx";
import { TaskCard } from "../../components/cardTask/index.jsx";
import { tasks } from "../../mask/tasks.js";
export const HomePage = () => {
    const location = useNavigate()
    const { user } = useContext(AuthContext);
    return (
        <ContainerGlobal sx={{
            display:'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '10%',
            paddingTop:'15%',
            overflowY:'auto !important',
        }}>
            <TepsMenuTasks />
            {tasks.map((task, index) => {
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
                    />
                )
            })}

        </ContainerGlobal>
    );
};
