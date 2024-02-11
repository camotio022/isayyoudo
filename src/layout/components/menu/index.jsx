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
    { setShowLinks, showLinks }
) => {
    const { logout } = useContext(AuthContext)
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <T.LateralMenu isSmallScreen={isSmallScreen}>
            <LogoPage />
            <MyLogout position={'90%'}>
                {isSmallScreen && <SelectItem item={<Close onClick={() => setShowLinks(false)} />} />}
            </MyLogout>
            <Link
                to={'/createTask'}
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: "90%"
                }}>
                <MyButton sx={{ textTransform: "lowercase" }}>
                    <Add />
                    New Task
                </MyButton>
            </Link>
            <T.MinhaLista>
                {isSmallScreen ?
                    links.filter((li) => li.name !== 'Search' && li.name !== 'Explorer' && li.name !== 'User Profile')
                        .map((link, index) => (
                            <Links_a
                                key={link.name}
                                {...link}
                                canShowAlert={link.name === 'My Tasks'}
                                closeMenuLinks={() => setShowLinks(false)}
                            />
                        ))
                    :
                    links.map((li) => (
                        <Links_a
                            key={li.name}
                            {...li}
                            canShowAlert={li.name === 'My Tasks'}
                            closeMenuLinks={() => setShowLinks(false)}
                        />
                    ))}
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