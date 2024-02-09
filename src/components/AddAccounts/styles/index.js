import { Container, Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const MuiStack = styled(Stack)(({})=> ({
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    zIndex: 99999
}))
export const MuiContainer = styled(Container)(({})=> ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Root.white,
    border: `1px solid ${Root.color_button}`,
    boxShadow: Root.boxShadow,
    borderRadius: '4px',
}))