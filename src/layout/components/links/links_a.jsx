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
  const isRoute = location.pathname === link;

  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenuLinks}>
      <ListItemButton
        sx={{
          color: Root.gray,
          transition: 'all .2s ease-in-out',
          borderLeft: isRoute && `5px solid ${Root.color_button}`,
          borderRight: isRoute && Root.border,
          boxShadow: isRoute && Root.boxS,
          ':hover': {
            borderLeft: `2px solid ${Root.color_button}`,
          }
        }}
      >
        <ListItemIcon sx={{
          color: isRoute ?
            Root.color_button :
            Root.gray
        }}>{icon}</ListItemIcon>
        <ListItemText sx={isRoute && {
          color: Root.color_button,
        }} primary={name} />
        {canShowAlert && (
          <Badge
            badgeContent={
              <NotificationCounter>
                {10} {/* Conteúdo do contador de notificações */}
              </NotificationCounter>
            }
          />
        )}
      </ListItemButton>
    </Link>

  );
};
