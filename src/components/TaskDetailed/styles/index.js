import { Box, Dialog, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const DialogDetails = styled(Dialog)(({ theme }) => ({
    position: 'retalive',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s',
    '&::-webkit-scrollbar': {
        width: '4px',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: Root.color_button,
        borderRadius: '6px',
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
}));