import './form.css';
import TextField from '../textfield';
import DropDown from '../dropdown';
import Button from '../button';
import { useState } from 'react';

export const Form = (props) => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cargo, setCargo] = useState('')
    const [perguntaImportante, setPerguntaImportante] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')


    const onSave = (e) => {
        e.preventDefault()
        props.onRegisteredPerson({
            name: name,
            email: email,
            cargo: cargo,
            perguntaImportante: perguntaImportante,
            img: img,
            Time: time,
        })
        setName('')
        setCargo('')
        setImg('')
        setTime('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card...</h2>
                <TextField
                    required={true}
                    label="Nome"
                    type='text' 
                    placeholder="seu nome"
                    valor={name}
                    onChanged={valor => setName(valor)}
                />{/*Componentes em react ficam de outra cor*/}
                <TextField 
                    required={true} 
                    label="Email"
                    type='email' 
                    placeholder="seu melhor email"
                    valor={email}
                    onChanged={valor => setEmail(valor)}
                />
                <TextField 
                    required={true}  
                    label="Cargo"
                    type='text' 
                    placeholder="seu cargo"
                    valor={cargo}
                    onChanged={valor => setCargo(valor)}
                />
                <TextField 
                    required={true}
                    label="Pergunta importante" 
                    type='text' 
                    placeholder="qual seu homem aranha favorito"
                    valor={perguntaImportante}
                    onChanged={valor => setPerguntaImportante(valor)}
                />
                <TextField 
                    required={false}
                    label="Imagem" 
                    type='text' 
                    placeholder="o endere??o de imagem"
                    valor={img}
                    onChanged={valor => setImg(valor)}
                />
                <DropDown 
                    required={true}
                    label="Time"
                    itens= {props.times}
                    value={time}
                    onChanged={valor => setTime(valor)}
                />
                <Button text="Criar card">
                    Criar card    
                </Button>  
            </form>
        </section>
    )
}