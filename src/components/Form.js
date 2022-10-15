import React, { useState } from 'react';
import '../styles/Forms.css'
import Simulator from './Simulator';

export const Form = () => {
    const [QuantosAnos, setQuantosAnos] = useState(0);
    const [RendaEsperada, setRendaEsperada] = useState(0);
    const [RendaMensal, setRendaMensal] = useState(0);
    const [MontaDespesas, setMontaDespesas] = useState(0);

    const [calculated, setCalculated] = useState(false)

    const handleQuantosAnosInput = e => setQuantosAnos(e.target.value);
    const handleRendaEsperadaInput = e => setRendaEsperada(e.target.value);
    const handleRendaMensalInput = e => setRendaMensal(e.target.value);
    const handleMontaDespesasInput = e => setMontaDespesas(e.target.value);

    return (
        <>
            <h3 className="titulo"> Bora calcular?</h3>
            <div className="form-box">
                <form>
                    <h2>Perguntas</h2>
                    <label>Em quantos anos você deseja se aposentar?</label>
                    <input
                        type="number"
                        name="QuantosAnos"
                        value={QuantosAnos}
                        onChange={handleQuantosAnosInput}
                    />
                    <label>Quanto você esperar ter de renda na aposentadoria?</label>
                    <input
                        type="number"
                        name="RendaEsperada"
                        value={RendaEsperada}
                        onChange={handleRendaEsperadaInput}
                    />
                    <label>Qual é a sua renda mensal líquida?</label>
                    <input
                        type="number"
                        name="RendaMensal"
                        value={RendaMensal}
                        onChange={handleRendaMensalInput}
                    />
                    <label>Qual é a monta de suas despesas?</label>
                    <input
                        type="number"
                        name="MontaDespesas"
                        value={MontaDespesas}
                        onChange={handleMontaDespesasInput}
                    />
                </form>
                <span className="simulator">
                    {calculated && <Simulator
                        rendaMensal={RendaMensal}
                        montaDespesa={MontaDespesas}
                        anosAposentadoria={QuantosAnos}
                        RendaEsperada={RendaEsperada}
                    />}

                </span>
            </div>
            <button className="button" onClick={() => setCalculated(true)}>Bora vê</button>
            <div className="footer"></div>
        </>

    )
}