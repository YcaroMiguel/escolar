// script.js

// Inicializa os votos para os candidatos
let votos = {
    "Ycaro e Gabriel": 0,
    "Heloísa e Paula": 0,
    "Branco": 0
};

// Associa números aos candidatos
let candidatos = {
    "22": "Ycaro e Gabriel",
    "11": "Heloísa e Paula"
};

// Variável para armazenar o número digitado
let numeroDigitado = "";

// Função para digitar números no display
function digitarNumero(numero) {
    if (numeroDigitado.length < 2) {
        numeroDigitado += numero;
        document.getElementById("numDisplay").value = numeroDigitado;
    }
}

// Função para apagar o número digitado
function apagarNumero() {
    numeroDigitado = "";
    document.getElementById("numDisplay").value = "";
}

// Função para votar em branco
function votoBranco() {
    numeroDigitado = "Branco";
    document.getElementById("numDisplay").value = "Branco";
}

// Função para confirmar o voto
function confirmarVoto() {
    if (numeroDigitado === "Branco") {
        votos["Branco"]++;
        alert("Voto em branco registrado!");
    } else if (candidatos[numeroDigitado]) {
        let candidato = candidatos[numeroDigitado];
        votos[candidato]++;
        alert(`Voto registrado para ${candidato}`);
    } else {
        alert("Número inválido. Por favor, digite novamente.");
    }
    numeroDigitado = "";
    document.getElementById("numDisplay").value = "";
    atualizarGraficos();
}

// Função para atualizar os gráficos de barra com base nos votos
function atualizarGraficos() {
    let totalVotos = votos["Ycaro e Gabriel"] + votos["Heloísa e Paula"] + votos["Branco"];

    let porcentagem1 = ((votos["Ycaro e Gabriel"] / totalVotos) * 100).toFixed(1);
    let porcentagem2 = ((votos["Heloísa e Paula"] / totalVotos) * 100).toFixed(1);
    let porcentagemBranco = ((votos["Branco"] / totalVotos) * 100).toFixed(1);

    document.getElementById("bar1").style.width = `${porcentagem1}%`;
    document.getElementById("bar2").style.width = `${porcentagem2}%`;
    document.getElementById("barBranco").style.width = `${porcentagemBranco}%`;

    document.getElementById("bar1").innerText = `Ycaro e Gabriel: ${votos["Ycaro e Gabriel"]} votos (${porcentagem1}%)`;
    document.getElementById("bar2").innerText = `Heloísa e Paula: ${votos["Heloísa e Paula"]} votos (${porcentagem2}%)`;
    document.getElementById("barBranco").innerText = `Votos em Branco: ${votos["Branco"]} votos (${porcentagemBranco}%)`;
}
