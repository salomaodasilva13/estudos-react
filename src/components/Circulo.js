import React, { useState } from "react";

export default function Circulo() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const estilo = {
        left: x + "px",
        top: y + "px",
    }

    function moverDireita() {
        setX(x + 15);
    }

    function moverEsquerda() {
        setX(x - 15);
    }

    function moverCima() {
        setY(y - 15);
    }

    function moverBaixo() {
        setY(y + 15);
    }

    return (
        <>
            <div style={estilo} className="circulo"></div>
            <div className="divBotoes">
                <button onClick={() => moverEsquerda()}>Esquerda</button>
                <button onClick={() => moverDireita()}>Direita</button>
                <button onClick={() => moverCima()}>Cima</button>
                <button onClick={() => moverBaixo()}>Baixo</button>
            </div>
        </>
    );

}