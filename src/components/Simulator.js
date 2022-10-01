
// Variáveis Formulário
const rendaMensal = 0;
const montaDespesa = 0;
const anosAposentadoria = 0;
const RendaEsperada = 0;

// Proporção perfil de investimento
const rendaFixa = 0;
const rendaVariavel = 0;


// Dados de mercado - API futura
const taxaRendaFixa = 0;
const taxaRendaVariavel = 0;

//Dados após aposentadoria
const taxaAposentadoria = 0;

// Resultados preliminares
const superavitEsperado = rendaMensal - montaDespesa;

//TIR Esperada 


// Taxa Equivalente
function iq(taxa) {
    return (
        (((1+(taxa/100)) ** (1/12)) - 1)
    )
}

console.log(iq(2.3));

