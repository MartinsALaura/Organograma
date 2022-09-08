import './form.css';
import TextField from '../textfield';
import DropDown from '../dropdown';
import Button from '../button';

export const Form = () => {
    
    const times = ['Programação', 'Front-End', 'Data Cience', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']

    const onSave = (e) => {
        e.preventDefault()
        console.log("OI")
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card...</h2>
                <TextField required='true' label="Nome" type='text' placeholder="seu nome"/>{/*Componentes em react ficam de outra cor*/}
                <TextField label="Email" required='true' type='email' placeholder="seu melhor email"/>
                <TextField label="Cargo" required='true' type='text' placeholder="seu cargo"/>
                <TextField required='true' label="Pergunta importante" type='text' placeholder="qual seu homem aranha favorito"/>
                <TextField label="Imagem" type='text' placeholder="o endereço de imagem"/>
                <DropDown label="Time" itens= {times}/>
                <Button text="Criar card">
                    Criar card    
                </Button>  
            </form>
        </section>
    )
}