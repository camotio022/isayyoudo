import { Box, List, Stack, styled } from "@mui/material";
import { Root } from "../../../../components/Global/Root/root_styles";
export const LateralMenu = styled('div')(({ theme, isSmallScreen }) => ({
    position: isSmallScreen && 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: !isSmallScreen && '35%',
    width: isSmallScreen && '100%',
    height: '100%',
    padding: '20px',
    backgroundColor: Root.color_app_bar,
    color: Root.gray,
    borderRight: !isSmallScreen && Root.border,
    boxSizing: "border-box",
    transition: 'all .3s ease-in-out',
    zIndex: 99999,
}));
export const MinhaLista = styled(List)(() => ({
    marginTop: '16px',
    overflow: 'auto',
    height: '100%',
    width: '90%',
    transition: 'all 0.5s ease-in-out',
}))
export const Logout = styled(Box)(() => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    overflow: 'hidden',
    height: 'auto',
    padding: '10px',
    width: '100%',
    maxWidth: '100%',
    transition: 'all 0.5s ease-in-out',
    boxShadow: Root.boxS,
    color: Root.black,
    '&:hover': {
        backgroundColor: Root.color_button_secondary,
        color: Root.color_default,
        cursor: 'pointer',
    },

}))