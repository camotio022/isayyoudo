import * as React from 'react';
import Card from '@mui/joy/Card';
import * as Tag from './styles/index'
import CardContent from '@mui/joy/CardContent';
import { Avatar, Stack } from '@mui/material';
import { Root } from '../Global/Root/root_styles';
import { descriptionService } from '../../api/descriptions';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { LoCommAndDesc } from '../Loadinds/LoCommAndDesc';
import { FormatRelativeTime } from '../CommentsTasks/formatRelativeTime';
export const Descriptions = ({
    ismobilequery,
    colors,
    bg,
    taskId,
    task
}) => {
    const [descriptions, setDescriptions] = useState([])
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'descriptions'), async (snapshot) => {
            const descriptionsForTask = await descriptionService.description.getDescriptionsForTask(taskId);
            setDescriptions(descriptionsForTask);
        });
        return () => unsubscribe();
    }, [taskId]);
    if (descriptions.length === 0) {
        return (
            <LoCommAndDesc />
        )
    }
    console.log(descriptions)
    return (
        <>
            {descriptions.map((description, index) => {
                const dataCompleta = <FormatRelativeTime dateTimeString={description.timestamp} />
                return (
                    <Card
                        variant="outlined"
                        sx={{
                            mt: index === 0 ? 10 : 2,
                            mb: (descriptions.length - 1) === index && 10,
                            boxShadow: Root.boxShadow,
                            width: ismobilequery ? '80%' : 'max(92%, 60%)',
                            borderRadius: '8px', '--Card-radius': 0,
                            border: 'none'
                        }}
                    >
                        <CardContent orientation="horizontal" sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 0
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
                            <Tag.ShowTimes
                                ismobilequery={ismobilequery}
                                bg={bg}
                                colors={colors}
                                width={110}
                                height={44}
                            >
                                {dataCompleta}
                            </Tag.ShowTimes>
                        </CardContent>
                        <CardContent sx={{ gap: 0.5, mt: 0.4, zIndex: 0 }}>
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