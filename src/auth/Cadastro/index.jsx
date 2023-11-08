
import { sectionsSinup } from "./components/sections";
import { MyTextField } from "../../components/Textfied";
import { PersonAdd, RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import { Fragment, useState, useEffect } from "react";
import *as T from './Styles/index'
import { CardGalery } from "../Login/components/galery";
import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { LogoPage } from "../../components/Logo";
import { DialogError } from "../../components/Dialog";
import { validateForm } from "./components/rules";
import { BoxMain, MyButton, MyLink } from "../../components/Global/Styles/styles";
import { add_users } from "../../api/Users/addUsers.js";
import { get_users } from "../../api/Users/getUsers.js";

export const Cadastro = () => {
    const [isPassword, setIsPassword] = useState(false)
    const [canClick, setCanClick] = useState(false)
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("")
    const [progress, setProgress] = useState(false)
    const [open, setOpen] = useState(false)
    const [users, setUsers] = useState([])
    const [data, setData] = useState({
        name: '',
        number: '',
        email: '',
        password: '',
        confirmpassword: '',
    })
    useEffect(() => {
        const getUsers = async () => {
            try {
                const users = await get_users.user.get()
                setUsers(users)
            } catch (e) {
                console.error(e)
            }
        }
        getUsers()
        console.log(users)
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((oldData) => {
            const updatedData = { ...oldData, [name]: value };
            const validationErrors = validateForm(updatedData);
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length === 0) {
                setCanClick(true);
            } else {
                setCanClick(false);
            }
            return updatedData;
        });
    };
    const handleClose = () => {
        setOpen(false)
    }
    const creteUser = async () => {
        try {
            setProgress(true);
            const response = await add_users.user.post(data)
            console.log(response)
            setProgress(!progress)
        } catch (err) {
            console.error(err)
            setMessage(err.message);
            setOpen(true);
            setProgress(false);
        }
    };
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
                {progress ?
                    <Fragment>
                        <Box sx={{ width: '40%' }}>
                            <LinearProgress />
                            Cadastrando...
                        </Box>
                        <MyButton onClick={() => setProgress(!progress)} sx={{ width: 'auto', mt: 4 }}>
                            Desistir
                        </MyButton>
                    </Fragment>
                    :
                    <BoxMain
                    >
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <T.GridMapTextfield
                            component="div"
                            noValidate
                        >
                            {sectionsSinup?.map((section, index) => {
                                return (
                                    <MyTextField
                                        key={index}
                                        label={section.label}
                                        name={section.name}
                                        inputProps={{ maxLength: section.maxLength }}
                                        type={
                                            section.name === 'password'
                                                ||
                                                section.name === 'confirmpassword' ?
                                                (isPassword ? 'text' : 'password') : section.type
                                        }
                                        value={data[section.name]}
                                        icon={section.icon && <span style={{ zIndex: 1 }}>
                                            {isPassword ?
                                                <RemoveRedEye onClick={() => setIsPassword(!isPassword)} />
                                                : <VisibilityOff onClick={() => setIsPassword(!isPassword)} />
                                            }
                                        </span>}
                                        onChange={(value) => handleChange({ target: { name: section.name, value } })}
                                        error={errors[section.name] || ''}
                                    />
                                );
                            })}
                            {canClick ? <MyButton
                                onClick={creteUser}
                                variant={canClick ? "contained" : "disabled"}
                                startIcon={<PersonAdd />}
                            >
                                Sign Up
                            </MyButton> : "Can't sign up"}
                            <MyLink href="/">I already have an account on iSayYouDo</MyLink>
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