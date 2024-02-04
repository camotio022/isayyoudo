import { Box, MenuItem, Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const Colpax = styled(Stack)(({ theme, isMobileQuery, bg, colors }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    color: Root.gray,
    transition: 'all .3s',
    zIndex: 22,
}));
export const item = styled(MenuItem)(({ theme, isMobileQuery, bg, colors }) => ({
    gap: '10px',
    ":hover":{
        backgroundColor: Root.color_button_opacity,
        color: Root.gray,
        borderBottom: `1px solid ${Root.white}`
    }
}));