import { Box, List, Stack, styled } from "@mui/material";
import { Root } from "../../../components/Global/Root/root_styles";

export const ContentNewTask = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '99%',
    height: '95%',
    // border: `1px solid ${Root.color_button}`,
}));

export const CardNewTask = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '16px',
    width: '90%',
    height: 'auto',
    marginBottom: '23px'
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