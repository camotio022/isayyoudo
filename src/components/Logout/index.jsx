import { Logout, Menu } from '@mui/icons-material';
import { useMediaQuery } from "@mui/material";
import { MyLogout } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../authcontext/index";
import { Menu as MenuLinks } from '../../layout/components/menu';
export const LogoutComponent = () => {
    const [isLinks, setIsLinks] = useState(false)
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const { logout } = useContext(AuthContext)
    if (!isSmallScreen) {
        return (
            <MyLogout onClick={logout}>
                <Logout />
            </MyLogout>
        )
    }
    return (
        <MyLogout isLinks={isLinks} position={'90%'}>
            <Menu onClick={()=> setIsLinks(!isLinks)}/>
            {isLinks && <MenuLinks setIsLinks={setIsLinks}/>}
        </MyLogout>
    )
} 