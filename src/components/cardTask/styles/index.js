import { Box, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const TabsMain = styled(Box)(({ theme, border }) => ({
    width: '95%',
    minHeight: '5%',
    height: 'auto',
    paddingBlock: '1rem',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Root.white,
    gap: 10,
    boxShadow: Root.boxShadowTask,
    overflowX: 'auto',
    overflowY: 'hidden',

    '&::-webkit-scrollbar': {
        width: '5px',
        height: '3px'
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#f1f1f1',
        borderRadius: '6px',
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1',
}));