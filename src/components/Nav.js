export default function Nav() {

    const frutas = [

        { titulo: "Maçã", preco: 9.9 },
        { titulo: "Uva", preco: 12.9 },

    ]

    return (
        <nav>
            <ul>
                <li>
                    <a href="#">Produtos</a>
                    <ul className="submenu">
                        {
                            frutas.map((fruta, index) => (
                                <a href="#">{fruta.titulo + " R$: " + fruta.preco}</a>
                            ))
                        }
                    </ul>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>

        </nav >
    );

}