import { useContext } from "react";
import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";
import { BoxMain, ContainerGlobal, ContainerTasks, MyButton, MyFooter } from "../../components/Global/Styles/styles";
import { AuthContext } from "../../authcontext";

export const Community = () => {
    const { user } = useContext(AuthContext);
    return (
        <ContainerTasks>
            <BoxMain
                border={true} sx={{ padding: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Community</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">User Display Name:</Typography>
                        <Typography>{user.name}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">User UID:</Typography>
                        <Typography>{user.id}</Typography>
                    </Grid>
                </Grid>
         
            </BoxMain>
        </ContainerTasks>
    );
};
