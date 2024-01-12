import { Fragment, useState } from "react"
import { ContainerGlobal, ContainerGlobalChildrens } from "../../../components/Global/Styles/styles"
import { Menu as MuiMenu } from "@mui/icons-material"
import { AuthFooter } from "../../../components/Footer"
import { MenuItem, Stack } from "@mui/material"
import { TepsMenuTasks } from "../../../components/Teps/index.jsx"
import { Root } from "../../../components/Global/Root/root_styles.jsx"
import { Menu } from "../menu/index.jsx"

export const MainContent = ({
    children,
    selectedLink,
    anchorEl,
    handleClose,
    open,
    Close,
    handleSelectLink,
    handleOpenUserMenu,
    isSmallScreen
}) => {
    const [showLinks, setShowLinks] = useState(false)
    if (isSmallScreen) {
        return (
            <ContainerGlobal>
                <Stack sx={{
                    position: 'fixed',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    cursor: 'pointer',
                    top: '1rem',
                    right: '1rem',
                    zIndex: !showLinks&& 99999,
                }} onClick={() => {
                    setShowLinks(!showLinks)
                }}>
                    <MuiMenu sx={{ height: 36, width: 36 }} />
                </Stack>
                {showLinks && <Menu
                    selectedLink={selectedLink}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    open={open}
                    Close={Close}
                    handleSelectLink={handleSelectLink}
                    handleOpenUserMenu={handleOpenUserMenu}
                    setShowLinks={setShowLinks}
                    showLinks={showLinks}
                />}
                {children}
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