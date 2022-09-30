import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Forms from './Forms.css'

export const Form = () => {
    const [QuantosAnos, setQuantosAnos] = useState('');
    const [RendaEsperada, setRendaEsperada] = useState ('');
    const [RendaMensal, setRendaMensal] = useState ('');
    const [MontaDespesas, setMontaDespesas] = useState ('');

    const handleQuantosAnosInput = e => setQuantosAnos(e.target.value);
    const handleRendaEsperadaInput = e => setRendaEsperada(e.target.value);
    const handleRendaMensalInput = e => setRendaMensal (e.target.value);
    const handleMontaDespesasInput = e => setMontaDespesas(e.target.value);

    return (
        <div className="form-box">
        <h3 className="titulo"> Formulário de Perguntas</h3>
        <form>
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
            <label>Qual é a monta de suas despesas</label>
            <input 
                type="number"
                name="MontaDespesas"
                value={MontaDespesas}
                onChange={handleMontaDespesasInput}
            />
        </form>
        <div className="footer">
        <button className="button" type="submit">Realizar Cálculo</button>
        </div>
        </div>
    )
  }