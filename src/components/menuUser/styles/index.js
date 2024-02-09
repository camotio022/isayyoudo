import { MenuItem, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const MuiItem = styled(MenuItem)(({ }) => ({
    ':hover': {
        color: Root.color_button,
        backgroundColor: Root.color_button_opacity,
    }
}))