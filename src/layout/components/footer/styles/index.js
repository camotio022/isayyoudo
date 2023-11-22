import styled from "@emotion/styled";
import { Link, Stack } from "@mui/material";
import { Root } from "../../../../components/Global/Root/root_styles";


export const MyFooter = styled(Link)(({ theme }) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '3%',
    fontFamily: Root.fontFamilyMonospace,
    bottom: 0,
    left: 0,
    zIndex:1,
    textDecoration:'none',
    backgroundColor: '#7667CF',
    color:'#7A04D7',
}));
