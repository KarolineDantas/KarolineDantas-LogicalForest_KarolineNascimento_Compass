<h2> Variáveis </h2>

    let idade = 22;
    let nome = "Karoline";
    console.log("Olá, sou " + nome + " e tenho " + idade + " anos de idade")

<h2> Constantes  </h2>
    
    let valorIngressoAdulto = 35;
    valorIngressoAdulto = 30;
    console.log(valorIngressoAdulto)

<h2> Dados primitivos</h2>
Tipos de referência  

    let idade = 6; // number literal
    let brasileira = true; // boolean
    let sobrenome ; //undefined, sem definição
    let corSelecionado = null //redefinir um valor

<h2> Objetos</h2>
Junta informações em um único local 

    let nome = "Esther"; //string literal
    let idade = 6; // number literal
    let brasileira = true; // boolean
    let sobrenome ; //undefined, sem definição
    let corSelecionado = null //redefinir um valor
    
    let pessoa = {
    nome: "Esther",
    idade: 6,
    brasileira: true,
    sobrenome: undefined,
    corSelecionado: null,
    };
    
    console.log(pessoa)

<h2> Arrays</h2>
Conjunto de dado que pode ser acessado por um índice  

    let familia = [22,19,20,7,27];
    console.log(familia.lenght);
    console.log(familia[7]);

<h2> Função: verbo + substantivo  </h2>

    let objeto = "quadrado"
    function transformarObjeto (){
    objeto = "triangulo"
    };
    
    console.log(objeto);
    transformarObjeto();
    console.log(objeto) 


<h3> Temos dois tipos de funções: a que realiza uma tarefa, mas não devolve nada </h3>
    
    function dizerNome(){
    console.log('Esther');
    }

<h3> E temos a função que faz cálculo e retorna resultado </h3>

    function multiplicarPorDois(valor){
    return valor*2;
    }
    
    console.log(multiplicarPorDois(5));
    let resultado = multiplicarPorDois(5);
    console.log(resultado); 

<h2>Operadores </h2>

    let salario = 100;
    console.log(salario + salario);
    console.log(salario - salario);
    console.log(salario / salario)
    console.log(salario * salario) 


<h3>Operadores de incremento (++) e decremento (--) </h3>

    let idade = 30
    console.log(++idade);
    console.log(--idade); 

<h3>Operadores de atribuição =, +=, -= </h3>

    let valorDoGas = 120;
    //valorDoGas = valorDoGas + valorDoGas; Para ser mais rápido, usa-se:
    let valorDoGas += valorDoGas
    
    //valorDoGas = valorDoGas - valorDoGas; Para ser mais rápido, usa-se:
    let valorDoGas -= valorDoGas
    
    console.log(valorDoGas) 

<h3>Operadores de igualdade</h3>
Igualdade estrita: compara o tipo de dado 

    console.log(1 === 1);
    console.log('1' === 1);

Igualdade solta: verifica se o valor do dado é o mesmo

    console.log( 1 == 1);
    console.log('1' == 1); 

<h3>Operador ternário</h3>
Imagine que eu tenho um cliente. Se ele tiver mais de 100 pontos será classificado como premium, caso contrário será comum

    let pontos = 100;
    let tipo = pontos > 100 ? 'premium' : 'comum'
    console.log(tipo); 

<h3> Operadores lógicos</h3>
Tomam decisões baseadas em condições múltiplas

<h3>Operador lógico e (&&)</h3> 
Retorna true caso os dois operandos forem true

    let maiorDeIdade = true;
    let possuiCarteiraDeTrabalho = true;
    let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
    console.log(podeAplicar); 

<h3>Operador lógico ou (||)</h3>
Retorna true se no mínimo um dos operandos forem true

    let maiorDeIdade = true;
    let possuiCarteiraDeTrabalho = false;
    let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
    console.log(podeAplicar);

<h3>Operador NOT (!)</h3>
Faz uma negação
    
    let candidatoRecusado = !podeAplicar;
    console.log(candidatoRecusado); 

<h2>Condicional If...Else</h2>
    //Se a hora estiver entre 06:00 até 12:00 : Bom dia
    //Se a hora estiver entre 12:00 até 18:00 : Boa tarde
    //Caso contrário : Boa noite

    let hora = 9;
    if (hora => 6 && hora < 12){
    console.log('Bom dia!');
    }
    
    else if (hora > 12 && hora < 18){
    console.log('Boa tarde!');
    }
    
    else{
    console.log('Boa noite!');
    } 

<h2>Condicional Switch...Case</h2>

    let permissao; //comum, gerente ou diretor
    
    switch (permissao) {
    case 'comum':
        console.log('usuario comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;
    
    case 'diretor':
        console.log('usuario diretor');
        break;

    default:
        console.log('usuario não reconhecido')
    } 


<h2>Laço de repetição For</h2>

    for(let i = 0; i<5; i++){
    console.log('Estou aprendendo!', i);
    }
    
    for(let i = 5; i<1; i--){
    console.log('Estou aprendendo!', i);
    } 


<h2>Laço de repetição While</h2>
let i = 0;
while (i <5){
    i++;
    console.log('Estou aprendendo!', i);
}


<h2>Laço de repetição do...while</h2>

    let x = 0;
    do {
    console.log('digitando', x);
    x++
    } while (x<10)

<h2>Laço de repetição for-in</h2>

    const pessoa = {
    nome : 'Karoline';
    idade : 22
    };

//chave: key-value. nome = Karoline seria o key, e idade = 22 seria o value

    for(let chave in pessoa){
    console.log(chave, pessoa.nome);
    }
    
    const cores = ['Vermelho', 'Azul','Verde'];
    for (let indice in cores){
    console.log(indice, cores[indice])
    }

<h2>Laço de repetição for-of</h2>

    for(let cor of cores){
    console.log(cor);
    }
