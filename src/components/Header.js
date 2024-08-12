import Nav from './Nav';

const logoTopo = {

    name: 'SalomaoTech',
    url: 'imagens/logo64.png',
    className: 'logoTopo',

}

function Logado() {

    return (
        <div className='logado'>Logado</div>
    )

}

function Deslogado() {

    return (
        <div className='deslogado'>Deslogado</div>
    )

}

export default function Header() {

    let isLogado = true;
   
    return (
        <>
            <header>

                <div className={"header-left"}>
                    <img src={logoTopo.url} className={logoTopo.className} />
                </div>

                <div className={"header-right"}>
                    <Nav />
                </div>

                {

                    isLogado ? Logado() : Deslogado()

                }

            </header>
        </>
    );

}