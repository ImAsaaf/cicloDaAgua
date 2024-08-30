function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function mostrarCiclo() {
    var ciclo = normalizeText(document.getElementById("ciclo").value);
    var descricao = document.getElementById("descricao");
    var imagem = document.getElementById("imagem-ciclo");

    descricao.style.opacity = 0; // Esconde o texto
    setTimeout(function() {
        if (ciclo === "") {
            descricao.innerHTML = "Digite uma etapa do ciclo da água para ver a imagem e a descrição correspondentes.";
            imagem.src = "img/Ciclo_da_agua.png"; // Imagem principal
            imagem.className = ""; // Remove a classe de tamanho específico
        } else if (ciclo === "evaporacao") {
            descricao.innerHTML = `
                A evaporação é o processo em que a água líquida se transforma em vapor devido ao calor. Isso acontece em superfícies de água como oceanos e lagos e é crucial para formar nuvens e transportar umidade na atmosfera.<br><br>
                <strong>Impactos Ambientais:</strong> Com o aumento da temperatura global, a evaporação pode se intensificar, resultando em mais vapor d'água na atmosfera e possível aumento nas precipitações.<br><br>
                <strong>Intervenções Antrópicas:</strong> Atividades como o desmatamento e a urbanização podem reduzir a umidade do solo e alterar os padrões de evaporação, impactando o equilíbrio local e global do ciclo da água.
            `;
            imagem.src = "img/evaporacao.jpeg"; // Imagem de evaporação
            imagem.className = ""; // Remove a classe de tamanho específico
        } else if (ciclo === "condensacao") {
            descricao.innerHTML = `
                A condensação ocorre quando o vapor d'água na atmosfera se resfria e se transforma em gotículas de água, formando nuvens. É essencial para a formação de nuvens e para o retorno da água à superfície.<br><br>
                <strong>Impactos Ambientais:</strong> Mudanças na temperatura podem afetar a capacidade da atmosfera de reter vapor, impactando a formação e o tipo de nuvens.<br><br>
                <strong>Intervenções Antrópicas:</strong> Poluição atmosférica e emissões de gases de efeito estufa podem alterar a composição da atmosfera, influenciando o processo de condensação e a qualidade das nuvens formadas.
            `;
            imagem.src = "img/condensacao.jpeg"; // Imagem de condensação
            imagem.className = ""; // Remove a classe de tamanho específico
        } else if (ciclo === "precipitacao") {
            descricao.innerHTML = `
                A precipitação é a água que cai da atmosfera para a Terra na forma de chuva, neve ou granizo. Ela abastece rios, lagos e aquíferos, e mantém a umidade do solo.<br><br>
                <strong>Impactos Ambientais:</strong> Mudanças climáticas podem alterar os padrões de precipitação, resultando em mais chuvas em algumas regiões e secas em outras.<br><br>
                <strong>Intervenções Antrópicas:</strong> A urbanização e a impermeabilização do solo podem aumentar o escoamento superficial e reduzir a infiltração, impactando o ciclo de precipitação e aumentando o risco de enchentes.
            `;
            imagem.src = "img/precipitacao.jpeg"; // Imagem de precipitação
            imagem.className = ""; // Remove a classe de tamanho específico
        } else if (ciclo === "infiltracao") {
            descricao.innerHTML = `
                A infiltração é o processo em que a água da chuva penetra no solo e recarrega os aquíferos. É importante para manter o nível de água subterrânea e prevenir enchentes.<br><br>
                <strong>Impactos Ambientais:</strong> Alterações na precipitação e no uso do solo podem afetar a taxa de infiltração e a recarga dos aquíferos.<br><br>
                <strong>Intervenções Antrópicas:</strong> A construção de infraestruturas impermeáveis e o uso excessivo de água podem reduzir a infiltração e esgotar os recursos hídricos subterrâneos.
            `;
            imagem.src = "img/infiltracao.jpeg"; // Imagem de infiltração
            imagem.className = ""; // Remove a classe de tamanho específico
        } else if (ciclo === "transpiracao") {
            descricao.innerHTML = `
                A transpiração é o processo pelo qual as plantas liberam vapor d'água para a atmosfera através de pequenos poros em suas folhas.<br><br>
                <strong>Impactos Ambientais:</strong> Esse processo é essencial para o ciclo da água e para manter a umidade do ar. A transpiração ajuda a regular a temperatura das plantas e a circulação de nutrientes.<br><br>
                <strong>Intervenções Antrópicas:</strong> O desmatamento e a agricultura intensiva podem reduzir a transpiração, levando à diminuição da umidade do ar, alterações no clima local e aumento da temperatura.
            `;
            imagem.src = "img/transpiracao.jpeg"; // Imagem de transpiração
            imagem.className = "transpiracao"; // Aplica a classe para o tamanho específico
        } else {
            descricao.innerHTML = "Etapa do ciclo da água não reconhecida. Tente novamente.";
            imagem.src = "img/duvida.png"; // Imagem de dúvida
            imagem.className = ""; // Remove a classe de tamanho específico
        }
        descricao.style.opacity = 1; // Mostra o texto de novo
    }, 500);
}

document.querySelector('h1 a').addEventListener('click', function() {
    document.getElementById("ciclo").value = '';
    mostrarCiclo();
});