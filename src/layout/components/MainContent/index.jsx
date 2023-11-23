import { Fragment } from "react"
import { ContainerGlobal, ContainerGlobalChildrens } from "../../../components/Global/Styles/styles"
import { Menu } from "../menu"
import { AuthFooter } from "../../../components/Footer"

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
            {children}
            <AuthFooter />
        </ContainerGlobal>
    )
}