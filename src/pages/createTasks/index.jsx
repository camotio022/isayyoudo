import React, { useState } from 'react';
import * as Tag from './styles/index.js'
import image from './imgs/juggle---drop.gif'
import { Box, Stepper, Step, StepLabel, StepContent, Stack, TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { options } from './quirys/options.js';
import { Info, Timeline } from '@mui/icons-material';

const steps = [
    { label: 'Task Information:', icon: <Info /> },
    { label: 'Timeline Information:', icon: <Timeline /> },
    { label: 'Create an ad', icon: <AssignmentIcon /> }
];

export const CreateTask = () => {

    const [selectedType, setSelectedType] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [selecao, setSelecao] = useState('');
    const handleSelecao = (event) => {
        setSelecao(event.target.value);
    };
    const [taskDetails, setTaskDetails] = useState({
        title: '',
        description: '',
        responsible: '',
        startDate: '',
        dueDate: '',
        priority: '',
        tags: '',
        taskStatus: '',
        completionPercentage: '',
        comments: '',
        relatedTasks: '',
        requiredResources: '',
        communications: '',
        attachments: '',
        activityLogs: '',
        changeHistory: '',
        collaborators: []
    });
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    const handleChange = (event) => {
        setSelectedType(event.target.value);
    };
    const estiloSubtitulo = {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#000',
    };
    return (
        <Tag.ContentNewTask>
            <Tag.CardNewTask>
                <img src={image} alt="" style={{ width: '50%', height: '300px' }} />
                <Box textAlign={'center'} gap={3}>
                    <Typography variant='h3' component={'h3'}>
                        {
                            activeStep > 0 && `Step: ${activeStep}`
                        }
                    </Typography>
                    <Tag.ContainerDescription>
                        "Incentive a criação de tarefas para potencializar a realização de objetivos.
                        Transforme desafios em conquistas, fortalecendo a disciplina e motivação.
                        Comece hoje, dando passos pequenos em direção a um amanhã mais produtivo e satisfatório."
                    </Tag.ContainerDescription>
                </Box>
            </Tag.CardNewTask>
            <Tag.CardNewTask>
                <Stepper sx={{ width: '100%' }} alternativeLabel activeStep={activeStep < 1 ? 1 : activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel icon={activeStep > index ? 'OK' : step.icon}>
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Tag.CardNewTask>
            <Tag.ContainerTitleAndMOre>
                <Typography variant="h6" component="h2" style={estiloSubtitulo}>
                    Create a new task
                </Typography>
                {activeStep === 1 && (
                    <Stack flexDirection={'row'} sx={{ gap: 3, width: '100%' }}>
                        <TextField
                            fullWidth
                            required
                            size="small"
                            id="outlined-required"
                            label="Title"
                            placeholder='Enter your description here...'
                        />
                        <TextField
                            fullWidth
                            required
                            size="small"
                            id="outlined-required"
                            label="Description"
                            placeholder='Enter your new task here...'
                        />
                        <Select
                            fullWidth
                            size="small"
                            value={selecao}
                            onChange={handleSelecao}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Selecione uma opção' }}
                        >
                            <MenuItem value="" disabled>
                                Choose the collection type...
                            </MenuItem>
                            {options.map((opcao) => (
                                <MenuItem key={opcao.value} value={opcao.value}>
                                    {opcao.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                )}
                {activeStep === 2 && (
                    <Stack flexDirection={'row'} sx={{ gap: 3, width: '100%' }}>
                        <TextField
                            fullWidth
                            required
                            type='date'
                            size="small"
                            id="outlined-required"
                            label="Stard Date"
                            placeholder='Enter your Stard Date'
                        />
                        <TextField
                            fullWidth
                            required
                            type='date'
                            size="small"
                            id="outlined-required"
                            label="Delivery day"
                            placeholder='Enter your delivery date'
                        />
                        <TextField
                            fullWidth
                            required
                            size="small"
                            id="outlined-required"
                            label="priority"
                            placeholder='priority to who ( *email or user id )'
                        />
                    </Stack>
                )}
            </Tag.ContainerTitleAndMOre>
            <Tag.ContainerTitleAndMOre sx={{ flexDirection: 'row', justifyContent: 'flex-end', mt: 2 }} spacing={2}>
                <Button
                    sx={{ width: activeStep === 2 && '20%', transition: 'all .4s' }}
                    variant="contained" onClick={handleBack} disabled={activeStep === 0}>
                    Back
                </Button>
                <Button
                    sx={{ width: activeStep === 1 && '20%', transition: 'all .4s' }}
                    variant="contained" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Tag.ContainerTitleAndMOre>

            {activeStep === steps.length && (
                <Box sx={{ mt: 2 }}>
                    <Typography>All steps completed - you're finished</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
            )}

        </Tag.ContentNewTask>
    );
};