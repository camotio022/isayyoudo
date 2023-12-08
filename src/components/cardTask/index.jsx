import { Box, Button, Popover, Stack, Tooltip, Typography } from '@mui/material'
import * as T from './styles/index.js'
import { Assignment, Check, Circle, Event, EventAvailable } from '@mui/icons-material'
import { Root } from '../Global/Root/root_styles.jsx'
import { useState } from 'react'
export const TaskCard = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <T.TabsMain>
            <Assignment sx={{ margin: '1rem', color: Root.gray_desfius }} />
            <Stack sx={{
                // bgcolor: 'red',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '10px',
                width: '30%',
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
                    color: Root.green,
                    padding: '5px',
                    fontSize: '12px',
                    borderRadius: '30px',

                }}>
                    Design && marked
                </Stack>
            </Stack>

            <Stack sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '10px',
                width: '30%',
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
                                    20 de dezembro<br/>Started date
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
                                    25 de dezembro<br/>Estimated delivery
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
        </T.TabsMain>
    )
}