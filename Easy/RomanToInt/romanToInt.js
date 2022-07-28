// objeto contendo nas chaves o númer em romando e no valor o número em inteiros
const numeros_inteiros_compativeis = {
    "i" : 1,
    "iv" : 4,
    "v" : 5,
    "ix" : 9,
    "x" : 10,
    "xl" : 40,
    "l" : 50,
    "xc" : 90,
    "c" : 100,
    "cd" : 400,
    "d" : 500,
    "cm" : 900,
    "m" : 1000
}

// função a ser executada
var romanToInt = function(s) {
    // separando a string em romano por letra dentro de um array e transformando em lowerCase
    var romanos_list = s.toLowerCase().split("");

    // resultado inicial
    var resultado = 0;
    
    // enquanto o romanos tiver números romanos a serem checados vamos rodar o loop
    while(romanos_list.length !== 0) {
        // se a variavel s em lista for maior que 1 em length teste recebe 2 elementos iniciais da lista
        if (romanos_list.length > 1){
            var teste = romanos_list[0] + romanos_list[1];
        } else {
            teste = null
        }

        // teste2 sempre recebe apenas um elemento em caso de não compatibilidade com 2 elementos em teste
        var teste2 = romanos_list[0];

        // se a teste tem key igual ao seu valor nós iremos retirar os dois elementos do array e somar o valor da key
        if(teste in numeros_inteiros_compativeis) {
            romanos_list.shift();
            romanos_list.shift();

            resultado += numeros_inteiros_compativeis[teste];

        // caso contrário vamos somar apenas um dos valores e retirar apenas o primeiro elemento do array
        } else {
                resultado += numeros_inteiros_compativeis[teste2];
                romanos_list.shift();
        }
    }

    return resultado
};

romanToInt("MDCXCV");