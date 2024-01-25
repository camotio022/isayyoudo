import { Box, Dialog, Paper, Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const DialogDetails = styled(Stack)(({ theme, ismobilequery }) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s',
    zIndex: 99999,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0,0.1)',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0
}));
export const ContainerDialog = styled(Paper)(({ theme, ismobilequery }) => ({
    position: 'relative',
    width: ismobilequery ? '100%' : 500,
    height: ismobilequery ? '100%' : '90%',
    marginBlock: 5,
    borderRadius: '0.3rem',
    overflow: 'auto',
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
export const BoxItem = styled(Box)(({ theme, ismobilequery }) => (
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: '2rem',
    }));
export const NavBarFixed = styled(Stack)(({ theme,
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
        borderBottom: Root.border
    }));