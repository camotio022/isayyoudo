import { Avatar, Box, Stack, styled } from "@mui/material";
import { Root } from "../Global/Root/root_styles";

export const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '4px',
    width: '95%',
    height: '10%',
    backgroundColor: Root.containTask,
    top: 0,
    left: 0,
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
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    gap: '2rem',
    width: '100%',
    height: '3rem',
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