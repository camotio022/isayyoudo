
import { sections } from "./components/sections";
import * as React from 'react'
import *as T from './styles/index'
import Typography from '@mui/material/Typography'
import {
    Stack,
    Paper,
    AppBar,
} from '@mui/material'
import { validarEmail } from './components/emailValidator'
import { MyTextField } from "../../components/Textfied";
import { useState } from "react";
import { Person, RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import { CardGalery } from "./components/galery";
import { Baseboard } from "./components/baseboard";
import { DialogError } from "../../components/Dialog";
import { LogoPage } from "../../components/Logo";
import { IsForgotPassword } from "../IForgotMyPassword";
import { BoxMain, MyButton } from "../../components/Global/styles/styles";
import { useContext } from "react";
import { AuthContext } from "../../authcontext/index";
export const Login = () => {
    const {loginWithEmailAndPassword } = useContext(AuthContext)
    const [isPassword, setIsPassword] = useState(false)
    const [canClick, setCanClick] = useState(false)
    const [isForgot, setIsForgot] = useState(false)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const handleClose = () => {
        setOpen(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((oldData) => {
            const updatedData = { ...oldData, [name]: value };
            if (!updatedData.email || !updatedData.password) {
                setCanClick(false);
            } else {
                setCanClick(true);
            }
            return updatedData;
        });
    };
    const Login = () => {
        const email = data.email;
        const password = data.password
        if (validarEmail({ email })) {
            loginWithEmailAndPassword(email, password)
        } else {
            setOpen(true);
            setMessage("O email é inválido.");
        }
    }
    return (
        <T.StyledContainer
            container
            component="main"
        >
            <CardGalery />
            <T.GridMiniMain
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <LogoPage />
                {isForgot ?
                    <IsForgotPassword />
                    : <BoxMain>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <T.GridMapTextfield
                            component="div"
                            noValidate
                        >
                            {sections?.map((section, index) => {
                                return (
                                    <MyTextField
                                        key={index}
                                        label={section.label}
                                        name={section.name}
                                        type={section.name === 'password' ? (isPassword ? 'text' : 'password') : section.type}
                                        value={data[section.name]}
                                        icon={section.icon && <span style={{ zIndex: 1 }}>
                                            {isPassword ?
                                                <RemoveRedEye onClick={() => setIsPassword(!isPassword)} />
                                                : <VisibilityOff onClick={() => setIsPassword(!isPassword)} />
                                            }
                                        </span>}
                                        onChange={(value) => handleChange({ target: { name: section.name, value } })}
                                    />
                                );
                            })}
                            <MyButton
                                onClick={Login}
                                fullWidth
                                variant={canClick ? "contained" : "disabled"}
                                startIcon={<Person />}
                            >
                                {canClick ? "Sign In" : "Can't log in"}
                            </MyButton>
                            <Baseboard setIsForgot={setIsForgot} />
                        </T.GridMapTextfield>
                    </BoxMain>}
            </T.GridMiniMain>
            <DialogError
                open={open}
                handleClose={handleClose}
                message={message}
            />
        </T.StyledContainer>
    )
}