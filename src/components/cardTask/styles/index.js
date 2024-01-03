import { Box, Stack, Tooltip, Typography, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const TabsMain = styled(Box)(({ theme, border, width, backgroundColor }) => ({
    width: width? width: '95%',
    minHeight: '5rem',
    height: 'auto',
    paddingBlock: '1rem',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: backgroundColor? backgroundColor: Root.white,
    gap: 10,
    boxShadow: Root.boxShadowTask,
    overflowX: 'auto',
    overflowY: 'hidden',

    '&::-webkit-scrollbar': {
        width: '5px',
        height: '3px'
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#f1f1f1',
        borderRadius: '6px',
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1',
}));
export const TaskTitleButton = styled(Stack)(({ theme, border }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '10px',
    width: '20%',
    minHeight: '5rem',
    height: 'auto'
}));
export const TaskTitle = styled(Typography)(({ theme, border }) => ({
    color: Root.black,
    fontSize: '12px',
    fontWeight: '600'
}));
export const Infos = styled(Stack)(({ theme, border }) => ({
    backgroundColor: Root.subButton,
    paddingInline: '5px',
    fontSize: '12px',
    borderRadius: '30px',
    color: Root.green,
    height:'30px',
    width:'80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
}))
export const TaskAssigner = styled(Stack)(({ theme, border }) => ({
    fontSize: '12px',
    fontWeight: 400,
    color: Root.gray
}));
export const TaskMainHoverInfosDate = styled(Box)(({ theme, border }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    color: Root.green,
    gap: '4px',
    fontSize: '12px',
}));
export const TaskMainTooltip= styled(Tooltip)(({ theme, border }) => ({
    color: 'gray',
    borderBottom: '1px solid'
}));
export const TaskMainTooltipTagMain= styled(Stack)(({ theme, border }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    gap: '4px'
}));
export const TaskMainTooltipTagMainItem= styled(Box)(({ theme, border }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: 500,
    width: '100%',
}));
export const TaskMainTooltipTagMainItemBorderLeft= styled(Stack)(({ theme, border }) => ({
    height: '1rem',
    width: '90%',
    borderLeft: '4px solid white'
}));
export const LastInfosTask = styled(Box)(({ theme, border }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    minWidth: '20%',
    height: '5rem',
}));
export const BoxTypeButtonMain= styled(Box)(({ theme, border }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    height:'40%',
    width: '6rem',
    paddingLeft: '8px',
    border:'1px solid gray',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    cursor: 'pointer',

    ":hover":{
        border:`1px solid ${Root.color_button}`,
        transition: '500ms ease-in-out',
        color: Root.color_button,
    }
}));
export const CircleStateTask= styled(Stack)(({ theme, color }) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: color,
}));