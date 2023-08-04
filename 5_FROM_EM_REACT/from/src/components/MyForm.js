import "./MyForm.css";
import React, { useState } from "react";

const MyForm = ({user}) => {
    // 6 - controlled inputs
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    };

    //console.log(name);
    //console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário ");
        console.log(name, email, bio, role);

        //validação
        //envio

        // 7 - limpar form
        setName("");
        setEmail("");
        setBio("");
    };

  return (
    <div>
        {/*1 - criacao de form*/}
        {/*5 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName}
                value={name}
            />
            </div>
            {/* 2 - label envolvendo input*/}
            <label>
                <span>E-mail</span>
                {/*4 - simplificação de state */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o seu e-mail" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            {/* 8 - textarea */} 
            <label>
                <span>Bio:</span>  
                <textarea 
                name="bio" 
                placeholder="Descrição do usuário" 
                onChange={(e) => setBio(e.target.value)} 
                value={bio} 
                ></textarea>    
            </label>
            {/*9 - select*/}
            <label>
                <span>Função no sistema</span> 
                <select 
                    name="Role" 
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    >
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>     
            <input type="submit" value="Enviar" />
        </form>
    </div>
  );
};

export default MyForm