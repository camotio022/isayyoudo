import { Fragment } from "react"
import { useMediaQuery } from '@mui/material';
import { MainContent } from "./components/MainContent";
import { useState } from "react";

export const MainLayout = ({ children }) => {
    const [opens, setopens] = useState(null)
    const [selectedLink, setSelectedLink] = useState()
    const [anchorEl, setAnchorEl] = useState(null)
    const handleOpenUserMenu = (e) => {
      setAnchorEl(e.target)
      setopens(true)
    }
    const handleSelectLink = (event, newLink) => {
      if (selectedLink === newLink) {
        setSelectedLink(null)
        return
      }
      setSelectedLink(newLink)
      setAnchorEl(event.target)
  
    }
    const handleClose = () => {
      setSelectedLink(null)
      setAnchorEl(null)
  
    }
    const handleClick = (event) => {
      setopens(event.currentTarget)
    }
    const Close = () => {
      setopens(null)
    }
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <MainContent
            isSmallScreen={isSmallScreen}
            handleClose={handleClose}
            Close={Close}
            handleClick={handleClick}
            children={children}
            handleSelectLink={handleSelectLink}
            handleOpenUserMenu={handleOpenUserMenu}
        />
    )
}