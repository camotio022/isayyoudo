import { Box, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const TabsMain = styled(Box)(({ theme, border }) => ({
    width: '95%',
    minHeight: '5%',
    height: 'auto',
    paddingBlock: '1rem',
    borderRadius: "4px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Root.white,
    gap: 10,
    boxShadow: Root.boxShadowTask,

}))