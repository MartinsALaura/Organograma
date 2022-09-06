//bibliotecas/importações
import './banner.css';

function Banner () { // -> nome da função começando com letra maiúscula porque é um componente
    //JSX
    return (
        <header className="banner">
            <img src="/img/banner.png" alt="Banner principal da page do organograma"/>
        </header>
    )
}

export default Banner//exportar function/componente banner