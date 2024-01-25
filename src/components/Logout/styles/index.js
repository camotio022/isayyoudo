import { Stack, styled } from "@mui/material";
export const MyLogout = styled(Stack)(({matches}) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: '100%',
    top: matches !== 'true' && "1.5rem",
    right: matches !== 'true' && "1rem",
    cursor: 'pointer',
    border: 'none'
}));