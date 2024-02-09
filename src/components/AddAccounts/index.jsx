import * as React from 'react';
import * as Tag from './styles/index.js'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { Google, GroupAdd } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles.jsx';
import { MyButton } from '../Global/Styles/styles.jsx';
import { LogoPage } from '../Logo/index.jsx';
import { AuthContext } from '../../authcontext/index.jsx';
import { useContext } from 'react';
import { useState } from 'react';

export const AddAcounts = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { loginWithEmailAndPassword } = useContext(AuthContext)
    const LoginPassword = async (type) => {
        await loginWithEmailAndPassword(email, password, type)
    }
    return (
        <Tag.MuiStack>
            <Tag.MuiContainer component="main" maxWidth="xs">
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