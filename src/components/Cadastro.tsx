import React, { useState } from 'react';
import axios from 'axios';


interface InputCadastro{
    nome: string,
    sobreNome: String,
    email: string,
    senha: string,
    genero: string,
    localDate: Date
}


export const Cadastro: React.FC = () =>{
    const[dados, setDados] = useState<InputCadastro>({
        nome: '',
        sobreNome:'',
        email:'',
        senha:'',
        genero:'',
        localDate: new Date()
    });

    const handleSubmit = async (event: any) =>{
        event.preventDefault();
        
        await axios.post(`http://localhost:8080/api/cadastro`, dados)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
        .catch(e =>{
            console.log(e);
        })
     
    }

    const handleInputChange = (event :any) =>{
        
        setDados({
            ...dados,
            [event.target.name]: event.target.value
        });

    }
    
    return(
        <div>
            <form action="#" onSubmit={handleSubmit}  method="POST">
                <input type="text" name="nome" onChange={handleInputChange} placeholder="Nome" required/>
                <input type="text" name="sobreNome" onChange={handleInputChange} placeholder="sobrenome"  required/>
                <input type="email" name="email" onChange={handleInputChange} placeholder="Email" required/>
                <input type="password" name="senha" onChange={handleInputChange} placeholder="Senha" required/>
                <input type="date" name="localDate" onChange={handleInputChange}  required/>
                <select name="genero" onChange={handleInputChange}>
                    <option value="">SELECIONE</option>
                    <option value="MASCULINO">MASCULINO</option>
                    <option value="FEMININO">FEMININO</option>
                    <option value="OUTRO">OUTRO</option>
                </select>
                <button>Clique</button>
           </form>
        </div>
            
    );

}




