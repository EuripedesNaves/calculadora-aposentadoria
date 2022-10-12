import React from 'react';
import Simulators from '../styles/Simulators.css'

const Simulator = ({ rendaMensal, montaDespesa, anosAposentadoria, RendaEsperada }) => {

    // Variáveis Formulário
    // const rendaMensal = 8000;
    // const montaDespesa = 4000;
    // const anosAposentadoria = 30;
    // const RendaEsperada = 18000;

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

    //Patrimônio que será necessário acumular
    const patrimonioEsperado = RendaEsperada / iq(taxaAposentadoria);


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

    // Coeficiente de Financiamento
    function parcelaAposentadoria() {

        //let CF = expectedIRR() / (1 - (1 / ((1 + expectedIRR()) ** anosAposentadoria)));
        let parcelaAposentadoria = patrimonioEsperado * expectedIRR() / (((1 + expectedIRR()) ** anosAposentadoria) - 1);

        return (parcelaAposentadoria)
    }

    // Parcelas hoje (NPER)
    function perHoje() {

        let prazoParcela = Math.log((patrimonioEsperado / (superavitEsperado * 12)) * (expectedIRR()) + 1) / Math.log(1 + (expectedIRR()));

        return (prazoParcela)
    }

    return (
        <>
        <h1>Resultados</h1>
            <p>Patrimônio esperado: {Math.round(patrimonioEsperado).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>Parcela anual esperada: {Math.round(parcelaAposentadoria()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>Tempo aposentadoria: {Math.round(perHoje())} anos</p>
        </>

    )
}

export default Simulator