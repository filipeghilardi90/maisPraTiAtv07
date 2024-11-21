import React, { useState } from 'react';

const RequisicaoDados = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
    };

    return (
        <div>
            <button onClick={fetchData}>Carregar Dados</button>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RequisicaoDados;


// import React, { useState, useEffect } from 'react';

// const RequisicaoDados = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         setLoading(true);
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setPosts(data);
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div>
//             {loading ? (
//                 <p>Carregando...</p>
//             ) : (
//                 <ul>
//                     {posts.map((post) => (
//                         <li key={post.id}>{post.title}</li>
//                     ))}
//                 </ul>
//             )}
//             <button onClick={fetchData}>Recarregar Dados</button>
//         </div>
//     );
// };

// export default RequisicaoDados;
