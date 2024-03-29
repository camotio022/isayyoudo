import {
  Badge,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Root } from '../../../components/Global/Root/root_styles';
import { NotificationCounter } from '../../../components/Global/Styles/styles';
import { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../../authcontext';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export const Links_a = ({
  name,
  link,
  icon,
  canShowAlert,
  closeMenuLinks,
}) => {
  const [mytasks, setMyTasks] = useState([])
  const { user } = useContext(AuthContext)
  const location = useLocation();
  const isRoute = location.pathname === link;
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const q = query(collection(db, 'tasks'), where('assignerId', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const tasks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMyTasks(tasks);
        });
        return unsubscribe;
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };
    fetchTasks();
  }, [user])
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenuLinks}>
      <ListItemButton
        sx={{
          color: Root.black,
          transition: 'all .2s ease-in-out',
          borderLeft: isRoute && `5px solid ${Root.color_button}`,
          borderRight: isRoute && `2px solid ${Root.color_button_opacity}`,
          boxShadow: isRoute && Root.boxS,
          ':hover': {
            borderLeft: `2px solid ${Root.color_button}`,
          }
        }}
      >
        <ListItemIcon sx={{
          color: isRoute ?
            Root.color_button :
            Root.black
        }}>{icon}</ListItemIcon>
        <ListItemText sx={isRoute && {
          color: Root.color_button,
        }} primary={name} />
        {canShowAlert && (
          <Badge
            badgeContent={
              <NotificationCounter>
                {mytasks.length}
              </NotificationCounter>
            }
          />
        )}
      </ListItemButton>
    </Link>

  );
};
