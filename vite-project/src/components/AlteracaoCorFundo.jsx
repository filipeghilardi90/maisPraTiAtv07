import React, { useState, useEffect } from 'react';

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const AlteracaoCorFundo = () => {
    const [cor, setCor] = useState('#FFFFFF');

    useEffect(() => {
        document.body.style.backgroundColor = cor;
    }, [cor]);

    const mudarCor = () => setCor(randomColor());

    return (
        <div>
            <button onClick={mudarCor}>Mudar Cor de Fundo</button>
        </div>
    );
};

export default AlteracaoCorFundo;
