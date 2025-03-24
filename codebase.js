let nome=document.querySelector('#nome').value;
let nasc=document.querySelector('#nascimento').value;
let email=document.querySelector('#email').value;
let senha=document.querySelector('#senha').value;
let csenha=document.querySelector('#confirmar-senha').value;
let masc=document.querySelector('#masculino');
let fem=document.querySelector('#feminino');
let ano=nasc.slice(0,4);
ano=Number(ano);
let mes=nasc.slice(5,7);
mes=Number(mes);
let dia=nasc.slice(8,10);
dia=Number(dia);
let vetor= [];
function sexo(masc,fem){
    if(masc.checked===true){
        window.alert('é homem');
        vetor.push('homem');
    }
    else if(fem.checked===true){
        window.alert('é mulher');
        vetor.push('mulher');
    }
}


function senhas(senha,csenha){
    if(senha!=csenha){
        window.alert('as senhas sao diferentes')
        return;
    }
    vetor.push(senha);
}


function idade(dia,mes,ano){
let anoatual=2025;
let mesatual=3;
let diaatual=23;
let idade=0;
idade=anoatual-ano;
if(mes>mesatual||mes==mesatual && dia>diaatual){
    idade=idade-1;
    vetor.push(idade);
}
else{
    vetor.push(idade);
}
}

function enviar(){

}
