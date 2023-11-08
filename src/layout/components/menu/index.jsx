import { Divider, Stack, useMediaQuery } from '@mui/material'
import { LogoPage } from '../../../components/Logo'
import *as T from './Styles/index'
import { MyButton } from '../../../components/Global/Styles/styles'
import { Add, Close, Logout } from '@mui/icons-material'
import { links } from '../links/listLinks'
import { Links_a } from '../links/links_a'
import { MyLogout } from '../../../components/Logout/Styles'
import { useContext } from 'react'
import { AuthContext } from '../../../authcontext/index'
import { Root } from '../../../components/Global/Root/root_styles'
import { SelectItem } from '../../../components/SelectItem'
export const Menu = (
    { setIsLinks }
) => {
    const { logout } = useContext(AuthContext)
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <T.LateralMenu isSmallScreen={isSmallScreen}>
            <LogoPage />
            <MyLogout sx={{ flexDirection: 'row', gap: 2 }}>
                <SelectItem item={<Close onClick={() => setIsLinks(false)} />}/>
                <SelectItem item={<Logout onClick={logout} />}/>
            </MyLogout>
            <Stack sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', width: "80%" }}>
                <MyButton sx={{ textTransform: "lowercase" }}>
                    <Add />
                    New Task
                </MyButton>
            </Stack>
            <T.MinhaLista>
                {links.map((li) => {
                    return (
                        <Links_a
                            key={li.name}
                            {...li}
                            name={li.name}
                            canShowAlert={li.name === 'My Tasks'}
                        />
                    )
                })}
            </T.MinhaLista>
        </T.LateralMenu>
    )
}