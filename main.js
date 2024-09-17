const form = document.getElementById('form-atividade');
let linhas = ''
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt('digite a nota minima:'));

const imgAprovado = '<img src="/images/aprovado.png" alt="emoji festejando"/>'
const imgReprovado = '<img src="/images/reprovado.png" alt="emoji triste"/>'

const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    addLinhas();
    atualizaTabela();
    atualizaMediaFinal();

});

function addLinhas(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi adcionada`)
    }else{

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value} </td>`;
        linha += `<td>${inputNotaAtividade.value} </td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '<tr>'
        
        linhas += linha
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal =  calculaMediaFianl();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;


}

function calculaMediaFianl(){
    let somaNotas = 0;

    for(i = 0; i< notas.length; i++){
        somaNotas += notas[i];
    }

    return media = somaNotas / notas.length
}