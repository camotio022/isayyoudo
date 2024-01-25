import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import { AssignmentTurnedIn, Close, KeyboardArrowDown, Loop } from '@mui/icons-material';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import ArchiveIcon from '@mui/icons-material/Archive';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { MenuContent } from './contentMenu';
import { taskStatusBgcolor, taskStatusColors } from '../../pages/createTasks/quirys/taskStatus';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { AuthContext } from '../../authcontext';
import { useContext } from 'react';
import { Root } from '../Global/Root/root_styles';
;

export const MenuMobile = ({
    canSetColorMenu
}) => {
    const { user, logout } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const [tasks, setTasks] = useState([])
    const [taskStatus, setTasksStatus] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event, types) => {
        if (types === 'list_tasks') {
            setTasksStatus(true);
            setAnchorEl(event.currentTarget);
        } else {
            setTasksStatus(false);
            setAnchorEl(event.currentTarget);
        }
    };
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
            const timesTempTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTasks(timesTempTasks);
        });
        return () => unsubscribe();
    }, [])
    const handleClose = () => {
        setAnchorEl(null);
    };
    const status = [
        {
            title: 'Active',
            icon: <AssignmentTurnedInIcon />,
            link: '/active',
            color: taskStatusBgcolor.OnHold,
            textColor: taskStatusColors.OnHold,
            taskNumber: tasks.filter((task) => task.taskStatus === 'ToDo').length,

        },
        {
            title: 'InProgress',
            icon: <Loop />,
            link: '/inprogress',
            color: taskStatusBgcolor.InProgress,
            textColor: taskStatusColors.InProgress,
            taskNumber: tasks.filter((task) => task.taskStatus === 'InProgress').length,
        },
        {
            title: 'Archived',
            icon: <ArchiveIcon />,
            link: '/taskArchived',
            color: taskStatusBgcolor.Archived,
            textColor: taskStatusColors.Archived,
            taskNumber: tasks.filter((task) => task.taskStatus === 'Archived').length,
        },
        {
            title: 'Completed',
            icon: <CheckCircleIcon />,
            link: '/taskCompleted',
            color: taskStatusBgcolor.Completed,
            textColor: taskStatusColors.Completed,
            taskNumber: tasks.filter((task) => task.taskStatus === 'Completed').length,
        },
        {
            title: 'Close',
            icon: <Close />,
            link: '/taskClose',
            color: taskStatusBgcolor.Close,
            textColor: taskStatusColors.Close,
            taskNumber: tasks.filter((task) => task.taskStatus === 'Close').length,
        },
        {
            title: 'Create Task',
            icon: <AddCircleIcon />,
            link: '/createTask',
            color: taskStatusBgcolor.OnHold,
            textColor: taskStatusColors.OnHold
        },
    ];

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Button
                    id="tasks-button"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="none"
                    disableElevation
                    sx={{
                        color: canSetColorMenu&& Root.color_button,
                        fontWeight: canSetColorMenu&& 600,
                        '&:focus': {
                            border: 'none',
                            outline: 'none',
                        },
                    }}
                    onClick={(e) => handleClick(e, 'list_tasks')}
                    endIcon={<KeyboardArrowDown />}
                >
                    Tasks
                </Button>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={(e) => handleClick(e, 'users_menu')}
                        size="small"
                        sx={{
                            ml: 1,
                            '&:focus': {
                                border: 'none',
                                outline: 'none',
                            },
                        }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={user.photoURL} sx={{ width: 38, height: 38 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <MenuContent
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                content={taskStatus ? [status.map((task, index) => {
                    return (
                        <Link to={task.link}>
                            <MenuItem sx={{
                                position: 'relative',
                                borderTop: index > 0 && `1px solid ${task.color}`,
                                minWidth: 295
                            }} key={index}>
                                <ListItemIcon sx={{ color: task.textColor, }}>
                                    {task.icon}
                                </ListItemIcon>
                                <Typography variant="body2" sx={{ fontWeight: 800, color: Root.gray }}>
                                    {task.title}
                                </Typography>
                                <ListItemIcon sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    color: Root.gray,
                                    width: '40%',
                                    right: '16px'
                                }}>
                                    {
                                        task.taskNumber ?
                                            `${task.taskNumber} 
                                            ${task.taskNumber > 1 ? 'Tasks' : 'Task'}`
                                            : 'No Tasks'
                                    }
                                </ListItemIcon>
                            </MenuItem>

                        </Link>

                    )
                })] :
                    [(
                        <MenuItem key="profile" onClick={handleClose}>
                            <Avatar src={user.photoURL}/>
                            {user.displayName}
                        </MenuItem>
                    ),
                    (
                        <MenuItem disabled key="account" onClick={handleClose}>
                            <Avatar src={user.photoURL}/> Premmium Level
                        </MenuItem>
                    ),
                    <Divider key="divider" />,
                    (
                        <MenuItem disabled key="add-account" onClick={handleClose}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                    ),
                    (
                        <MenuItem disabled key="settings" onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                    ),
                    (
                        <MenuItem key="logout" onClick={logout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    ),
                    ]}

            />
        </>
    );
};
