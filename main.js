const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = `<img src ="./imagens/aprovado.png" alt = "Emoji celebrando" />`;
const imgReprovado = `<img src ="./imagens/reprovado.png" alt = "Emoji decepcionado" />`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>;`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>;`
const notaMinima = parseFloat(prompt ("Digite a nota minina: "));


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`a atividade ${inputNomeAtividade.value} já foi adicionada`);
    }
    else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let nota = parseFloat(inputNotaAtividade.value);

        let linha = `<tr>`;
        linha += `<td> ${inputNomeAtividade.value} </td>`;
        linha += `<td> ${nota} </td>`;
        linha += `<td> ${nota >= notaMinima ? imgAprovado : imgReprovado} </td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculamediafinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculamediafinal(){
    let somadasNotas = 0;
    for (let i =0; i < notas.length; i++){
        somadasNotas += notas[i];
    }

    return somadasNotas / notas.length;
}