export const formatingNumber = (valor) => {
    const numeroLimpo = valor.replace(/\D/g, "");
    let numeroFormatado = "";

    if (numeroLimpo.length >= 2) {
        numeroFormatado = `(${numeroLimpo.substring(0, 2)}`;
    } else {
        numeroFormatado = `(${numeroLimpo}`;
    }
    if (numeroLimpo.length >= 3) {
        numeroFormatado += `) ${numeroLimpo.substring(2, 7)}`;
    } else if (numeroLimpo.length > 2) {
        numeroFormatado += `) ${numeroLimpo.substring(2)}`;
    }
    if (numeroLimpo.length >= 7) {
        numeroFormatado += `-${numeroLimpo.substring(7, 11)}`;
    } else if (numeroLimpo.length > 6) {
        numeroFormatado += `-${numeroLimpo.substring(6)}`;
    }
    return numeroFormatado;
}