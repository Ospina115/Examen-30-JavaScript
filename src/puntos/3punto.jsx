// debe mostrar una tabla con datos dinamicos donde se pueden eliminar y agregar filas
// definir un elemento llamado <dynamic-table>
// usar el shadow dom para encapsular el estilo y la estructura del componente
// debe tener campos de entrada para agregar nuevas filas con datos y un boton para eliminarla
// implementa metodos para manejar la adicion y eliminacion de filas

import React, { useState } from 'react';
import '../css/TercerPunto.css'

const DynamicTable = () => {

    const [rows, AgregarFila] = useState([]);

    const addRow = () => {
        AgregarFila([...rows, { id: Date.now(), name: '', age: 0 }]);
    };

    const deleteRow = (id) => {
        AgregarFila(rows.filter((row) => row.id !== id));
    };

    const handleNameChange = (id, newName) => {
        AgregarFila(rows.map((row) => (row.id === id ? { ...row, name: newName } : row)));
    };

    const handleAgeChange = (id, newAge) => {
        AgregarFila(rows.map((row) => (row.id === id ? { ...row, age: newAge } : row)));
    };

    return (
        <div class="tercerpunto">
            <h2>Dynamic Table</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                        <input
                        type="text"
                        value={row.name}
                        onChange={(e) => handleNameChange(row.id, e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                        type="number"
                        value={row.age}
                        onChange={(e) => handleAgeChange(row.id, parseInt(e.target.value))}
                        />
                    </td>
                    <td>
                        <button id="rojo" onClick={() => deleteRow(row.id)}>Eliminar</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button id="azul" onClick={addRow}>Agregar fila</button>
            <p>Agrega una fila para comenzar :)</p>
        </div>
    );
};

export default DynamicTable;
