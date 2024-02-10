import * as React from 'react';
import * as Tag from './styles/index.js'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, InputAdornment, Stack, TextField } from '@mui/material';
import { Close, Google, GroupAdd, RemoveRedEye, Visibility, VisibilityOff } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles.jsx';
import { MyButton } from '../Global/Styles/styles.jsx';
import { LogoPage } from '../Logo/index.jsx';
import { AuthContext } from '../../authcontext/index.jsx';
import { useContext } from 'react';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export const AddAcounts = () => {
    const auth = getAuth()
    const [users, setUsers] = useState([])
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isPassword, setIsPassword] = useState(false);
    const { loginWithEmailAndPassword, loginWithGoogle, setOpenAddAccounts } = useContext(AuthContext)
    const LoginPassword = async (type) => {
        if (!email || !password) return;
        try {
            let userCredential;
            const existThisUser = users.find((user) => user.email === email);

            if (existThisUser) {
                alert('Este usuário já está adicionado nesta seção de login. Por favor, tente outro usuário!');
            }
            userCredential = await signInWithEmailAndPassword(auth, email, password);
            users.push(userCredential.user);
            localStorage.setItem('users', JSON.stringify(users));
            return;
        } catch (error) {
            if (type === 'addAccounts') {
                alert(error.message || 'Ocorreu um erro ao fazer login.');
            }
        }
    }
    return (
        <Tag.MuiStack>
            <Tag.MuiContainer component="main" maxWidth="xs">
                <Tag.MuiClose onClick={() => setOpenAddAccounts(false)}>
                    <Close />
                </Tag.MuiClose>
                <LogoPage sx={
                    {
                        height: '100px',
                        width: '180px',
                        marginTop: 4
                    }
                } />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold' }} mb={2}>
                        Sign new account
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size='small'
                                name="firstName"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                                type='email'
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size='small'
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                fullWidth
                                type={isPassword ? 'password' : 'text'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            {isPassword ? <Visibility
                                                onClick={() => setIsPassword(!isPassword)
                                                } /> : <VisibilityOff
                                                onClick={() => setIsPassword(!isPassword)
                                                } />}
                                        </InputAdornment>
                                    )
                                }}
                                label="Password" />
                        </Grid>
                    </Grid>
                    <MyButton
                        onClick={() => LoginPassword('addAccounts')}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={<GroupAdd />}
                    >
                        Add new account
                    </MyButton>
                    or
                    <MyButton
                        onClick={() => loginWithGoogle('addAcconts')}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                        colorstask={Root.color_button}
                        bg={Root.white}
                        startIcon={<Google />}
                    >
                        Add new account with google
                    </MyButton>
                </Box>
            </Tag.MuiContainer>

        </Tag.MuiStack>
    )
}