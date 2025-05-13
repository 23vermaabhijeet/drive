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
            <br />
            <table>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            File
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Something
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Download
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(data.length > 0) ? data : <tr><td className="px-6 py-3 text-center" colSpan={6}>No file present</td></tr>}
                </tbody>
            </table>
        </div>
    );
}