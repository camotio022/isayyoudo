import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as Tag from './index.js'
import { Root } from '../Global/Root/root_styles.jsx'
import { Avatar, Box, Container, IconButton, Stack, Tooltip } from '@mui/material'
import { Email, ExpandLess, ExpandMore, Notifications } from '@mui/icons-material'
import { AuthContext } from '../../authcontext/index.jsx'
import { useContext, useState } from 'react'
import { tasks } from '../../mask/tasks.js'
import { CircularRedAlert } from '../CircularRedAlert/index.jsx'
import { MenuUser } from '../menuUser/index.jsx'
import { DrawerNotification } from '../DrawerNotification/index.jsx'

export const TepsMenuTasks = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const locationMain = location.pathname === '/';
    const border = `2px solid ${Root.color_button}`
    const firstInitial = user.displayName.split(' ')[0].charAt(0);
    const firstName = user.displayName.split(' ')[0];
    const abas = [
        {
            title: 'Active',
            link: '/',
            taskNumber: tasks.filter((task) => task.status === 'active').length,
        },
        {
            title: 'Completed',
            link: '/taskCompleted',
            taskNumber: tasks.filter((task) => task.status === 'completed').length,
        },
        {
            title: 'Archived',
            link: '/taskArchived',
            taskNumber: tasks.filter((task) => task.status === 'archived').length,
        },
        {
            title: 'Close',
            link: '/taskClose',
            taskNumber: tasks.filter((task) => task.status === 'close').length,
        }
    ]
    const newRoute = {
        title: 'New Task',
        link: location.pathname,
        taskNumber: 'pending...'
    };
    if (location.pathname === '/createTask') {
        abas.push(newRoute);
    } else {
        const novaArray = abas.filter(objeto => objeto.link !== '/createTask');
        abas.length = 0;
        abas.push(...novaArray);
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openNotification, setOpenNotification] = useState(false);
    const toggleDrawer = () => () => {
        setOpenNotification(!openNotification);
    };
    return (
        <Tag.Container>
            <Tag.TabsMainA>
                <Tag.TabMainItems sx={{ ga: '1rem' }}>
                    <Tag.TepsIcons>
                        <Email />
                        {false && <CircularRedAlert />}
                    </Tag.TepsIcons>
                    <Tag.TepsIcons onClick={toggleDrawer(true)}>
                        <Notifications />
                        {false && <CircularRedAlert />}
                    </Tag.TepsIcons>
                </Tag.TabMainItems>
                <Tag.TabMainItems sx={{
                    paddingLeft: '12px',
                    borderLeft: '1px solid gray',
                }}>
                    <Tooltip onClick={handleClick} title="Account settings">
                        <Tag.TabMainItems>
                            <Tag.AvatarPhoto src={user.photoURL} sx={{ width: 32, height: 32 }}>
                                {firstInitial}
                            </Tag.AvatarPhoto>
                            {firstName}
                            {!open ? <ExpandMore /> : <ExpandLess />}
                        </Tag.TabMainItems>
                    </Tooltip>
                    <MenuUser
                        user={user}
                        open={open}
                        handleClick={handleClick}
                        handleClose={handleClose}
                        anchorEl={anchorEl} />
                </Tag.TabMainItems>
            </Tag.TabsMainA>
            <Tag.TabsMain >
                {abas.map((aba, index) => {
                    return (
                        <Link to={aba.link} style={{
                            textDecoration: 'none',
                            color: (
                                locationMain && aba.link === '/activeTask'
                            ) ? 'black' : ((
                                location.pathname === aba.link
                            ) ? 'black' : Root.gray_desfius),
                            fontWeight: 'bolder',
                            borderBottom: (locationMain && aba.link === '/activeTask') ? border : ((location.pathname === aba.link) && border)
                        }} key={index}>{aba.title}({aba.taskNumber})</Link>
                    )
                })}
            </Tag.TabsMain>
            <DrawerNotification
                open={openNotification}
                toggleDrawer={toggleDrawer}
            />
        </Tag.Container>
    )
}