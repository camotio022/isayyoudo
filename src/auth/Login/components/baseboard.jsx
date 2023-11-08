import { Google } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { Fragment } from "react"
import *as T from '../styles/index'
import { MyButton, MyLink } from "../../../components/Global/styles/styles"
import { useContext } from "react"
import { AuthContext } from "../../../authcontext/index"

export const Baseboard = ({
    setIsForgot
}) => {
    const { loginWithGoogle } = useContext(AuthContext)
    return (
        <Fragment>
            <Typography variant="h6">
                or
            </Typography>
            <br></br>
            <MyButton
                onClick={loginWithGoogle}
                startIcon={<Google />}
                variant="contained"
            >
                Login with google
            </MyButton>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%', gap: 2
            }}>
                <T.MiniButton onClick={() => setIsForgot(true)} variant="body2">
                    Hi, I forgot my password
                </T.MiniButton>
                <MyLink href="/signup" variant="body2">
                    {"register on iSayYoDo?"}
                </MyLink>
            </Box>
        </Fragment>
    )
}