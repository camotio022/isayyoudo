import { Comment, Logout, Menu, Person, Search } from '@mui/icons-material';
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
                            { label: 'Comments', icon: <Comment /> },
                            { label: 'Perfil', icon: <Person /> }
                        ].map((action, index) => {
                            return (
                                <BottomNavigationAction sx={{
                                    ':focus': {
                                        outline: 'none',
                                        color: Root.color_button
                                    },
                                    borderBottom: value === index && `3px solid ${Root.color_button}`
                                }} label={action.label} icon={action.icon} />
                            )
                        })}
                </BottomNavigation>
                {/* <Menu fontSize='large' onClick={() => setIsLinks(!isLinks)} />
                <Search fontSize='large' onClick={() => setIsLinks(!isLinks)} />
                <Comment fontSize='large' onClick={() => setIsLinks(!isLinks)} />
                <Person fontSize='large' onClick={() => setIsLinks(!isLinks)} /> */}
            </Stack>}
            {isLinks && <MenuLinks setIsLinks={setIsLinks} isLinks={isLinks} />}
        </MyLogout>
    )
} 