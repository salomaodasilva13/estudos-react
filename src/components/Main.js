import React, { useState, useEffect } from "react";

export default function Main() {

    const [dados, setDados] = useState(null);

    useEffect(() => {

        fetch("https://viacep.com.br/ws/74683-465/json/")
            .then((response) => response.json())
            .then((data) => {
                setDados(data);
            });


    }, []);

    return (
        <main>
            <section className={"menu-lateral"}>1</section>

            <section className={"conteudo-centro"}>

                CEP: {dados.cep}
                <br />
                RUA: {dados.logradouro}
                <br />
                COMPLEMENTO: {dados.complemento}
                <br />
                LOCALIDADE: {dados.localidade}

            </section>
        </main>
    );

}