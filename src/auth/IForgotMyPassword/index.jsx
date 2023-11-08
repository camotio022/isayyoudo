import { Person } from '@mui/icons-material'
import * as T from './styles/index'
import { MyTextField } from '../../components/Textfied'
import { Box, Grid, LinearProgress, TextField, Typography } from '@mui/material'
import { Fragment, useState } from 'react'
import { purple } from '@mui/material/colors'
import { BoxMain, MyButton, MyLink } from '../../components/Global/styles/styles'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { DialogError } from '../../components/Dialog'

export const IsForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [canClick, setCanClick] = useState(false);
    const [error, setError] = useState("")
    const [progress, setProgress] = useState(false)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState(null)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail(value);
        if (
            !value ||
            !value.includes("@") ||
            !value.includes(".com")
        ) {
            setError("Email não pode ser enviado, por favor insira o email válido")
            setCanClick(false);
        } else {
            setError("")
            setCanClick(true);

        }
    };
    const handleClose = () => {
        setOpen(false)
    }
    const handleResetPassword = async () => {
        try {
            setProgress(true);
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            setOpen(true);
            setMessage(`
                Um email de recuperação foi enviado para ${email}.
                Por favor, verifique sua caixa de entrada e siga as instruções.`
            );
            setProgress(false);
        } catch (error) {
            setProgress(false);
            setOpen(true);
            setMessage(error.message || 'Ocorreu um erro ao enviar o email de recuperação de senha.');
        }
    };


    return (
        <BoxMain>
            {progress ?
                <Fragment>
                    <Box sx={{ width: '60%' }}>
                        <LinearProgress />
                        Verificando o email...
                    </Box>
                    <MyButton onClick={() => setProgress(!progress)} sx={{ width: 'auto', mt: 4 }}>
                        Desistir
                    </MyButton>
                </Fragment> :
                <Fragment>
                    <Typography component="h1" variant="h5">
                        I forgot my password
                    </Typography>
                    <T.GridMapTextfield component="div" noValidate>
                        <Typography
                            sx={{ textAlign: 'left' }}
                            variant='body2'
                            color={'black'}
                        >
                            Welcome to our iSayYoDo password recovery screen!
                            Our priority is to keep your account safe and your data
                            protected. We understand that sometimes forgetting passwords is
                            a common occurrence, but it is also an opportunity to
                            reinforce the importance of password security.
                        </Typography>
                        <Grid item xs={12} lg={12} sx={{ mb: 1, width: '100%' }}>
                            <TextField
                                sx={{ position: 'relative', zIndex: 0, width: '100%' }}
                                label={"Email for password recovery"}
                                type={'email'}
                                name={'email'}
                                value={email}
                                icon={false}
                                onChange={(e) => handleChange(e)}
                            />
                            <span style={{ fontSize: '12px', color: purple[300] }}>{error}</span>
                        </Grid>
                        <MyButton
                            onClick={handleResetPassword}
                            fullWidth
                            variant={canClick ? "contained" : "disabled"}
                            startIcon={<Person />}
                        >
                            to recover
                        </MyButton>
                        <MyLink href='/'>
                            return to login
                        </MyLink>
                    </T.GridMapTextfield>
                </Fragment>}
            <DialogError
                handleClose={handleClose}
                message={message}
                open={open}>

            </DialogError>
        </BoxMain>
    )
}
