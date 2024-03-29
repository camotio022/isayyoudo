import { Box, List, Stack, styled } from "@mui/material";
import { Root } from "../../../components/Global/Root/root_styles";
export const ContentNewTask = styled(Stack)(({ theme, ismobilequery }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    width: ismobilequery ? '99%' : '45%',
    height: ismobilequery && '100%',
    minHeight: !ismobilequery && 'auto',
    backgroundColor: Root.white,
    border:!ismobilequery&& `1px solid ${Root.color_app_bar}`,
    borderRadius: '4px',
    marginTop: !ismobilequery && '5rem',
    paddingBlock: '20px',
}));

export const CardNewTask = styled(Box)(({ theme, ismobilequery, bg }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '16px',
    width: ismobilequery ? '100%' : '100%',
    height: ismobilequery ? '30%' : 'auto',
    marginBottom: '23px',
    paddingBottom: ismobilequery && '10px',
    backgroundColor: ismobilequery && Root.color_button_opacity
}));
export const ContainerDescription = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.6',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    color: Root.color_button,
    backgroundColor: Root,
    textAlign: 'justify',
    boxShadow: Root.boxShadow
}));
export const ContainerTitleAndMOre = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: '16px',
    width: '90%',
    height: 'auto',

}));