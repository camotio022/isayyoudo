import { Box, Card, Stack, styled } from "@mui/material";
import { Root } from "../../../../components/Global/Root/root_styles";

export const ContainerPerfil = styled(Stack)(({ }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '95%',
    width: '72%',
    gap: '18px',
    transition: 'background-color 0.3s ease',
    color: Root.white,
}))
export const CardPerfil = styled(Card)(({ }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '94%',
    boxShadow: 'none',
    padding: '10px',
    marginTop: '15px',
    gap: '1px',
    borderRadius: '0px',
    transition: '0.3s ease',
    backgroundColor: Root.white,
    color: Root.color_button,
    borderRadius: '4px',
    boxShadow: Root.boxS
}))
export const ItemPerfilUser = styled(Box)(({ }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    width: '45%',
    minHeight: '50px',
    padding: '5px',
    backgroundColor: Root.white
}))
export const ItemPerfilUserIcon = styled(Stack)(({ }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${Root.color_button}`,
    borderRadius: '50%',
    height: '30px',
    width: '30px'
}))
export const SettingsPerfil = styled(Box)(({ }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '16px',
    top: '15px',
    cursor: 'pointer',
    transition: '0.3s ease',
    textDecoration: 'underline',
}))
export const BiografyPerfil = styled(Stack)(({ }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '1rem',
    backgroundColor: Root.color_button,
    color: Root.white,
    padding: '16px',
    textTransform: 'uppercase',
    top: 0,
    left: 0,
}))
export const OpenBiografyPerfil = styled(Stack)(({ }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '3em',
    height: '3rem',
    width: '100%',
    cursor: 'pointer'
}))
export const OpenBiografyPerfilLeftComponent = styled(Stack)(({ }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '90%',
}))
export const OpenBiografyPerfilRitghComponent = styled(Stack)(({ }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: '8px',
    width: '5%',
    ...Root.hover
}))