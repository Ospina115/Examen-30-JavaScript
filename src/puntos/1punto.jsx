import React, { useState } from 'react';
import "../css/PrimerPunto.css"


function IMCCalculator() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setIMC] = useState(0);
    const [imagen, setImagen] = useState('');

    const handlePesoChange = (e) => {
        setPeso(e.target.value);
    };

    const handleAlturaChange = (e) => {
        setAltura(e.target.value);
    };

    const calcularIMC = (e) => {
        e.preventDefault()
        const valorIMC = peso / (altura ** 2);
        setIMC(valorIMC.toFixed(2));

        if (valorIMC < 18.5) {
            setImagen('Bajo Peso');
        } else if (valorIMC < 25) {
            setImagen('Normal');
        } else if (valorIMC < 30) {
            setImagen('Sobre Peso');
        } else {
            setImagen('Obeso');
        }
    };

    return (
        <div class="primerpunto">
            <h2>Calculadora de IMC</h2>
            <form>
                <label>
                    Peso (kg):
                    <input type="number" value={peso} onChange={handlePesoChange} />
                </label>
                <br />
                <label>
                    Altura (m):
                    <input type="number" value={altura} onChange={handleAlturaChange} />
                </label>
                <br />
                <button id="elpepe" class="elpepe" onClick={calcularIMC}>Calcular IMC</button>
            </form>
            <p>
                Tu IMC es: {imc}
            </p>
            <img src={`../images/${imagen}.jpeg`} alt={imagen} />
        </div>
    );
}
export default IMCCalculator;