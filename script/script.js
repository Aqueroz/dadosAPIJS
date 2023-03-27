//then = entao, faça ou mostre algo ----repetindo pe gando os dados mais 'fundos' usando uma cadeia de then, fetch é usado para converter os dados usando o metódo JSON

async function buscaEndereco(cep) {
  let mensagemErro = document.getElementById('erro')
  mensagemErro.innerHTML = ""
  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)  
    let consultaCEPConvertida = await consultaCEP.json()

    if(consultaCEPConvertida.erro){
      throw Error('CEP não existente')    }

    //variavel para buscar os ids no documento html
    let cidade = document.getElementById('cidade')
    let logradouro = document.getElementById('endereco')
    let estado = document.getElementById('estado')
    let bairro = document.getElementById('bairro')
    let complemento = document.getElementById('complemento')

    //informar qual variavel tera o valor assimilado ao que a categoria que a api retornar: uf, bairro, etc
    cidade.value = consultaCEPConvertida.localidade
    logradouro.value = consultaCEPConvertida.logradouro
    estado.value = consultaCEPConvertida.uf
    bairro.value = consultaCEPConvertida.bairro
    complemento.value = consultaCEPConvertida.complemento

    console.log(consultaCEPConvertida)
    return consultaCEPConvertida
  } 
  catch(erro){
    mensagemErro.innerHTML = `
    <br>
    <p>CEP inválido. Tente novamente</p>`
    console.log(erro)
  }
}

buscaEndereco()



//buscar no html (document.getElement) pelo id (ById) o id 'cep' e adicionar um evento (addEvent) qque "ouve" (listener), criando uma função anonima ' => ' e atribuindo ao 'cep o valor buscado (.value)
//'focusout é quando tira o foco de, no caso, o campo do cep


let cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))







    // //condicao para retornar que o cep não existe, caso o cep não exista a pagina (viacep) retorna 'Error'
    // if (r.erro) {
    //     throw Error('Esse CEP não existe')
    // }
    // else{
    //     console.log(r)
    // }
    // //finnaly vai aparecer quando o processo terminar, dando erro ou com sucesso
    // }).catch(erro => console.log(erro)).finally(mensagem = console.log("processamento concluido"))

// let ceps = ['01001000', '01001001']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// console.log(conjuntoCeps)
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

