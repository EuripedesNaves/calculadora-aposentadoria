import React, {useState, useEffect} from 'react';
import '../styles/Simulators.css'
import axios from 'axios';

const Simulator = ({ rendaMensal, montaDespesa, anosAposentadoria, RendaEsperada }) => {

    // Proporção perfil de investimento
    const rendaFixa = 0;
    const rendaVariavel = 1;


    // Dados de mercado - API futura
    const taxaRendaFixa = 2.3;
    const [taxaRendaVariavel, setTaxaRendaVariavel] = useState([]);
    const api = async () => { 
        const {data} = await axios.get("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos/10?formato=json")
        
        const lastElement = data[data.length-1].valor
        
        setTaxaRendaVariavel(lastElement)
    }
    useEffect(()=>{api()}, []);
    
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
            <p>Tempo para aposentadoria: {Math.round(perHoje())} anos</p>
            <p>Patrimônio esperado: {Math.round(patrimonioEsperado).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>Aporte anual esperado: {Math.round(parcelaAposentadoria()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </>

    )
}

export default Simulator