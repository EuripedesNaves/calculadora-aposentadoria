
// Variáveis Formulário
const rendaMensal = 8000;
const montaDespesa = 4000;
const anosAposentadoria = 30;
const RendaEsperada = 18000;

// Proporção perfil de investimento
const rendaFixa = 0;
const rendaVariavel = 1;


// Dados de mercado - API futura
const taxaRendaFixa = 2.3;
const taxaRendaVariavel = 6.3;

//Dados após aposentadoria
const taxaAposentadoria = 5.5;

// Resultados preliminares
const superavitEsperado = rendaMensal - montaDespesa;




// Taxa Equivalente
function iq(taxa) {
    return (
        (((1 + (taxa / 100)) ** (1 / 12)) - 1)
    )
}

// TIR Esperada

function expectedIRR() {
    let rendimentoRendaFixa = iq(taxaRendaFixa) * (rendaFixa * superavitEsperado);
    let rendimentoRendaVariavel = iq(taxaRendaVariavel) * (rendaVariavel * superavitEsperado);
    let expectedIRR = (((((rendimentoRendaFixa + rendimentoRendaVariavel) / superavitEsperado) + 1) ** 12) - 1);
    
    return (expectedIRR)
}

console.log(expectedIRR());