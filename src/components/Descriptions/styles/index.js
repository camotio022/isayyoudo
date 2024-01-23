import { Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const ShowTimes = styled(Stack)(({ theme, isMobileQuery, backgroundColor, colors }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    flexWrap: 'wrap',
    bgcolor: backgroundColor ? backgroundColor : Root.color_button_opacity,
    right: 0,
    borderRight: `0.5rem solid ${colors ? colors : Root.color_button}`,
    color: Root.black,
    fontSize: 14
}));