import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Avatar, Box, CardContent, CardHeader, Divider, MenuItem, Stack, Typography } from '@mui/material';
import { AdUnits, AppShortcut, ChatBubble, Comment, EventNote, Message, MoreHoriz, Notifications, Settings, SystemUpdate } from '@mui/icons-material';
import { Root } from '../Global/Root/root_styles';
import * as Tag from './styles/index.js'
import { notificationsMasks } from './mask/index.js';


export const DrawerNotification = ({
    open,
    toggleDrawer,
}) => {
    const notificationIcons = {
        message: <Message fontSize='small' />,
        order: <AdUnits />,
        system_update: <SystemUpdate />,
        event_reminder: <EventNote />,
        special_offer: <AppShortcut />,
    };
    const texte = 'Notifications'
    return (
        <div>
            <Tag.ContainerDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Tag.ContainerNotifications
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Tag.AppBarNotifications >
                        <Tag.TitleTypho ml={2} canUpper={true}>
                            {texte}
                        </Tag.TitleTypho>
                        <Tag.SettingsIcon sx={{mr:2}}/>
                    </Tag.AppBarNotifications>
                </Tag.ContainerNotifications>


                {notificationsMasks.map((notification, index) => {
                    return (
                        <Tag.NotificationComponent
                            key={index}
                            sx={{ bgcolor: notification.isRead && Root.color_app_bar }}
                            first={
                                index === 0} last={
                                    index
                                    ===
                                    notificationsMasks.length - 1
                                }
                        >
                            <Tag.WrapperNotification>
                                {notification.type !== 'message' && <Avatar sx={{
                                    color: Root.color_button,
                                    border: `1px solid ${Root.color_app_bar}`,
                                    bgcolor: Root.color_app_bar,
                                    boxShadow: Root.boxS
                                }}>
                                    {notificationIcons[notification.type]}
                                </Avatar>}
                                {notification.type === 'message' && <Tag.AvatarCommentNotification >
                                    <Tag.AvatarCommentActionFlutuente>
                                        <ChatBubble fontSize='small' sx={{ color: Root.color_button }} />
                                    </Tag.AvatarCommentActionFlutuente>
                                    <Stack sx={{ color: Root.cyan }}>
                                        {notificationIcons[notification.type]}
                                    </Stack>
                                </Tag.AvatarCommentNotification>}
                                <span>
                                    <Stack ml={2}>
                                        <Tag.TitleTypho>
                                            {notification.title}
                                        </Tag.TitleTypho>
                                        <Tag.ContentNotifications variant='subtitle1' sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexWrap: 'wrap',
                                            minHeight: '1rem',
                                            color: notification.isRead ? Root.color_button : Root.gray_desfius
                                        }}>
                                            {notification.content}
                                        </Tag.ContentNotifications>

                                    </Stack>
                                    <Typography variant='subtitle2' ml={2} sx={{
                                        color: notification.isRead ? Root.color_button : Root.gray_desfius
                                    }}>
                                        {'Janeiro de 2023'}
                                    </Typography>
                                </span>
                                <Stack sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 2,
                                    color: Root.gray_desfius,
                                    right: 0,
                                    border: `1px solid ${Root.color_app_bar}`
                                }}>
                                    <MoreHoriz />
                                </Stack>
                            </Tag.WrapperNotification>
                        </Tag.NotificationComponent>
                    )
                })}
            </Tag.ContainerDrawer>
        </div>
    );
};
