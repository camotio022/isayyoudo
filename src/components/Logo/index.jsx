import { Stack } from "@mui/material"
import Logo from './img/teste.png'
export const LogoPage = () => {
    return (
        <Stack sx={{ mb: 3 }}>
            <img style={{
                height: '7rem'
            }} src={Logo} alt="" />
        </Stack>
    )
}