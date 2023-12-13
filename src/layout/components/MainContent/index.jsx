import { Fragment } from "react"
import { ContainerGlobal, ContainerGlobalChildrens } from "../../../components/Global/Styles/styles"
import { Menu } from "../menu"
import { AuthFooter } from "../../../components/Footer"
import { Stack } from "@mui/material"
import { TepsMenuTasks } from "../../../components/Teps/index.jsx"

export const MainContent = ({
    children,
    selectedLink,
    anchorEl,
    handleClose,
    open,
    Close,
    handleSelectLink,
    handleOpenUserMenu,
    showLinks,
    setShowLinks,
    isSmallScreen
}) => {
    if (isSmallScreen) {
        return (
            <ContainerGlobal>
                {children}
                <AuthFooter />
            </ContainerGlobal>
        )
    }
    return (
        <ContainerGlobal sx={{
            flexDirection: "row !important"
        }}>
            <Menu
                selectedLink={selectedLink}
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
                Close={Close}
                handleSelectLink={handleSelectLink}
                handleOpenUserMenu={handleOpenUserMenu}
                showLinks={showLinks}
                setShowLinks={setShowLinks}
            />
            <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: "100%",
                height: "100vh",
                gap: '1rem',
            }}>
                <TepsMenuTasks />
                {children}
            </Stack>
        </ContainerGlobal>
    )
}