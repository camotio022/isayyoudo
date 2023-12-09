import { Avatar, Box, Button, Popover, Stack, Tooltip, Typography } from '@mui/material'
import * as T from './styles/index.js'
import { Assignment, Check, Circle, Event, EventAvailable, MarkUnreadChatAlt, MoreHoriz } from '@mui/icons-material'
import { Root } from '../Global/Root/root_styles.jsx'

export const TaskCard = () => {
    return (
        <T.TabsMain>
            <Assignment sx={{ margin: '1rem', color: Root.gray_desfius }} />
            <Stack sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '10px',
                width: '20%',
                height: '5rem',
            }}>
                <Typography sx={{
                    color: Root.black,
                    fontSize: '12px',
                    fontWeight: '900'
                }}>
                    Mobile Marvel: Crafting a Cutting-Edge Cell Phone Design
                </Typography>
                <Stack sx={{
                    backgroundColor: Root.subButton,
                    paddingInline: '5px',
                    fontSize: '12px',
                    borderRadius: '30px',
                    color: Root.green
                }}>
                    Design && marked
                </Stack>
            </Stack>

            <Stack sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '10px',
                width: '20%',
                height: '5rem',
            }}>
                <Typography sx={{
                    color: Root.black,
                    fontSize: '12px',
                    fontWeight: '900'
                }}>
                    Mobile Marvel<br />
                    <Stack sx={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: Root.gray_desfius
                    }}>
                        assigner
                    </Stack>
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    color: Root.green,
                    gap: '4px',
                    fontSize: '12px',
                }}>
                    <Stack color={Root.black}>Delivery:</Stack>
                    <Tooltip
                        title={
                            <Stack
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '10px',
                                    gap: '4px'
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    fontWeight: 900,
                                    width: '100%',
                                }}>
                                    <Circle fontSize='5px' style={{ marginRight: '4px' }} />
                                    20 de dezembro<br />Started date
                                </Box>
                                <Stack sx={{
                                    height: '1rem',
                                    width: '90%',
                                    borderLeft: '4px solid white'
                                }}></Stack>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    fontWeight: 900,
                                    width: '100%',
                                }}>
                                    <Check fontSize='5px' style={{ marginRight: '4px' }} />
                                    25 de dezembro<br />Estimated delivery
                                </Box>
                            </Stack>
                        }
                        arrow
                        placement="top"
                        style={{
                            color: 'gray',
                            borderBottom: '1px solid'
                        }}
                    >
                        missing 5 days
                    </Tooltip>
                </Box>
            </Stack>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                width: '20%',
                height: '5rem',
            }}>
                <Avatar src='https://scontent.fbfh23-1.fna.fbcdn.net/v/t39.30808-6/396279418_1057534295418619_61775625902256478_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEePOtEpt1nEJY0nxVwcLgAwN6GYrlCLU7A3oZiuUItTh-TyTynO_FsOQe7Gf421ZVVpFQukBVynQaT3MfevC1d&_nc_ohc=ou9xTUki5mIAX_kr2Sr&_nc_ht=scontent.fbfh23-1.fna&oh=00_AfC3tJ3Y5OqULPRhoaUjdNZvOKRShFNu578ghNMZsno_EA&oe=657905B4'></Avatar>
                <Typography sx={{
                    color: Root.black,
                    fontSize: '12px',
                    fontWeight: '900'
                }}>
                    Mobile Marvel<br />
                    <Stack sx={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: Root.gray_desfius
                    }}>
                        assigned to
                    </Stack>
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '25%',
                height: '5rem',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '8px',
                    height:'40%',
                    width: '6rem',
                    paddingLeft: '8px',
                    border:'1px solid gray',
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}>
                    <Stack sx={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: Root.pink
                    }}>
                    </Stack>
                    verify
                </Box>
                <MarkUnreadChatAlt/>
                <MoreHoriz/>
            </Box>
        </T.TabsMain>
    )
}