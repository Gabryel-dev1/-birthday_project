// Inicializa o AOS (Animation On Scroll)
AOS.init();

// Define a data e hora do evento
const eventoData = new Date("2025-09-04T20:00:00");
const eventoTimestamp = eventoData.getTime();

// Função para atualizar o contador periodicamente
const temporizador = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = eventoTimestamp - agora;

    const msPorDia = 86400000;
    const msPorHora = 3600000;
    const msPorMinuto = 60000;

    const dias = Math.floor(diferenca / msPorDia);
    const horas = Math.floor((diferenca % msPorDia) / msPorHora);
    const minutos = Math.floor((diferenca % msPorHora) / msPorMinuto);
    const segundos = Math.floor((diferenca % msPorMinuto) / 1000);

    const contadorElemento = document.getElementById('contador');

    if (diferenca < 0) {
        clearInterval(temporizador);
        contadorElemento.textContent = 'Evento expirado';
    } else {
        contadorElemento.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
}, 1000);
