import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import { Root } from "../../../components/Global/Root/root_styles";

export const MuiContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    marginTop: -16}));
export const MuiDivicer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    width: '150vw',
    borderBottom: `1px solid ${Root.color_button}`,
    top: 0,
    left: 0,

}));