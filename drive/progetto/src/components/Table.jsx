import React, { useState, useEffect } from 'react';
import Row from './Row'; // Assicurati che il componente Row sia definito
import Breadcrumbs from './Breadcrumbs'; // Assicurati che il componente Breadcrumbs sia definito

export default function Table() {
    const [data, setData] = useState([]);
    const [bcumbs, setCumbs] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3001/api/dati');
                const result = await response.json();
                const listFiles = result.map((item, index) => (
                    <Row key={index} prop={item} />
                ));
                setData(listFiles);
                setCumbs(<Breadcrumbs fullpath="/dati" />);
            } catch (error) {
                console.error('Errore durante il fetch:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {bcumbs}
            <div>{data}</div>
        </div>
    );
}