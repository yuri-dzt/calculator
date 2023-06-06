const resposta = document.querySelector('.display');

const limpar = document.querySelector('.btn-clear');
const elevar = document.querySelector('.elevar');
const divisao = document.querySelector('.divisao');
const vezes = document.querySelector('.vezes');
const mais = document.querySelector('.mais');
const menos = document.querySelector('.menos');
const deletar = document.querySelector('.btn-del');
const ponto = document.querySelector('.ponto');
const igual = document.querySelector('.btn-eq');



const um = document.querySelector('.um');
const dois = document.querySelector('.dois');
const tres = document.querySelector('.tres');
const quatro = document.querySelector('.quatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const sete = document.querySelector('.sete');
const oito = document.querySelector('.oito');
const nove = document.querySelector('.nove');
const zero = document.querySelector('.zero');

function limpaInput() {
  resposta.value = '';
};

limpar.onclick = () => {
  limpaInput();
};


um.onclick = () => {
  resposta.value += '1';
  temp = '1'
};
dois.onclick = () => {
  resposta.value += '2';
  temp = '2'
};
tres.onclick = () => {
  resposta.value += '3';
  temp='3'
};
quatro.onclick = () => {
  resposta.value += '4';
  temp = '4'
};
cinco.onclick = () => {
  resposta.value += '5';
  temp = '5'
};
seis.onclick = () => {
  resposta.value += '6';
  temp = '6'
};
sete.onclick = () => {
  resposta.value += '7';
  temp = '7'
};
oito.onclick = () => {
  resposta.value += '8';
  temp = '8'
};
nove.onclick = () => {
  resposta.value += '9';
  temp = '9'
};
zero.onclick = () => {
  resposta.value += '0';
  temp = '0'
};




ponto.onclick = () => {
  resposta.value += '.'
};
deletar.onclick = () => {
  console.log('deletando')
  let valorAtual = resposta.value;
  resposta.value = valorAtual.slice(0, -1)
};
vezes.onclick = () => {
  operation = '*'
  first = resposta.value;
  resposta.value += '*'
};
divisao.onclick = () => {
  operation = '/'
  first = resposta.value;
  resposta.value += '/';
};
// elevar.onclick = () => {
//   operation = '^'
//   first = resposta.value;
//   resposta.value += '^';
// };
menos.onclick = () => {
  operation = '-'
  first = resposta.value;
  resposta.value += '-';
};
mais.onclick = () => {
  operation = '+'
  first = resposta.value;
  resposta.value += '+';
  
};
igual.onclick = () => {

  if(operation === '+'){
    let result = Number(first) + Number(resposta.value.replace(`${first}+`, " "));
    resposta.value =+ result;

  } else if(operation === '-'){
    let result = Number(first) - Number(resposta.value.replace(`${first}-`, " "));
    resposta.value =+ result;

  }else if(operation === '*'){
    let result = Number(first) * Number(resposta.value.replace(`${first}*`, " "));
    resposta.value =+ result;

  }else if(operation === '/'){
    let result = Number(first) / Number(resposta.value.replace(`${first}/`, " "));
    resposta.value =+ result;

  };
  // else if(operation === '^'){
  //   let result = Number(first) + Number(resposta.value.replace(`${first}^`, " "));
  //   resposta.value =+ result;
  // };
};

let operation;
let temp;
let first;
