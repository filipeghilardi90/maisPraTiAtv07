import React, { useState } from 'react';

const ListaTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim()) {
            setTarefas([...tarefas, { texto: novaTarefa, completa: false }]);
            setNovaTarefa('');
        }
    };

    const removerTarefa = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index));
    };

    const marcarCompleta = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas[index].completa = !novasTarefas[index].completa;
        setTarefas(novasTarefas);
    };

    const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.completa);

    return (
        <div>
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Nova Tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {tarefasPendentes.map((tarefa, index) => (
                    <li key={index} style={{ textDecoration: tarefa.completa ? 'line-through' : 'none' }}>
                        <span onClick={() => marcarCompleta(index)}>{tarefa.texto}</span>
                        <button onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTarefas;
