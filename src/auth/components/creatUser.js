
const submtForum = async () => {
    const isAnyFieldFilled = Object.values(datasFocos).some((value) => value !== false);
    setProgress(true);
    if (isAnyFieldFilled) {
        setShowAlert('Um dos campos não está preenchido, por favor preencha.');
        setProgress(true);
        return
    }
    if (data.password.length < 6) {
        setProgress(false);
        setShowAlert('A senha deve ter pelo menos 6 caracteres.');
        setOpen(true);
        return;
    }
    try {
        setProgress(true);
        const response = await api_users.user.post(data); // Substitua 'data' pelos dados do formulário
        setProgress(false);
    } catch (err) {
        setShowAlert(err.message || 'Erro desconhecido ao criar o usuário e vincular o perfil.');
        setOpen(true);
        setProgress(false);
    }
};