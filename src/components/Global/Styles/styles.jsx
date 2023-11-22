import styled from "@emotion/styled";
import { Box, Button, Link, Stack, useMediaQuery } from "@mui/material";
import { Root } from "../Root/root_styles";
import { purple } from "@mui/material/colors";

export const ContainerGlobal = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    color: Root.gray,
    backgroundColor: Root.light,
}));
export const ContainerGlobalChildrens = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    height: "100%",
    color: Root.gray,
    backgroundColor: Root.light,
}));
export const BoxMain = styled(Box)(({
    theme,
    border,
    padding
}) => ({
    width: '90%',
    height: 'auto',
    paddingBlock: '1rem',
    borderRadius: "5px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    gap: 10,
    boxShadow: Root.boxShadow,
    border: border ? '0' : Root.border,
}));
export const MyButton = styled(Button)(({ theme }) => ({
    cursor: 'pointer',
    color: Root.color_default,
    width: "100%",
    fontWeight: 900,
    outline: 'none !important',
    mt: 3,
    mb: 2,
    backgroundColor: Root.color_button_secondary,
    borderRadius: '0',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: '12px',

    '&:hover': {
        backgroundColor: Root.color_default,
        color: Root.color_button_secondary,
        cursor: 'pointer',
    },
}));
export const MyLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: Root.color_default,
    width: "100%",
    marginTop: 10,
    mb: 2,
    backgroundColor: Root.color_button_secondary,
    borderRadius: '0',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    textDecoration: 'none',
    minHeight: '2rem',
    boxShadow: Root.boxShadow,
    '&:hover': {
        backgroundColor: Root.color_default,
        color: Root.color_button_secondary,
        cursor: 'pointer',
    },

}));
export const MyFooter = styled(Link)(({ theme }) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: "100%",
    height: '5%',
    fontFamily: Root.fontFamilyMonospace,
    bottom: 0,
    right: 0,
    zIndex: 1,
    textDecoration: 'none',
    backgroundColor: Root.white,
    color: Root.purple,
}));
export const NotificationCounter = styled(Stack)(({ theme, color }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14px',
    height: '14px',
    padding: '3px',
    borderRadius: '50%',
    color: color || 'white',
    backgroundColor: Root.red
}));
export const Items = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
    boxShadow: Root.boxShadow,
    padding: '1px',
}));