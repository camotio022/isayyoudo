import { Box, MenuItem, Stack, styled } from "@mui/material";
import { Root } from "../Global/Root/root_styles";
export const CommentMainTag = styled(Box)(({ theme, ismobilequery }) => ({
    position: 'relative',
    width: ismobilequery? '93%':450, 
    minHeight: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
}));
export const CommentMainParte1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
}));
export const CommentMainParteA = styled(Box)(({ theme, diretion }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: diretion? diretion:'center',
    gap: '10px',
    width: '90%'
}));
export const Colpax = styled(Stack)(({ theme, isMobileQuery, bg, colors }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    color: Root.gray,
    transition: 'all .3s',
    zIndex: 22,
}));
export const item = styled(MenuItem)(({ theme, isMobileQuery, bg, colors }) => ({
    gap: '10px',
    ":hover":{
        backgroundColor: Root.color_button_opacity,
        color: Root.gray,
        borderBottom: `1px solid ${Root.white}`
    }
}));