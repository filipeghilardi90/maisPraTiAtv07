import React, { useState, useEffect } from 'react';

const Temporizador = () => {
    const [segundos, setSegundos] = useState(0);
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        let intervalo = null;
        if (ativo) {
            intervalo = setInterval(() => {
                setSegundos((segundos) => segundos + 1);
            }, 1000);
        } else if (!ativo && segundos !== 0) {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo);
    }, [ativo, segundos]);

    const resetar = () => {
        setSegundos(0);
        setAtivo(false);
    };

    return (
        <div>
            <h1>Temporizador: {segundos}s</h1>
            <button onClick={() => setAtivo(true)}>Iniciar</button>
            <button onClick={() => setAtivo(false)}>Pausar</button>
            <button onClick={resetar}>Reiniciar</button>
        </div>
    );
};

export default Temporizador;
