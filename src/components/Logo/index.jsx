import { Subject } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { grey, orange, purple } from "@mui/material/colors"
import { Fragment } from "react"
import { Root } from "../Global/Root/root_styles"

export const LogoPage = () => {
    return (
        <Stack sx={{mb:3}}>
            <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill={"transparent"} />
                <text x="20" y="50" fill={Root.orange} font-size="30">iSay</text>
                <text x="70" y="50" fill={Root.purple} font-size="30">YouDo</text>
            </svg>
        </Stack>
    )
}