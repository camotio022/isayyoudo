import { styled, Grid, Stack, Box, Typography, Grid as MuiContainer, withTheme, Button, Link } from '@mui/material';
import { grey, } from '@mui/material/colors';
import { Root } from '../../../components/Global/Root/root_styles';

export const StyledContainer = styled(MuiContainer)(({ theme }) => ({
    height: '100vh',
    zIndex: '1',
    position: 'absolute',
    left: '0',
    top: '0',
}));
export const GridMiniMain = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: 'white'
}));

export const GridMapTextfield = styled(Grid)(({ theme }) => ({
    mt: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '90%',
}));

export const MiniButton = styled(Typography)(({ theme }) => ({
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