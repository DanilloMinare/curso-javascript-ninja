/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Brasileiro'
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Palmeiras', 'Flamengo', 'Vasco', 'Botafogo', 'Fluminense' ]

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position) {
    var arrPosition = position - 1;
    var resp = `O time que está em ${position}º lugar é o ${teams[arrPosition]}.`;

/*Resposta do curso:

    if(position < 1 || position > 5) {
        return 'Não temos a informação do time que está nessa posição'
    }

    return resp

*/

    switch(position) {
        case 1:
            console.log(resp)
            break;
        case 2:
            console.log(resp)
            break;
        case 3:
            console.log(resp)
            break;
        case 4:
            console.log(resp)
            break;
        case 5:
            console.log(resp)
            break;
        default:
            console.log('Não temos a informação do time que está nessa posição.')
    }
    
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1)
showTeamPosition(2)
showTeamPosition(3)
showTeamPosition(21)

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont = 20
while (cont <= 30) {
    console.log(cont++)
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
/*
Resposta do vídeo:
function convertToHex(colorParam) {
    var colorHex;
    
    
    switch (colorParam) {
        case 'red': 
        colorHex = 'B03A2E'
        break;
        case 'blue':
        colorHex = '3498DB'
        break;
        case 'green':
        colorHex = '#45B39D'
        break;
        case 'pink':
        colorHex = 'F5EEF8'
        break;
        case 'grey':
        colorHex = 'E5E7E9'
        break;
        default:
        console.log(`Não temos o equivalente hexadecimal para ${colorParam}.`)
    }
    return `O hexadecimal para a cor ${colorParam} é ${colorHex}`
}
*/
function convertToHex(colorParam) {
    
    var resp = `O hexadecimal para a cor ${colorParam} é`;
    
    switch (colorParam) {
        case 'red': 
        console.log(resp,'B03A2E')
        break;
        case 'blue':
        console.log(resp,'3498DB')
        break;
        case 'green':
        console.log(resp,'#45B39D')
        break;
        case 'pink':
        console.log(resp,'F5EEF8')
        break;
        case 'grey':
        console.log(resp,'E5E7E9')
        break;
        default:
        console.log(`Não temos o equivalente hexadecimal para ${colorParam}.`)
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red')
convertToHex('blue')
convertToHex('green')
convertToHex('pink')
convertToHex('grey')
convertToHex('brown')
convertToHex('purple')
convertToHex('yellow')
