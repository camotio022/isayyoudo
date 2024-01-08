import { Comment, Logout, Menu, Person, Search } from '@mui/icons-material';
import { Stack, useMediaQuery } from "@mui/material";
import { MyLogout } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../authcontext/index";
import { Menu as MenuLinks } from '../../layout/components/menu';
import { Root } from '../Global/Root/root_styles';
import { taskStatusColors } from '../../pages/createTasks/quirys/taskStatus';
export const LogoutComponent = () => {
    const [isLinks, setIsLinks] = useState(false)
    const matches = useMediaQuery('(max-width:601px)');
    const matchesJsx ={
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '60px',
        width: '100%',
        bottom: '0px',
        bgcolor: Root.white,
        // borderTop: Root.border,
        zIndex: 1,
        color: taskStatusColors.Completed
    }
    return (
        <MyLogout sx={matches&&matchesJsx} matches={matches}>
            {matches&& <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '95%',
                height: '100%'
            }}>
                <Menu fontSize='large' onClick={() => setIsLinks(!isLinks)} />
                <Search fontSize='large' onClick={() => setIsLinks(!isLinks)} />
                <Comment fontSize='large' onClick={() => setIsLinks(!isLinks)} />
                <Person fontSize='large' onClick={() => setIsLinks(!isLinks)} />
            </Stack>}
            {isLinks && <MenuLinks setIsLinks={setIsLinks} isLinks={isLinks} />}
        </MyLogout>
    )
} 