import React, { useContext, useState } from 'react';
import * as Tag from './styles/index.js'
import image from './imgs/juggle---drop.gif'
import { Box, Stepper, Step, StepLabel, Button, Typography, Stack } from '@mui/material';
import { Info, Save, Timeline, Warning } from '@mui/icons-material';
import { StepOne } from './components/StepOne/index.jsx';
import { StepTwo } from './components/StepTwo/index.jsx';
import { AuthContext } from '../../authcontext/index.jsx';
import { Root } from '../../components/Global/Root/root_styles.jsx';
import { StepThree } from './components/StepThree/index.jsx';
import { LoadingButton } from '@mui/lab';
const steps = [
    { label: 'Task Information:', icon: <Info /> },
    { label: 'Timeline Information:', icon: <Timeline /> },
    { label: 'Relevant Fields', icon: <Warning /> }
];

export const CreateTask = () => {
    const { user } = useContext(AuthContext)
    const [activeStep, setActiveStep] = useState(0);
    const [taskDetails, setTaskDetails] = useState({
        title: '',
        description: '',
        typeCollection: '',
        startDate: '',
        deliveryDate: '',
        assigned: '',
        priority: '',
        taskStatus: '',
        estimated: '',
        assigner: user.displayName,
        assignerPhotoURL: user.photoURL,
        assignerId: user.uid,
        assignerTasksCreated: 0,
        tags: '',
        completionPercentage: '',
        requiredResources: '',
        communications: '',
        attachments: '',
        activityLogs: '',
        changeHistory: '',
        comments: [],
        relatedTasks: [],
        responsibles: [],
        collaborators: []
    });
    const handleSelecao = (event) => {
        const selectedValue = event.target.value;
        setTaskDetails((prevTaskDetails) => ({
            ...prevTaskDetails,
            typeCollection: selectedValue,
        }));
    };
    const handleInputChange = (fieldName, value) => {
        setTaskDetails((prevTaskDetails) => {
            let updatedDetails = {
                ...prevTaskDetails,
                [fieldName]: fieldName.includes('Date') ? new Date(value) : value,
            };
            const deliveryDate = new Date(updatedDetails.deliveryDate);
            const startDate = new Date(updatedDetails.startDate);
            if (fieldName === 'deliveryDate' && deliveryDate < startDate) {
                updatedDetails = {
                    ...updatedDetails,
                    startDate: '',
                };
            }
            if (fieldName === 'startDate' && startDate > deliveryDate) {
                updatedDetails = {
                    ...updatedDetails,
                    deliveryDate: '',
                };
            }
            return updatedDetails;
        });
    };
    const createTasksNow = () => {
        try {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(taskDetails);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            const defaultTaskDetails = {
                title: '',
                description: '',
                typeCollection: '',
                startDate: '',
                deliveryDate: '',
                assigned: '',
                priority: '',
                taskStatus: '',
                estimated: '',
                assigner: user.displayName,
                assignerPhotoURL: user.photoURL,
                assignerId: user.uid,
                assignerTasksCreated: 0,
                tags: '',
                completionPercentage: '',
                requiredResources: '',
                communications: '',
                attachments: '',
                activityLogs: '',
                changeHistory: '',
                comments: [],
                relatedTasks: [],
                responsibles: [],
                collaborators: []
            };
            setTaskDetails(defaultTaskDetails);
            console.log("Tareas guardadas:", tasks);
            console.log("Detalles de la tarea actualizados:", taskDetails);
        } catch (err) {
            console.error(err);
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
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
                            <StepLabel
                                icon={activeStep > index ? 'OK' :
                                    <Stack sx={{
                                        color: activeStep > index ? Root.green : Root.color_button,
                                        borderRadius: '50%',
                                        border: Root.border,
                                        padding: '2px',
                                    }}>{step.icon}</Stack>}>
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
                {
                    activeStep === 0 && (
                        <StepOne
                            handleInputChange={handleInputChange}
                            handleSelecao={handleSelecao}
                            taskDetails={taskDetails}
                        />)
                }
                {activeStep === 1 && (
                    <StepTwo
                        handleInputChange={handleInputChange}
                        taskDetails={taskDetails}
                    />
                )}
                {activeStep === 2 && (
                    <StepThree
                        handleInputChange={handleInputChange}
                        taskDetails={taskDetails}
                        setTaskDetails={setTaskDetails}
                    />
                )}
                {activeStep === steps.length && (
                    <Box sx={{ mt: 2 }}>
                        <Typography>

                            You have finished the registration steps
                            for the {taskDetails.title} task, do you want to create it?
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                )}
            </Tag.ContainerTitleAndMOre>
            <Tag.ContainerTitleAndMOre sx={{ flexDirection: 'row', justifyContent: 'flex-end', mt: 2 }} spacing={2}>
                <Button
                    sx={{ width: activeStep === 2 && '20%', transition: 'all .4s' }}
                    variant="contained" onClick={handleBack} disabled={activeStep === 0}>
                    Back
                </Button>
                {activeStep === steps.length ?
                    <LoadingButton
                        size="small"
                        color="secondary"
                        loading={''}
                        onClick={createTasksNow}
                        loadingPosition="start"
                        startIcon={<Save />}
                        variant="contained"
                    >
                        <span>Create</span>
                    </LoadingButton> :
                    <Button
                        sx={{ width: activeStep === 1 && '20%', transition: 'all .4s' }}
                        variant="contained" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                }
            </Tag.ContainerTitleAndMOre>


        </Tag.ContentNewTask>
    );
};