import { Explore, Home, Person, Search } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Menu, Stack, useMediaQuery } from "@mui/material";
import { MyLogout } from "./styles";
import { useState } from "react";
import { Menu as MenuLinks } from '../../layout/components/menu';
import { Root } from '../Global/Root/root_styles';
import { useNavigate } from 'react-router-dom';
export const LogoutComponent = () => {
    const navigate = useNavigate()
    const [isLinks, setIsLinks] = useState(false)
    const matches = useMediaQuery('(max-width:601px)');
    const [value, setValue] = useState(0);
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
    return (
        <MyLogout sx={matches && matchesJsx} matches={matches ? 'true': 'false'}>
            {matches && <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '95%',
                height: '100%',

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
                            { label: 'Home', icon: <Home />, link: '/' },
                            { label: 'Search', icon: <Search />, link: '/' },
                            { label: 'Explorar', icon: <Explore />, link: '/' },
                            { label: 'Perfil', icon: <Person />, link: '/porfile' }
                        ].map((action, index) => {
                            return (

                                <BottomNavigationAction
                                    key={index}
                                    onClick={() => {
                                        navigate(action.link)
                                    }}
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