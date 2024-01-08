import { Stack, useMediaQuery } from '@mui/material'
import { LogoPage } from '../../../components/Logo'
import *as T from './styles/index'
import { MyButton } from '../../../components/Global/Styles/styles'
import { Add, Close, Logout } from '@mui/icons-material'
import { links } from '../links/listLinks'
import { Links_a } from '../links/links_a'
import { MyLogout } from '../../../components/Logout/styles'
import { useContext } from 'react'
import { AuthContext } from '../../../authcontext/index'
import { SelectItem } from '../../../components/SelectItem'
import { Link } from 'react-router-dom'
export const Menu = (
    { setIsLinks, isLinks }
) => {
    const { logout } = useContext(AuthContext)
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <T.LateralMenu isSmallScreen={isSmallScreen}>
            <LogoPage />
            <MyLogout position={'90%'}>
                {isLinks && <SelectItem item={<Close onClick={() => setIsLinks(false)} />} />}
            </MyLogout>
            <Link
                to={'/createTask'}
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: "80%"
                }}>
                <MyButton sx={{ textTransform: "lowercase" }}>
                    <Add />
                    New Task
                </MyButton>
            </Link>
            <T.MinhaLista>
                {links.map((li) => {
                    return (
                        <Links_a
                            key={li.name}
                            {...li}
                            name={li.name}
                            canShowAlert={li.name === 'My Tasks'}
                            closeMenuLinks={() => setIsLinks(false)}
                            isLinks={isLinks}
                        />
                    )
                })}
            </T.MinhaLista>
            <T.Logout onClick={logout}>
                <Logout />
                <Stack>
                    Logout
                </Stack>
            </T.Logout>
        </T.LateralMenu>
    )
}