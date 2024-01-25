import { Box, MenuItem, Stack, styled,Typography } from "@mui/material";
import { Root } from "../Global/Root/root_styles";

export const Menus = styled(Box)(({ theme }) => ({
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));
export const MuiTypography = styled(Typography)(({ theme, fontWeight, color }) => ({
    fontSize: '14px',
    fontWeight: fontWeight? fontWeight: 600,
    color: color? color: Root.gray
}));
export const MenuItems = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '2.8rem',
}));
export const MenuStack = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 180,
    height: '100%',
    gap: 0.5
}));
export const MenuRadiusItem = styled(Box)(({ theme, bg }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: bg?'rgba(0, 0, 0, 0.1)': Root.white,
    height: '1.6rem',
    color: Root.black,
    borderRadius: '2.3rem',
    paddingInline: 8
}));