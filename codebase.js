function enviar() {
    let nome = document.querySelector('#nome').value.trim();
    let nasc = document.querySelector('#nascimento').value;
    let email = document.querySelector('#email').value.trim();
    let senha = document.querySelector('#senha').value;
    let csenha = document.querySelector('#confirmar-senha').value;
    let masc = document.querySelector('#masculino');
    let fem = document.querySelector('#feminino');

    if (nome === '') {
        alert('Digite o seu nome para continuar');
        return;
    }
    else if (nasc === '') {
        alert('Digite a sua data de nascimento para continuar');
        return;
    }
    else if (email === '') {
        alert('Digite o seu email para continuar');
        return;
    }
    else if (senha === '') {
        alert('Digite a senha para continuar');
        return;
    }
    else if (csenha === '') {
        alert('Digite a confirmação da senha para continuar');
        return;
    }

    // Processamento da Data de Nascimento
    let ano = Number(nasc.slice(0, 4));
    let mes = Number(nasc.slice(5, 7));
    let dia = Number(nasc.slice(8, 10));

    // Cálculo da Idade
    let idade = calcularIdade(dia, mes, ano);

    // Verificar o Sexo
    let genero = verificarSexo(masc, fem);
    if (!genero) {
        alert('Selecione um gênero');
        return;
    }

    // Verificação das Senhas
    if (verificarSenhas(senha, csenha)===false) {
        alert('As senhas não são iguais');
        return;
    }
    else{
        alert('as senhas são iguais')
        
    }

    // Criando um vetor com os dados
    let vetor = [nome, idade, email, genero, senha];

    console.log(vetor); // Exibir os dados no console
}

// Função para calcular idade
function calcularIdade(dia, mes, ano) {
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let mesAtual = hoje.getMonth() + 1;
    let diaAtual = hoje.getDate();

    let idade = anoAtual - ano;
    if (mes > mesAtual || (mes === mesAtual && dia > diaAtual)) {
        idade--;
    }
    return idade;
}

// Função para verificar sexo
function verificarSexo(masc, fem) {
    if (masc.checked===true) return 'Homem';
    else if (fem.checked===true) return 'Mulher';
}

// Função para validar senhas
function verificarSenhas(senha, csenha) {
    return senha === csenha;
}
