import {
  Badge,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Root } from '../../../components/Global/Root/root_styles';
import { NotificationCounter } from '../../../components/Global/Styles/styles';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
export const Links_a = ({
  name,
  link,
  icon,
  canShowAlert,
  closeMenuLinks,
}) => {
  const location = useLocation();
  const isRoute = location.pathname === link
  return (
    <>
      <Link to={link} >
        <ListItemButton onClick={closeMenuLinks} style={{
          transition: 'all .2s ease-in-out',
          borderLeft: isRoute && `2px solid${Root.color_button}`
        }}
          sx={{ color: Root.gray }} >
          <ListItemIcon sx={{ color: Root.gray }}>{icon}</ListItemIcon>
          <ListItemText primary={name} />
          {canShowAlert &&
            <Badge
              badgeContent={
                <NotificationCounter>
                  {10}
                </NotificationCounter>
              }
            />}
        </ListItemButton>
      </Link>
    </>
  );
};
