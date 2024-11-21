import React, { useState } from 'react';

const imagens = [
    'link_para_imagem_1',
    'link_para_imagem_2',
    'link_para_imagem_3'
];

const GaleriaImagens = () => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const abrirModal = (imagem) => setImagemSelecionada(imagem);
    const fecharModal = () => setImagemSelecionada(null);

    const navegarImagens = (direcao) => {
        const indexAtual = imagens.indexOf(imagemSelecionada);
        const novoIndex = (indexAtual + direcao + imagens.length) % imagens.length;
        setImagemSelecionada(imagens[novoIndex]);
    };

    return (
        <div>
            <div className="galeria">
                {imagens.map((imagem, index) => (
                    <img
                        key={index}
                        src={imagem}
                        alt={`Imagem ${index + 1}`}
                        onClick={() => abrirModal(imagem)}
                        style={{ width: '100px', cursor: 'pointer' }}
                    />
                ))}
            </div>
            {imagemSelecionada && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={fecharModal}>&times;</span>
                        <img src={imagemSelecionada} alt="Imagem Ampliada" style={{ width: '100%' }} />
                        <button onClick={() => navegarImagens(-1)}>Anterior</button>
                        <button onClick={() => navegarImagens(1)}>Próxima</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GaleriaImagens;
