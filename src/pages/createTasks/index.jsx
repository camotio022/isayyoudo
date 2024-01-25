import React, { useContext, useState } from 'react';
import * as Tag from './styles/index.js'
import image from './imgs/juggle---drop.gif'
import { Box, Stepper, Step, StepLabel, Button, Typography, Stack, useMediaQuery } from '@mui/material';
import { Delete, Info, Preview, Save, Timeline, Warning } from '@mui/icons-material';
import { StepOne } from './components/StepOne/index.jsx';
import { StepTwo } from './components/StepTwo/index.jsx';
import { AuthContext } from '../../authcontext/index.jsx';
import { Root } from '../../components/Global/Root/root_styles.jsx';
import { StepThree } from './components/StepThree/index.jsx';
import { LoadingButton } from '@mui/lab';
import { CardTopCreateTask } from './components/cardTop/index.jsx';
import { PreviewTask } from './components/PreviewTask/index.jsx';
import { taskService } from '../../api/tasks/addTask.js';
const steps = [
    { label: 'Task Information:', icon: <Info /> },
    { label: 'Timeline Information:', icon: <Timeline /> },
    { label: 'Relevant Fields', icon: <Warning /> },
    { label: 'Preview Task', icon: <Preview /> }
];
export const CreateTask = () => {
    const { isCreatingTask, setIsCreatingTask } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const ismobilequery = useMediaQuery('(max-width:600px)');
    const canSetColorMenu = isCreatingTask && ismobilequery;
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
    const nullStateTasks = {
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
        collaborators: [],
    };

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
    const createTasksNow = async () => {
        try {
            const createTask = await taskService.task.post(taskDetails)
            setTaskDetails(nullStateTasks)
            setActiveStep(1)
            console.log("tarefa adicionada com sucesso!!", createTask);
        } catch (err) {
            console.error(err);
        }
    };

    const handleNext = () => {
        const canNextStepOne = taskDetails.title && taskDetails.typeCollection;
        if (activeStep === 0 && canNextStepOne) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else if (activeStep === 2 && taskDetails.priority && taskDetails.taskStatus) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else if (activeStep === 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else if (activeStep === 3) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            alert('Por favor preencha os campos obrigadórios!!')
        }
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
        <Tag.ContentNewTask ismobilequery={ismobilequery} bg={taskDetails.taskStatus}>
            {!ismobilequery && <CardTopCreateTask image={image} activeStep={activeStep} />}
            <Tag.CardNewTask ismobilequery={ismobilequery}>
                <Stepper sx={{ width: '100%' }} alternativeLabel activeStep={activeStep < 1 ? 1 : activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel
                                icon={activeStep > index ? 'OK' :
                                    <Stack sx={{
                                        color: activeStep > index ? Root.green : Root.color_button,
                                        borderRadius: '50%',
                                        border: canSetColorMenu ? `1px solid ${Root.color_button}` : Root.border,
                                        padding: '6px',
                                    }}>{step.icon}</Stack>}>
                                <span style={{
                                    color: canSetColorMenu && Root.color_button,
                                    fontWeight: canSetColorMenu && 600
                                }}>{step.label}</span>
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
                            ismobilequery={isCreatingTask}
                            handleInputChange={handleInputChange}
                            handleSelecao={handleSelecao}
                            taskDetails={taskDetails}
                        />)
                }
                {activeStep === 1 && (
                    <StepTwo
                        ismobilequery={isCreatingTask}
                        handleInputChange={handleInputChange}
                        taskDetails={taskDetails}
                    />
                )}
                {activeStep === 2 && (
                    <StepThree
                        ismobilequery={isCreatingTask}
                        handleInputChange={handleInputChange}
                        taskDetails={taskDetails}
                        setTaskDetails={setTaskDetails}
                    />
                )}
                {activeStep === 3 && (
                    <PreviewTask
                        isCreatingTask={isCreatingTask}
                        taskDetails={taskDetails} />
                )}
                {activeStep === steps.length && (
                    <Box sx={{ mt: 2, gap: 2 }}>
                        <Typography sx={{
                            padding: 1,
                            mb: 3,
                            backgroundColor: Root.color_button_opacity,
                            color: Root.color_button,
                            fontWeight: 600
                        }}>
                            You have finished the registration steps
                            for the {taskDetails.title} task, do you want to create it?
                        </Typography>
                        <Button size="small"
                            sx={{
                                backgroundColor: Root.red,
                                fontWeight: 600
                            }}
                            variant="contained"
                            startIcon={<Delete />}
                            onClick={handleReset}>
                            Reset
                        </Button>
                    </Box>
                )}
            </Tag.ContainerTitleAndMOre>
            <Tag.ContainerTitleAndMOre sx={{ flexDirection: 'row', justifyContent: 'flex-end', mt: 2 }} spacing={2}>
                <Button
                    size={"small"}
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
                        size={"small"}
                        sx={{ width: activeStep === 1 && '20%', transition: 'all .4s' }}
                        variant="contained" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                }
            </Tag.ContainerTitleAndMOre>
        </Tag.ContentNewTask>
    );
};