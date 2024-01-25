import { Stack, TextField, Select, MenuItem } from '@mui/material';
import { options } from '../../quirys/options.js';
export const StepOne = ({
    taskDetails, handleInputChange, handleSelecao, ismobilequery
}) => {
    return (
        <>
            <Stack flexDirection={'row'} sx={ismobilequery?{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap', gap: 3, width: '100%'
            }:{
                gap: 3, width: '100%'
            }}>
                <TextField
                    name="title"
                    value={taskDetails.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    fullWidth
                    required
                    size="small"
                    id="outlined-required"
                    label="Title"
                    placeholder='Enter your description here...'
                />
                <TextField
                    name="description"
                    value={taskDetails.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
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
                    value={taskDetails.typeCollection}
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
        </>
    )
}