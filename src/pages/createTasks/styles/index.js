import { Box, List, Stack, styled } from "@mui/material";
import { Root } from "../../../components/Global/Root/root_styles";
export const ContentNewTask = styled(Stack)(({ theme, isMobileQuery }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    width: '99%',
    height: isMobileQuery ? '100%' : '95%',
}));

export const CardNewTask = styled(Box)(({ theme, isMobileQuery, bg }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '16px',
    width: isMobileQuery ? '100%' : '90%',
    height: isMobileQuery ? '30%' : 'auto',
    marginBottom: '23px',
    paddingBottom: isMobileQuery && '10px',
    backgroundColor: isMobileQuery &&  Root.color_button_opacity
}));
export const ContainerDescription = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.6',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    color: Root.color_button,
    backgroundColor: Root,
    textAlign: 'justify',
    boxShadow: Root.boxShadow
}));
export const ContainerTitleAndMOre = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: '16px',
    width: '90%',
    height: 'auto',

}));