import { useMediaQuery } from "@mui/material";
import { MyFooter } from "../Global/Styles/styles";

export const AuthFooter = ()=> {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <MyFooter sx={{
            width: isSmallScreen ? "100% !important" : '75% !important',
        }}>
            © 2023 Desenvolvidor por ISayYouDo.
        </MyFooter>
    )
}