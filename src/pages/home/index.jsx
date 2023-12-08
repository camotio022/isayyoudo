import { useContext } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { BoxMain, ContainerGlobal } from "../../components/Global/Styles/styles";
import { AuthContext } from "../../authcontext/index";
import { Link, useNavigate } from "react-router-dom";
import { TepsMenuTasks } from "../../components/Teps/index.jsx";
import { TaskCard } from "../../components/cardTask/index.jsx";
export const HomePage = () => {
    const location = useNavigate()
    const { user } = useContext(AuthContext);
    return (
        <ContainerGlobal justifyContent={'flex-start !important'}>
            <TepsMenuTasks />
            <TaskCard/>
        </ContainerGlobal>
    );
};
