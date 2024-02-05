import { Avatar, Box, Card, CardMedia, Container, Stack, Typography } from "@mui/material"
import * as Tag from './styles/index'
import { Root } from '../../components/Global/Root/root_styles'
import { AuthContext } from '../../authcontext/index'
import { useContext } from "react"
export const Perfil = () => {
    const { user } = useContext(AuthContext)
    return (
        <Tag.MuiContainer>
            <Stack sx={{
                width: '100%',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
            }}>
                <Box mt={20} gap={2} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    width: '95%'
                }}>
                    <Avatar sx={{ width: 90, height: 90 }} src={user?.photoURL} />
                    <Stack sx={{color: Root.white,}}>
                        <Typography sx={{  fontWeight: 400 }} variant="h5" gutterBottom>
                            {user.displayName}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ }}>
                            {user.email}
                        </Typography>
                    </Stack>

                </Box>
            </Stack>
        </Tag.MuiContainer>
    )
}