import { List, styled } from "@mui/material";
import { Root } from "../../../../components/Global/Root/root_styles";
export const LateralMenu = styled('div')(({ theme, isSmallScreen }) => ({
    position: isSmallScreen && 'fixed',
    top:0,
    left:0,
    zIndex: 99999, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: !isSmallScreen&&'35%',
    width: isSmallScreen && '90%',
    height: '100%',
    padding: '20px',
    backgroundColor: Root.white,
    color: Root.gray,
    borderRight: !isSmallScreen &&Root.border,
    boxSizing: "border-box",
    transition: 'all .3s ease-in-out',
}));
export const MinhaLista = styled(List)(() => ({
    overflow: 'auto',
    height: '100%',
    width: '90%',
    transition: 'all 0.5s ease-in-out',
}))