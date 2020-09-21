# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (param) {
    return !!param
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0)
isTruthy(-0)
isTruthy("")
isTruthy('')
isTruthy(null)
isTruthy(false)
isTruthy(NaN)
isTruthy(undefined)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10)
isTruthy(" ")
isTruthy("dan")
isTruthy(-1)
isTruthy(true)
isTruthy({})
isTruthy([])
isTruthy(true)
isTruthy(function () {})
isTruthy(1000)

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: "BMW",
    modelo: "320i",
    paca: "BMW-2021",
    ano: 2018,
    cor: "branco",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas:0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(color) {
    carro.cor = color
    console.log("A cor mudou para",carro.cor)
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
    return `A cor do carro é ${carro.cor}`
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
    return `O modelo do carro é ${carro.modelo}`
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
    return `A marca do carro é ${carro.marca}`
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    return `Esse carro é ${carro.marca} ${carro.modelo}`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
 
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(passageiros) {
var livres = carro.assentos - carro.quantidadePessoas;
var pessoas = livres === 1 ? 'pessoa' : 'pessoas'

passageiros <= 0  ? carro.quantidadePessoas += passageiros : false
if (carro.quantidadePessoas == carro.assentos || livres === 0) {
    return "O carro já está lotado!"
} else if((carro.quantidadePessoas + passageiros) > carro.assentos) { 
    return `Só cabem mais ${livres} ${pessoas}!`
} else {
    carro.quantidadePessoas += passageiros
}

return `Já temos ${carro.quantidadePessoas} pessoas no carro`
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() //"A cor do carro é branco"

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho') //A cor mudou para vermelho

// E agora, qual a cor do carro?
carro.obterCor() //"A cor do carro é vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo') //A cor mudou para verde musgo

// E agora, qual a cor do carro?
carro.obterCor() //"A cor do carro é verde musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo() //"Esse carro é BMW 320i"

// Adicione 2 pessoas no carro.
carro.addPessoas(2) //"Já temos 2 pessoas no carro"

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4) //"Só cabem mais 3 pessoas!"

// Faça o carro encher.
carro.addPessoas(3) //"Já temos 5 pessoas no carro"

// Tire 4 pessoas do carro.
carro.addPessoas(-4)

// Adicione 10 pessoas no carro.
carro.addPessoas(10) // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas //1
```
