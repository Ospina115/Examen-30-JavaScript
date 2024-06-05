import React, { useState, useEffect } from 'react';
import "../css/CuartoPunto.css"

const ApiDataList = () => {
    const [data, setData] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((apiData) => setData(apiData));
    }, []);

    const showDetails = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((userDetails) => setDetails(userDetails));
    };

    const refreshData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((apiData) => setData(apiData));
    };

    return (
        <div class="cuartopunto">
            <button id="actualizar" onClick={refreshData}>Actualizar Datos</button>
            <ul>
                {data.map((item) => (
                <li key={item.id}>
                    <button id="personas" onClick={() => showDetails(item.id)}>
                    {item.name}
                    </button>
                </li>
                ))}
            </ul>   
            {Object.keys(details).length > 0 && (
                <div>
                    <h2>{details.name}</h2>
                    <p>Email: {details.email}</p>
                    <p>Phone: {details.phone}</p>
                    <p>Website: {details.website}</p>
                </div>
            )}
        </div>
    );
};

export default ApiDataList;