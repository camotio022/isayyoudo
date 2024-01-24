import { Fragment, useContext, useState } from "react"
import { ContainerGlobal, ContainerGlobalChildrens } from "../../../components/Global/Styles/styles"
import { Menu as MuiMenu } from "@mui/icons-material"
import { AuthFooter } from "../../../components/Footer"
import { MenuItem, Stack } from "@mui/material"
import { TepsMenuTasks } from "../../../components/Teps/index.jsx"
import { Root } from "../../../components/Global/Root/root_styles.jsx"
import { Menu } from "../menu/index.jsx"
import { MenuMobile } from "../../../components/MenuMobile/index.jsx"
import { AuthContext } from "../../../authcontext/index.jsx"
import { taskStatusColors } from "../../../pages/createTasks/quirys/taskStatus.js"

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
    const { isCreatingTask, setIsCreatingTask } = useContext(AuthContext)
    const canSetColorMenu = isCreatingTask && isSmallScreen;
    const [showLinks, setShowLinks] = useState(false)
    if (isSmallScreen) {
        return (
            <ContainerGlobal>
                <Stack sx={{
                    position: 'fixed',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    height: 'auto',
                    top: '1rem',
                    width: '90%',
                    zIndex: !showLinks && 99999,
                }} >
                    <MuiMenu onClick={() => {
                        setShowLinks(!showLinks)
                    }} sx={{ height: 36, width: 36, color: canSetColorMenu &&  Root.color_button }} />
                    <MenuMobile canSetColorMenu={canSetColorMenu}/>
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