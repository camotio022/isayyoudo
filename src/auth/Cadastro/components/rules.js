export const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
        errors.name = 'Campo obrigatório';
    } else if (data.name.length > 30) {
        errors.name = 'Máximo de 30 caracteres permitidos';
    }
    if (!data.email) {
        errors.email = 'Campo obrigatório';
    } else if (!/^\S+@\S+\.com$/.test(data.email)) {
        errors.email = 'E-mail inválido';
    }
    if (!data.number) {
        errors.number = 'Campo obrigatório';
    } else if (data.number.length != 12) {
        console.log(data.number.length)
        errors.number = 'Número de celular inválido.';
    }
    if (!data.password) {
        errors.password = 'Campo obrigatório';
    }
    if (!data.confirmpassword) {
        errors.confirmpassword = 'Campo obrigatório';
    } else if (data.confirmpassword !== data.password) {
        errors.confirmpassword = 'Senhas não coincidem';
    }
    return errors;
};
