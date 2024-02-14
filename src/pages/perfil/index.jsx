import { Avatar, Box, Card, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material"
import * as Tag from './styles/index'
import { Root } from '../../components/Global/Root/root_styles'
import { AuthContext } from '../../authcontext/index'
import { useContext, useState } from "react"
import { AccountTree, BookmarkAdd, BookmarkBorder, IntegrationInstructions, Person, RequestPage, RequestPageOutlined, RoomPreferences, RoomService, Route, TaskSharp } from "@mui/icons-material"
export const Perfil = () => {
    const { user } = useContext(AuthContext)
    const [value, setValue] = useState(0)
    const handleRoute = (route) => {
        setValue(route)
    }
    return (
        <Tag.MuiContainer>
            <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                height: '95%',
                width: '28%',
                border: Root.border
            }}>
                <Card sx={{
                    width: '90%',
                    boxShadow: 'none',
                    mt: 2,
                    borderRadius: '0px'
                }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="250"
                        image={user.photoURL}
                    />
                    <Stack sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${Root.color_app_bar}`,
                        width: '99%',
                        color: Root.color_button,
                        fontWeight: 'bold',
                        mt: 3
                    }} gutterBottom variant="h5" component="div">
                        {user.name}
                    </Stack>
                    {[{
                        name: 'Mood',
                        value: 'I am really happy!'
                    },

                    {
                        name: 'YouDo Kickoff',
                        value: 'Last year'
                    }].map((i, index) => {
                        return (
                            <Box key={index} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '99%',
                                height: '30px',
                                mt: index === 0 ? 4 : 1,

                                borderTop: `1px solid ${Root.color_app_bar}`
                            }}>
                                <Stack sx={{ fontWeight: '500', }}>
                                    {i.name}
                                </Stack>
                                <Stack>
                                    {i.value}
                                </Stack>
                            </Box>
                        )
                    })}
                    {[{
                        name: 'Personal Info',
                        icon: <Person />,
                        value: 0
                    },
                    {
                        name: 'Tasks',
                        icon: <TaskSharp />,
                        value: 1
                    },
                    {
                        name: 'Rooms',
                        icon: <RoomPreferences />,
                        value: 2
                    },
                    {
                        name: 'integration',
                        icon: <AccountTree />,
                        value: 3
                    },
                    {
                        name: 'Requests',
                        icon: <BookmarkBorder />,
                        value: 4
                    }].map((i, index) => {
                        const isRoute = value === index
                        return (
                            <Box
                                key={index}
                                onClick={
                                    () => handleRoute(i.value)
                                }
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    gap: 2,
                                    height: '38px',
                                    borderRadius: '2px',
                                    mt: index === 0 ? 4 : 1,
                                    transition: 'background-color 0.3s ease',
                                    color: isRoute ? Root.white : Root.black,
                                    bgcolor: isRoute ? Root.color_button : Root.color_app_bar,
                                    ':hover': {
                                        color: Root.white,
                                        cursor: 'pointer',
                                        bgcolor: Root.color_button,

                                    }
                                }}>
                                <Stack ml={1}>
                                    {i.icon}
                                </Stack>
                                <Stack>
                                    {i.name}
                                </Stack>
                                {isRoute && <Stack sx={{
                                    position: 'absolute',
                                    right: 4
                                }}>
                                    <Route fontSize="small" />
                                </Stack>}
                            </Box>
                        )
                    })}
                </Card>
            </Stack>
        </Tag.MuiContainer>
    )
}