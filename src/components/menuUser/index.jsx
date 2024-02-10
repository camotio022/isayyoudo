import * as React from 'react';
import * as Tag from '../Teps/index.js'
import * as TagMain from './styles/index.js'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { GroupAdd, SwapHoriz } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../authcontext/index.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const MenuUser = ({
    open, handleClose, anchorEl, user }) => {
    const { openAddAccounts,
        setOpenAddAccounts,
        logout,
    } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const handleOpen = () => {
        handleClose()
        setOpenAddAccounts(!openAddAccounts)
    }
    const newSignin = async (data, type) => {
        if (!data) return;
        localStorage.setItem('user', JSON.stringify(data));
        window.location.replace('/')
    }
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('users')) || [])
    }, [])
    console.log(users)
    return (
        <React.Fragment>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                            borderLeft: `1px solid ${Root.color_button}`,
                            borderTop: `1px solid ${Root.color_button}`,
                        },
                        border: `1px solid ${Root.color_button}`
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <TagMain.MuiItem onClick={handleClose}>
                    <Tag.AvatarPhoto src={user?.photoURL} /> {user?.displayName}
                </TagMain.MuiItem>
                <Divider sx={{ width: '90%', borderColor: Root.color_button, ml: '5%' }} />
                <TagMain.MuiItem onClick={handleClose}>
                    <ListItemIcon>
                        <SwapHoriz />
                    </ListItemIcon>
                    Switch account
                </TagMain.MuiItem>
                {users.map((account, index) => {
                    return (
                        <TagMain.MuiItem key={account.uid} onClick={() => newSignin(account, 'switchAccount')}>
                            <ListItemIcon>
                                <Tag.AvatarPhoto src={account.photoURL} />
                            </ListItemIcon>
                            {account.displayName}
                        </TagMain.MuiItem>
                    )
                })}

                <Divider sx={{ width: '90%', borderColor: Root.color_button, ml: '5%' }} />

                <TagMain.MuiItem onClick={handleOpen} sx={{
                    ':hover': {
                        color: Root.color_button,
                        backgroundColor: 'transparent',
                    }
                }}>
                    <ListItemIcon sx={{
                        ':hover': {
                            color: Root.color_button
                        }
                    }}>
                        <GroupAdd />
                    </ListItemIcon>
                    Add new acount
                </TagMain.MuiItem>
                <TagMain.MuiItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings themes task future
                </TagMain.MuiItem>
                <TagMain.MuiItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </TagMain.MuiItem>
            </Menu>

        </React.Fragment>
    );
}