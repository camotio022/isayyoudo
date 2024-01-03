import * as Tag from './styles/index.js';
import image from './imgs/juggle---drop.gif';
import {
    Box,
    Button,
    Select,
    MenuItem,
    Stack,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    TextField,
    Typography,
    styled,
} from '@mui/material';
import { useState } from 'react';
import { options } from './quirys/options.js';
export const CreateTask = () => {
    const [activeStep, setActiveStep] = useState(0);
    
    const [selecao, setSelecao] = useState('');
    const handleChange = (event) => {
        setSelecao(event.target.value);
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
                <img src={image} alt="" style={{
                    width: '50%',
                    height: '300px',
                }} />
                <Tag.ContainerDescription>
                    "Incentive a criação de tarefas para potencializar a realização de objetivos.
                    Transforme desafios em conquistas, fortalecendo a disciplina e motivação.
                    Comece hoje, dando passos pequenos em direção a um amanhã mais produtivo e satisfatório."
                </Tag.ContainerDescription>
            </Tag.CardNewTask>
            <Box>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {options.map((stepLabel, index) => (
                        <Step key={stepLabel}>
                            <StepLabel>{stepLabel}</StepLabel>
                            <StepContent>
                                <Stack flexDirection={'row'} sx={{ gap: 3, width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Title task"
                                        placeholder="Enter your new task here..."
                                    />
                                    <Select
                                        fullWidth
                                        size="small"
                                        value={selecao}
                                        onChange={handleChange}
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
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="contained" onClick={handleBack} disabled={activeStep === 0}>
                                            Back
                                        </Button>
                                        <Button variant="contained" onClick={handleNext}>
                                            {activeStep === options.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Stack>
                                </Stack>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === options.length && (
                    <Box sx={{ mt: 2 }}>
                        <Typography>All steps completed - you're finished</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                )}
            </Box>


            {/* <Tag.ContainerTitleAndMOre>
                <Typography variant="h6" component="h2" style={estiloSubtitulo}>
                    Create a new task
                </Typography>
                <Stack flexDirection={'row'} sx={{ gap: 3, width: '100%' }}>
                    <TextField
                        fullWidth
                        required
                        size="small"
                        id="outlined-required"
                        label="Title task"
                        placeholder='Enter your new task here...'
                    />
                    <Select
                        fullWidth
                        size="small"
                        value={selecao}
                        onChange={handleChange}
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
                    <Button fullWidth variant='contained'>Next</Button>
                </Stack>
            </Tag.ContainerTitleAndMOre> */}
        </Tag.ContentNewTask >
    )
}