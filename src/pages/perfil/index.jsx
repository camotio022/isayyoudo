import { Box, Card, CardMedia, Container, Typography } from "@mui/material"
import * as Tag from './styles/index'
import { Root } from '../../components/Global/Root/root_styles'
import { AuthContext } from '../../authcontext/index'
import { useContext } from "react"
export const Perfil = () => {
    const { user } = useContext(AuthContext)
    return (
        <Tag.MuiContainer>
            <Tag.MuiDivicer />

            <Card sx={{
                mt: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                padding: '1%',
                width: '94%',
                minHeight: '70%',
                gap: '32px'
            }}>
                <Typography mt={4} sx={{ fontWeight: 900, fontSize: '20px', color: Root.color_button }}>
                    {user.displayName}
                </Typography>
                <Box
                    sx={{
                        position: 'relative',
                        width: '120px',
                        height: '120px',
                        backgroundColor: Root.color_button,
                        mt: 2.7,
                        border: `2px solid ${Root.color_button}`,
                        overflow: 'hidden',
                        borderRadius: '50%',
                    }}
                >
                    <CardMedia
                        component="img"
                        alt={'userAvatar'}
                        height="100%"
                        sx={{
                            top: 0,
                            width: '100%',
                            position: 'absolute'
                        }}
                        image={user.photoURL}
                    />
                </Box>
            </Card>
        </Tag.MuiContainer>
    )
}