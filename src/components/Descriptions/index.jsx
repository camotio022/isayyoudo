import * as React from 'react';
import Card from '@mui/joy/Card';
import * as Tag from './styles/index'
import CardContent from '@mui/joy/CardContent';
import { Avatar, Menu, MenuItem, Stack } from '@mui/material';
import { Root } from '../Global/Root/root_styles';
import { descriptionService } from '../../api/descriptions';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { LoCommAndDesc } from '../Loadinds/LoCommAndDesc';
import { FormatRelativeTime } from '../CommentsTasks/formatRelativeTime';
import { Archive, Delete, Edit } from '@mui/icons-material';
export const Descriptions = ({
    ismobilequery,
    colors,
    bg,
    taskId,
    task
}) => {
    const [descriptions, setDescriptions] = useState([])
    const [openItemId, setOpenItemId] = useState(null);

    const handleClick = (itemId) => {
        setOpenItemId((prevOpenItemId) => (prevOpenItemId === itemId ? null : itemId));
    };
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

    return (
        <>
            {descriptions.map((description, index) => {
                const dataCompleta = <FormatRelativeTime dateTimeString={description.timestamp} />
                return (
                    <Card
                        key={index}
                        onClick={() => handleClick(index)}
                        variant="outlined"
                        sx={{
                            mt: index === 0 ? 10 : 2,
                            mb: (descriptions.length - 1) === index && 10,
                            boxShadow: 'box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                            width: ismobilequery ? '90%' : 'max(92%, 60%)',
                            borderRadius: '8px', '--Card-radius': 0,
                            minHeight: openItemId === index && 200,
                            transition: 'all 1s'
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
                        {openItemId === index && <Tag.Colpax>
                            <Stack sx={{
                                color: Root.white,
                                backgroundColor: Root.color_button
                            }}>
                                <Tag.item disableRipple>
                                    <Edit />
                                    Edit
                                </Tag.item>
                                <Tag.item >
                                    <Archive />
                                    Archived
                                </Tag.item>
                                <Tag.item >
                                    <Delete />
                                    Delete
                                </Tag.item>
                            </Stack>
                        </Tag.Colpax>}
                    </Card>
                )
            })}
        </>
    );
}