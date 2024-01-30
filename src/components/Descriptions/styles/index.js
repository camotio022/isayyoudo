import { Stack, styled } from "@mui/material";
import { Root } from "../../Global/Root/root_styles";

export const ShowTimes = styled(Stack)(({ theme, isMobileQuery, bg, colors }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    flexWrap: 'wrap',
    backgroundColor: bg ? bg : Root.color_button_opacity,
    right: 0,
    textTransform: 'uppercase',
    borderRight: `0.5rem solid ${colors ? colors : Root.color_button}`,
    color: Root.gray,
    fontSize: 11,
}));