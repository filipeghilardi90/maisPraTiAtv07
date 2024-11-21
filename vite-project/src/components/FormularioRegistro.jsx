import React, { useState } from 'react';

const FormularioRegistro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && email && senha) {
            setMensagem(`Bem-vindo, ${nome}!`);
        } else {
            setMensagem('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                />
                <button type="submit">Registrar</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default FormularioRegistro;
