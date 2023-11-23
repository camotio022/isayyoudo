import { Subject } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { grey, orange, purple } from "@mui/material/colors"
import { Fragment } from "react"
import { Root } from "../Global/Root/root_styles"
import Logo from './img/logo_default.png'
export const LogoPage = () => {
    return (
        <Stack sx={{ mb: 3 }}>
            <img src={Logo} alt="" />
        </Stack>
    )
}