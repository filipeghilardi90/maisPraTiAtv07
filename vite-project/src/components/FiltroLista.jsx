import React, { useState } from 'react';

const nomesIniciais = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

const FiltroLista = () => {
    const [filtro, setFiltro] = useState('');

    const nomesFiltrados = nomesIniciais.filter((nome) =>
        nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                placeholder="Filtrar nomes"
            />
            <ul>
                {nomesFiltrados.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default FiltroLista;
