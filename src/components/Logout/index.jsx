import { Add, Comment, Explore, Logout, Menu, Person, Search } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Stack, useMediaQuery } from "@mui/material";
import { MyLogout } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../authcontext/index";
import { Menu as MenuLinks } from '../../layout/components/menu';
import { Root } from '../Global/Root/root_styles';
import { taskStatusColors } from '../../pages/createTasks/quirys/taskStatus';
export const LogoutComponent = () => {
    const [isLinks, setIsLinks] = useState(false)
    const matches = useMediaQuery('(max-width:601px)');
    const [value, setValue] = useState(0);
    if (value === 1) {
        setIsLinks(true)
    }
    const matchesJsx = {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '60px',
        width: '100%',
        bottom: '0px',
        bgcolor: Root.white,
        zIndex: 1,
    }
    const handleRoute = (navegation) => {
        if (navegation === 'Menu') {
            setIsLinks(!isLinks)
        }
    }
    return (
        <MyLogout sx={matches && matchesJsx} matches={matches}>
            {matches && <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '95%',
                height: '100%'
            }}>
                <BottomNavigation
                    sx={{ width: '100%' }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    {
                        [
                            { label: 'Menu', icon: <Menu /> },
                            { label: 'Search', icon: <Search /> },
                            { label: 'Explorar', icon: <Explore /> },
                            { label: 'Perfil', icon: <Person /> }
                        ].map((action, index) => {
                            return (
                                <BottomNavigationAction
                                    onClick={() => handleRoute(action.label)}
                                    sx={{
                                        ':focus': {
                                            outline: 'none',
                                            color: Root.color_button
                                        },
                                        borderTop: value === index && `3px solid ${Root.color_button}`
                                    }} label={action.label} icon={action.icon} />
                            )
                        })}
                </BottomNavigation>

            </Stack>}
            {isLinks && <MenuLinks setIsLinks={setIsLinks} isLinks={isLinks} />}
        </MyLogout>
    )
} 