import { Box, styled } from "@mui/material";

export const TabsMain = styled(Box)(({ theme }) => ({
    position:'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '3%',
    gap: '2rem',
    width: '100%',
    height: '10%',
    backgroundColor:'#F0FFFE',
    top: 0,
    left: 0,
}));