AOS.init();

const dataDoAniversario = new Date("Apr 16, 2024 23:45:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const MinutoEmMs = 1000 * 60
    const SegundoEmMs = 1000

    const distanciaAteOEvento = timeStampDoAniversario - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const MinutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / MinutoEmMs);
    const SegundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMs) / SegundoEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${MinutosAteOEvento}m ${SegundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado em <strong>16/04/2024 23:45hs</strong>'
    }
}, 1000);
