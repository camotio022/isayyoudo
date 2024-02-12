import { Avatar, Box, Stack, styled } from "@mui/material";
import { Root } from "../Global/Root/root_styles";

export const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    minHeight: '130px',
    height: 'auto',
    backgroundColor: Root.color_app_bar,
    left: 0,
    top: 0,
    border: Root.border
}));
export const TabsMainA = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingTop: '10px',
    flexDirection: 'row',
    gap: '12px',
    width: '98%',
    height: '50%',
}));
export const TabsMain = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '12px',
    width: '95%',
    minHeight: '2.5rem',
    height: 'auto',
    marginBottom: '-16px',

}));
export const TabMainItems = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    mr: 1,

}));
export const TepsIcons = styled(Stack)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    backgroundColor: Root.white,
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    cursor: 'pointer',
    ":hover": {
        transition: 'all 200ms linear',
        color: Root.color_button
    }
}));
export const AvatarPhoto = styled(Avatar)(({ theme }) => ({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: Root.color_button,
}));