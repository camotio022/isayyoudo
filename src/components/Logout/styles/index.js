import { Stack, styled } from "@mui/material";
export const MyLogout = styled(Stack)(({matches}) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: '100%',
    top: !matches && "1.5rem",
    right: !matches && "1rem",
    cursor: 'pointer',
    border: 'none'
}));