import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as Tag from './index.js'
import { Root } from '../Global/Root/root_styles.jsx'

export const TepsMenuTasks = () => {
    const location = useLocation()
    const locationMain = location.pathname === '/';
    const border  = `2px solid ${Root.color_button}`
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
        <Tag.TabsMain>
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
    )
}