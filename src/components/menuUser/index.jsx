import * as React from 'react';
import * as Tag from '../Teps/index.js'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button, Container, FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import { AddCardOutlined, Google, GroupAdd } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles.jsx';
import { MyButton } from '../Global/Styles/styles.jsx';
export const MenuUser = ({
    open, handleClose, anchorEl, user, handleChange, checked }) => {

    return (
        <React.Fragment>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Tag.AvatarPhoto src={user?.photoURL} /> {user?.displayName}
                </MenuItem>
                <Divider />
                <MenuItem sx={{':hover': {
                    color: Root.color_button,
                    backgroundColor: 'transparent',
                }}}>
                    <ListItemIcon sx={{':hover': {
                    color: Root.color_button
                }}}>
                        <GroupAdd />
                    </ListItemIcon>
                    Add new acount
                </MenuItem>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography mb={2}>
                            Sign new account
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    size='small'
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Email"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-password"
                                    size='small'
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type='password'
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <MyButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            startIcon={<GroupAdd/>}
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
                            startIcon={<Google/>}
                        >
                            Add new account with google
                        </MyButton>
                        
                    </Box>
                </Container>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings themes task future
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout disable
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}