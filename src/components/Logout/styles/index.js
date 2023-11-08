import { Stack, styled } from "@mui/material";
export const MyLogout = styled(Stack)(({ theme, position }) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: '100%',
    top: "1.5rem",
    right: position? position:"1rem",
    cursor: 'pointer',
}));