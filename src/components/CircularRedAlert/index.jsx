import { Stack } from "@mui/material"
import { Root } from "../Global/Root/root_styles"

export const CircularRedAlert = () => {
    return (
        <Stack sx={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            bgcolor: 'red',
            borderRadius: '50%',
            top: 0,
            right: 0,
            border: '1px solid white',
            boxShadow: Root.boxShadow,
        }} />
    )
}