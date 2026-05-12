const InputNome = document.getElementById("nome");
const InputEmail = document.getElementById("email");
const Inputmedicamento = document.getElementById("medicamento");
const inputData = document.getElementById("data")
const InputQuantidade = document.getElementById("qtd_doses")

const KeyNome = "mh-nome";
const KeyEmail = "mh-email";
const Keymedicamento = "mh-medicamento";
const KeyData = "mh-data";
const KeyQuantidade = "mh-quantidade";

function salvarNome() {
    localStorage.setItem("mh-nome", InputNome.value);
}
function salvarEmail() {
    localStorage.setItem("mh-email", InputEmail.value);
}
function salvarmedicamento(){
    localStorage.setItem("mh-medicamento", Inputmedicamento.value);
}
function salvarData(){
    localStorage.setItem("mh-data", inputData.value);
}
function salvarQuantidade(){
    localStorage.setItem("mh-quantidade", InputQuantidade.value);
}


InputNome.addEventListener("input", salvarNome)
InputEmail.addEventListener("input", salvarEmail)
Inputmedicamento.addEventListener("input", salvarmedicamento)
inputData.addEventListener("change", salvarData)
InputQuantidade.addEventListener("change", salvarQuantidade)

function carregarDados(){
    const nomeSalvo = localStorage.getItem("mh-nome");
    const emailSalvo = localStorage.getItem("mh-email");
    const medicamentoSalvo = localStorage.getItem("mh-medicamento");
    const dataSalva = localStorage.getItem("mh-data");
    const qtdSalva = localStorage.getItem("mh-quantidade");

    
    if (nomeSalvo !== null){
        InputNome.value = nomeSalvo
    }

    if (emailSalvo !== null){
        InputEmail.value = emailSalvo
    }

    if (medicamentoSalvo !== null){
        Inputmedicamento.value = medicamentoSalvo
    }

    if (dataSalva !== null){
        inputData.value = dataSalva
    }
    if (qtdSalva !== null){
        InputQuantidade.value = qtdSalva
    }
    
}

function resetar (){
    localStorage.clear();
}

carregarDados();
