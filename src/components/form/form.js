import './form.css';
import TextField from '../textfield'

export const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card...</h2>
                <TextField label="Nome" placeholder="seu nome"/>{/*Componentes em react ficam de outra cor*/}
                <TextField label="Email" placeholder="seu melhor email"/>
                <TextField label="Cargo" placeholder="seu cargo"/>
                <TextField label="Pergunta importante" placeholder="qual seu homem aranha favorito"/>
                <TextField label="Imagem" placeholder="o endereço de imagem"/>
            </form>
        </section>
    )
}