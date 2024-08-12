import React, { useState, useEffect } from "react";

export default function Main() {

    const [dados, setDados] = useState("");

    useEffect(() => {

        fetch("https://viacep.com.br/ws/74683465/json/")
            .then((response) => response.json())
            .then((data) => {
                setDados(data);
            });


    }, []);


    let [contador, setContador] = useState(0);

    function atualizar(valor) {

        setContador(contador + valor);

    }

    return (
        <main>
            <section className={"menu-lateral"}>


            </section>

            <section className={"conteudo-centro"}>

                CEP: {dados.cep}
                <br />
                RUA: {dados.logradouro}
                <br />
                COMPLEMENTO: {dados.complemento}
                <br />
                LOCALIDADE: {dados.localidade}

                <br />
                <br />

                <h1>{contador}</h1>
                <br />
                <button onClick={() => atualizar(5)}>Incrementar</button>
                <br />
                <br />
                <button onClick={() => atualizar(-5)}>Decrementar</button>

            </section>
        </main>
    );

}