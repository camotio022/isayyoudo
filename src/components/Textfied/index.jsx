import { Grid, InputAdornment, TextField } from "@mui/material"
import { purple } from "@mui/material/colors"
import { useState } from "react";
import { formatingNumber } from "./components";

export const MyTextField = ({
    variant,
    fullWidth,
    icon,
    type,
    error,
    onChange,
    name,
    value,
    ...props
}) => {
    const [Isvalue, setIsValue] = useState("");
    const isNumberField = name === "number";
    const handleChange = (e) => {
        const valorDigitado = e.target.value;
        if (isNumberField) {
            const numeroFormatado = formatingNumber(valorDigitado);
            setIsValue(numeroFormatado);
            if (onChange) {
                const numeroLimpo = valorDigitado.replace(/\D/g, "");
                onChange(numeroLimpo);
            }
        } else {
            setIsValue(valorDigitado);
            if (onChange) {
                onChange(valorDigitado);
            }
        }
    };
    return (
        <>
            <Grid item xs={12} lg={12} sx={{ mb: 1, width: '100%' }}>
                <TextField
                    sx={{ position: 'relative', zIndex: 0, width: '100%' }}
                    size="small"
                    required
                    fullWidth
                    type={type}
                    variant={variant || 'filled'}
                    InputProps={icon && {
                        startAdornment: (
                            <InputAdornment position="start">
                                {icon}
                            </InputAdornment>
                        ),
                    }}
                    value={Isvalue}
                    onChange={handleChange}
                    {...props}
                />
                <span style={{ fontSize: '12px', color: purple[300] }}>{error}</span>
            </Grid>
        </>
    )
}