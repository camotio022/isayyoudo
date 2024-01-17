import { Box, Dialog, Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const DialogDetails = styled(Box)(({ theme, isMobileQuery }) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s',
    zIndex: 99999,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0
}));
export const ContainerDialog = styled(Box)(({ theme, isMobileQuery }) => ({
    position: 'relative',
    width: isMobileQuery ? '100%' : 500,
    height: isMobileQuery ? '100%' : '90%',
    marginBlock: 5,
    backgroundColor: Root.white,
    borderRadius: '0.3rem',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '3px'
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: Root.white,
        borderRadius: '6px',
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: Root.color_button,
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1',
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
export const NavBarFixed = styled(Stack)(({ theme,
    isMobileQuery, colors, taskStatusColors }) => (
    {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: isMobileQuery ? '100%' : 500,
        backgroundColor: Root.white,
        height: '4rem',
        zIndex: 1,
        borderTopLeftRadius: '0.3rem',
        borderTopRightRadius: '0.3rem',
        borderBottom: Root.border
    }));