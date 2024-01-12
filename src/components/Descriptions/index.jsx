import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Skeleton from '@mui/joy/Skeleton';
import { Avatar, Stack } from '@mui/material';
import { Root } from '../Global/Root/root_styles';
import { descriptionService } from '../../api/descriptions';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
export const Descriptions = ({
    isMobileQuery,
    colors,
    backgroundColor,
    taskId = { task }
}) => {
    const [descriptions, setDescriptions] = useState([])
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'descriptions'), async (snapshot) => {
            const descriptionsForTask = await descriptionService.description.getDescriptionsForTask(taskId);
            setDescriptions(descriptionsForTask);
        });
        return () => unsubscribe();
    }, [taskId]);
    return (
        <>
            {descriptions.map((description, index) => {
                return (
                    <Card
                        variant="outlined"
                        sx={{
                            mt: index === 0 ? 7 : 2,
                            mb: descriptions.length - 1 === index && 7,
                            boxShadow: Root.boxShadow,
                            width: isMobileQuery ? '80%' : 'max(92%, 60%)',
                            borderRadius: '8px', '--Card-radius': 0,
                            border: 'none'
                        }}
                    >
                        <CardContent orientation="horizontal" sx={{
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <Avatar
                                src={description.author.avatar}
                                variant="rectangular"
                                width={44}
                                height={44}
                            />
                            <Stack variant="text" width={100} sx={{
                                fontWeight: 600
                            }}>
                                {description.author.name}
                            </Stack>
                            <Stack sx={{
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "center",
                                bgcolor: backgroundColor ? backgroundColor : Root.color_button_opacity,
                                right: 0,
                                borderRight: `0.5rem solid ${colors ? colors : Root.color_button}`,
                                color: Root.black,
                                fontSize: 14
                            }} variant="rectangular" width={100} height={44} >
                                {description.timestamp.split(',')[0]}
                                <br />
                                <span style={{fontWeight: 400}}>
                                    {description.timestamp.split(',')[1]}
                                </span>
                            </Stack>
                        </CardContent>
                        <CardContent sx={{ gap: 0.5, mt: 0.4 }}>
                            <Stack level="body-xs" color="text.secondary" width="100%">
                                {description.content}
                            </Stack>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    );
}