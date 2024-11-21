import React, { useState } from 'react';

const TabsNavegaveis = () => {
    const [abaAtiva, setAbaAtiva] = useState('Sobre');

    const conteudo = {
        Sobre: <p>Conteúdo da aba Sobre.</p>,
        Contato: <p>Conteúdo da aba Contato.</p>,
    };

    return (
        <div>
            <div className="tabs">
                {Object.keys(conteudo).map((aba) => (
                    <button
                        key={aba}
                        className={abaAtiva === aba ? 'active' : ''}
                        onClick={() => setAbaAtiva(aba)}
                    >
                        {aba}
                    </button>
                ))}
            </div>
            <div className="conteudo-tab">
                {conteudo[abaAtiva]}
            </div>
            <style jsx>{`
                .tabs {
                    display: flex;
                }
                .tabs button {
                    padding: 10px;
                    cursor: pointer;
                    border: 1px solid #ccc;
                    background: none;
                }
                .tabs button.active {
                    border-bottom: 2px solid #000;
                }
                .conteudo-tab {
                    padding: 20px;
                    border: 1px solid #ccc;
                    margin-top: -1px;
                }
            `}</style>
        </div>
    );
};

export default TabsNavegaveis;
