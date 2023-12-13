import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as Tag from './index.js'
import { Root } from '../Global/Root/root_styles.jsx'
import { Avatar, Box, Container, Stack } from '@mui/material'
import { Email, ExpandMore, Notifications } from '@mui/icons-material'
import { AuthContext } from '../../authcontext/index.jsx'
import { useContext } from 'react'

export const TepsMenuTasks = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const locationMain = location.pathname === '/';
    const border = `2px solid ${Root.color_button}`
    const abas = [
        {
            title: 'Active Tasks',
            link: '/',
            taskNumber: 20,
        },
        {
            title: 'Completed',
            link: '/taskCompleted',
            taskNumber: 20,
        },

        {
            title: 'Archived',
            link: '/taskArchived',
            taskNumber: 230,
        },
        {
            title: 'Close',
            link: '/taskClose',
            taskNumber: 20,
        }
    ]
    return (
        <Tag.Container>
            <Tag.TabsMainA>
                <Tag.TabMainItems sx={{ ga: '1rem' }}>
                    <Tag.TepsIcons>
                        <Email />
                    </Tag.TepsIcons>
                    <Tag.TepsIcons>
                        <Notifications />
                    </Tag.TepsIcons>
                </Tag.TabMainItems>
                <Tag.TabMainItems sx={{
                    paddingLeft: '12px',
                    borderLeft: '1px solid gray',
                }}>
                    <Tag.AvatarPhoto src={user.photoURL} />
                    {user.displayName.split(' ')[0]}
                    <ExpandMore />
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
        </Tag.Container>
    )
}