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
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Root.white,
    border: `1px solid ${Root.color_button}`,
    boxShadow: Root.boxShadow,
    borderRadius: '4px',
}))
export const MuiClose = styled(Stack)(({})=> ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '1rem',
    right: '1rem',
    border: Root.border,
    ':hover':{
        backgroundColor: Root.color_button_opacity,
        color: Root.color_button,
        cursor: 'pointer',
        borderColor: Root.color_button,
        cursor: 'pointer',
    }
}))