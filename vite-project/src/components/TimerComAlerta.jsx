import React, { useState, useEffect } from 'react';

const TimerComAlerta = () => {
    const [tempo, setTempo] = useState(0);
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        let intervalo = null;
        if (ativo && tempo > 0) {
            intervalo = setInterval(() => {
                setTempo((tempo) => tempo - 1);
            }, 1000);
        } else if (tempo === 0 && ativo) {
            setAtivo(false);
            alert("O tempo acabou!");
        }
        return () => clearInterval(intervalo);
    }, [ativo, tempo]);

    const iniciar = () => setAtivo(true);
    const pausar = () => setAtivo(false);
    const reiniciar = () => {
        setTempo(0);
        setAtivo(false);
    };

    return (
        <div>
            <p>Defina o tempo em segundos para iniciar o cronometro</p>
            <input
                type="number"
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
                placeholder="Defina o tempo em segundos"
            />
            <button onClick={iniciar}>Iniciar</button>
            <button onClick={pausar}>Pausar</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <h1>Tempo: {tempo}s</h1>
        </div>
    );
};

export default TimerComAlerta;
