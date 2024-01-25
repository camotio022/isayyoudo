import { Box, styled } from "@mui/material";
export const CommentMainTag = styled(Box)(({ theme, ismobilequery }) => ({
    width: ismobilequery? '90%':450, 
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
    gap: '0.2rem',
    width: '90%'
}));