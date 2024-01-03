import { Box, Typography } from "@mui/material"
import * as Tag from '../../styles/index.js'
export const CardTopCreateTask = ({
    image, activeStep
}) => {
    return (
        <>
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
        </>
    )
}