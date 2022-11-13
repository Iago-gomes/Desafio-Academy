const btnCadastro = document.querySelector("#enviar");
const nome = document.querySelector("#firstname");
const sobrenome = document.querySelector("#lastname");
const idade = document.querySelector("#idade");
const profissão = document.querySelector("#profissão");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const datadepreenchimento = document.querySelector("#datadepreenchimento");
btnCadastro.addEventListener("click", function () {
  console.log("Enviei");
  cadastrarPessoa(
    nome.value,
    sobrenome.value,
    idade.value,
    profissão.value,
    email.value,
    telefone.value,
    datadepreenchimento.value
  );
  //  pessoas('carlos', 20)
  console.log(teste);
});

const pessoas = [
  { name: "Fabiana Araujo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geraldo do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

let teste = [];
function cadastrarPessoa(
  nome,
  sobrenome,
  idade,
  profissão,
  email,
  telefone,
  datadepreenchimento
) {
  const cliente = {
    nome,
    sobrenome,
    idade,
    profissão,
    email,
    telefone,
    datadepreenchimento,
  };
  return pessoas.push(cliente);
}

let buttonPesquisar = document.querySelector("#pesquisarName");

let nomePesquisa = document.querySelector("#pesquisar");

buttonPesquisar.addEventListener("click",  () => {
    console.log('filtragem')
  for (const cliente of pessoas) {
    if (nomePesquisa.value == cliente.name) {
      console.log(cliente);
    }
  }
});

function retornarListaNomes(){
const nomes = pessoas.map((pessoa) => pessoa.name.split(' ')[0]);
return nomes
}

function adicionarId() {
    const pessoasComId = pessoas.map((pessoa, index) => ({
      id: index,
      ...pessoa,
    }));
    return pessoasComId
  }

  function idadeMinima() {
   return pessoas.filter(pessoa => pessoa.age > 18)
  }

function mediaIdade() {
  const mediaIdade = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
  },0)
  return mediaIdade.toFixed(0)
}


console.log(mediaIdade())