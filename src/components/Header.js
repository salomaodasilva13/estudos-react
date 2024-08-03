import Nav from './Nav';

const logoTopo = {

    name: 'SalomaoTech',
    url: 'imagens/logo64.png',
    className: 'logoTopo',

}

export default function Header() {

    return (
        <>
            <header>

                <div className={"header-left"}>
                    <img src={logoTopo.url} className={logoTopo.className} />
                </div>

                <div className={"header-right"}>
                    <Nav />
                </div>

            </header>
        </>
    );

}