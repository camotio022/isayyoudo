import { Box, Paper, Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const DialogDetails = styled('div')(({ }) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s',
    zIndex: 99999,
    overflowX: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
}));
export const ContainerDialog = styled(Stack)(({ theme, ismobilequery }) => ({
    position: 'relative',
    width: ismobilequery ? '100%' : 500,
    height: ismobilequery ? '100%' : '70vh',
    marginBlock: 5,
    borderRadius: '0.3rem',
    overflow: 'auto',
    backgroundColor: Root.containTask,
    border: `1px solid ${Root.color_button}`,
    '&:-webkit-scrollbar': {
        width: '5px',
        height: '3px',
    },

    '&:-webkit-scrollbar-thumb': {
        backgroundColor: '#f1f1f1',
        borderRadius: '6px',
    },

    '&:-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1',
}));
export const BoxItem = styled(Box)(({ }) => (
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: '2rem',
        padding: '4px',
        border: `1px solid ${Root.color_app_bar}`
    }));
export const BoxItem2 = styled(Box)(({ }) => (
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
        textTransform: 'uppercase',
        gap: '1px',
    }));
export const NavBarFixed = styled(Stack)(({
    ismobilequery }) => (
    {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: ismobilequery ? '100%' : 500,
        backgroundColor: Root.white,
        height: '4rem',
        zIndex: 1,
        borderTopLeftRadius: '0.3rem',
        borderTopRightRadius: '0.3rem',
        borderBottom: `1px solid ${Root.color_app_bar}`,
    }));