import { Box, Dialog, Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const DialogDetails = styled(Dialog)(({ theme, isMobileQuery }) => ({
    position: 'retalive',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s',
    '&::-webkit-scrollbar': {
        width: '12px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '6px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#555',
    },

}));
export const BoxItem = styled(Box)(({ theme, isMobileQuery }) => (
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: '2rem',
    }));
export const NavBarFixed = styled(Stack)(({ theme, isMobileQuery, colors, taskStatusColors }) => (
    {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: isMobileQuery ? '95vw' : 500,
        backgroundColor: colors ? colors : taskStatusColors,
        height: '4rem',
        marginBlock: '1rem',
        marginTop: '-2.5rem',
        zIndex: 1,

    }));