import { BottomNavigation, BottomNavigationAction, Box, Container, Dialog, Paper, Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const DialogDetails = styled(Stack)(({ theme, isMobileQuery }) => ({
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
export const MuiPaper = styled(Paper)(({ theme, isMobileQuery }) => ({
    display: 'flex',
    alignItems:"center",
    justifyContent:'center',
    flexDirection:'column',
    position: !isMobileQuery && 'relative',
    width: isMobileQuery ? '100%' : 600,
    height: isMobileQuery ? '100%' : '95vh',
    borderRadius: 0,
    overflow: 'hidden'
}));
export const MuiBottomNavigation = styled(BottomNavigation)(({ theme, isMobileQuery }) => ({
    position: isMobileQuery ? 'fixed' : 'static',
    left: 0,
    top: 0,
    zIndex: 9999,
    backgroundColor: Root.white,
    borderBottom: Root.border,
    width: '100%',
}));
export const MuiBottomNavigationAction = styled(BottomNavigationAction)(({ theme, isMobileQuery }) => ({
    width: '100%',
    ':focus': {
        outline: 'none',
        color: Root.color_button
    },
}));
export const MuiBottomTextarea = styled(Stack)(({ theme, isMobileQuery }) => ({
    position: isMobileQuery ? 'fixed' : 'absolute',
    borderBottom: Root.border,
    bottom: '0',
    width: '100%',
    minHeight: 50,
    height: 'auto',
    borderTop: Root.border,
    paddingBlock: '0.5rem',
    backgroundColor: Root.white
}));
export const MuiBottomMainTextarea = styled(Box)(({ theme, isMobileQuery }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all .3s',
    gap: '0.8rem',
    minHeight: 50,
    height: 'auto',
    marginInline: isMobileQuery ? '0.5rem' : '1rem'
}));
export const MuiContainer = styled(Container)(({ theme, isMobileQuery }) => ({
    height: '100vh', overflow: 'auto'
}));