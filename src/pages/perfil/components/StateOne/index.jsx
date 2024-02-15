import { ArrowDropDown, ArrowRight, BrightnessHigh, Edit, Expand, Info, LocationOn, Note, Numbers } from "@mui/icons-material"
import { Box, Card, Stack } from "@mui/material"
import * as Tag from './index.js'
import { AuthContext } from "../../../../authcontext/index.jsx"
import { useContext } from "react"
import { Root } from "../../../../components/Global/Root/root_styles.jsx"
import { useState } from "react"
export const StateUserOne = () => {
    const [graphy, setGraphy] = useState(false)
    const { user } = useContext(AuthContext)
    const handleBioGraphy = () => {
        setGraphy(!graphy)
    }
    const items = [
        {
            icon: <Info />,
            title: 'Full Name',
            value: user.name,
        },
        {
            icon: <BrightnessHigh />,
            title: 'Date of birth',
            value: user?.birth,
        },
        {
            icon: <Numbers />,
            title: 'User number',
            value: (user.number),
        },
        {
            icon: <LocationOn />,
            title: 'Adress',
            value: user?.adress,
        },
    ]
    return (
        <>
            <Tag.ContainerPerfil>
                <Tag.CardPerfil>
                    <Tag.SettingsPerfil>
                        <Edit fontSize="small" />
                        Edit
                    </Tag.SettingsPerfil>
                    {items.map((item, index) => {
                        return (
                            <Tag.ItemPerfilUser key={index}>
                                <Tag.ItemPerfilUserIcon ml={3}>{item.icon}</Tag.ItemPerfilUserIcon>
                                <Stack>
                                    <Stack fontWeight={'bold'}>
                                        {item.title}
                                    </Stack>
                                    <span>{item.value}</span>
                                </Stack>
                            </Tag.ItemPerfilUser>
                        )
                    })}
                </Tag.CardPerfil>
                <Tag.CardPerfil sx={{ minHeight: '5em', padding: 0,width: '96.5%' }}>
                    <Tag.BiografyPerfil>
                        biography of this user
                    </Tag.BiografyPerfil>
                    <Tag.OpenBiografyPerfil sx={{
                        borderBottom: graphy && `1px solid ${Root.color_app_bar}`
                    }} onClick={(e) => handleBioGraphy(e)}>
                        <Tag.OpenBiografyPerfilLeftComponent>
                            <Note sx={{ marginInline: 2, }} />
                            <Box>
                                Click to <strong>{graphy? 'close': 'open'}</strong> biography
                            </Box>
                        </Tag.OpenBiografyPerfilLeftComponent>
                        <Tag.OpenBiografyPerfilRitghComponent sx={graphy && {
                            ...Root.hoverStatic
                        }}>
                            {graphy ? <ArrowDropDown /> : <ArrowRight />}
                        </Tag.OpenBiografyPerfilRitghComponent>
                    </Tag.OpenBiografyPerfil>
                    {graphy && <Stack sx={{
                        width: '95%',
                        paddingBlock: '10px'
                    }}>
                        {user?.bio}
                    </Stack>}
                </Tag.CardPerfil>
            </Tag.ContainerPerfil>
        </>
    )
}